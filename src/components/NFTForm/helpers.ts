import type {
  CodedError, Limits, Maybe,
  MetaMaskError, NamedString, NestedError,
  SpanList,
} from './types'
import { CID } from 'multiformats/cid'
// import { NETWORKS } from '@/lib/networks'
import JSON5 from 'json5'
// import { NFTStorage } from 'nft.storage'
// import { useWeb3 } from './hooks'
import { TransactionExecutionError } from 'viem'

export function httpURL(uri?: null): undefined
export function httpURL(uri: string): string

export function httpURL(uri?: Maybe<string>) {
  const [, protocol, origCID, path] = (
    uri?.match(/^(ip[nf]s):(?:\/\/)?([^/]+)(?:\/(.*))?$/) ?? []
  )

  if(origCID) {
    const cid = CID.parse(origCID)
    const v0CID = cid.toV0().toString()
    const v1CID = cid.toV1().toString()
    const pattern =  'https://w3s.link/{protocol}/{v1cid}/{path}'
    return (
      encodeURI(
        pattern
        .replace(/{protocol}/g, protocol)
        .replace(/{cid}/g, origCID)
        .replace(/{v0cid}/g, v0CID)
        .replace(/{v1cid}/g, v1CID)
        .replace(/{path}/g, path ?? '')
      )
      .replace(/#/g, '%23')
    )
  }

  return uri ?? undefined
}

export const capitalize = (str: string) => {
  if(!str?.split) return str
  return (
    str.trim().split(/\s+/g)
    .map((sub) => (`${
      sub[0]?.toUpperCase() ?? ''
    }${
      sub.substring(1)?.toLowerCase() ?? ''
    }`))
    .join(' ')
  )
}

export const isEmpty = (
  (val: unknown) => {
    if(Array.isArray(val)) {
      return val.length === 0
    }
    if(val instanceof Object) {
      return Object.keys(val).length === 0
    }
    if(val === '') {
      return true
    }
    return false
  }
)

export const isSet = (
  (val: unknown) => {
    if(val === '' || val == null) {
      return false
    }
    return true
  }
)

// export const useSwitchTo = () => {
//   const { walletClient } = useWeb3()

//   return async (chain: number) => {
//     const chainId = `0x${chain.toString(16)}`
//     console.debug({ chain, chainId })
//     try {
//       walletClient.request({
//         method: 'wallet_switchEthereumChain',
//         params: [{ chainId }],
//       })
//     } catch (switchError) {
//       // if ((switchError as CodedError).code === 4902) {
//       //   const chainName = (
//       //     Object.values(NETWORKS).find(
//       //       ({ chainId }: { chainId: number }) => (
//       //         chain === chainId
//       //       )
//       //     )?.name
//       //   )
//       //   throw new Error(
//       //     `The network “${chainName ?? '𝓤𝓷𝓴𝓷𝓸𝔀𝓷'}”`
//       //     + ' is not yet available in your MetaMask.\n\n'
//       //     + ' Please add it.'
//       //   )
//       // } else {
//       //   throw switchError
//       // }
//     }
//   }
// }

// export async function ipfsify(
//   { filesOrURL, storage }:
//   { filesOrURL: NamedString | string | File, storage: NFTStorage }
// ): Promise<string>
// export async function ipfsify(
//   { filesOrURL, storage }:
//   { filesOrURL: Array<NamedString> | FileList,  storage: NFTStorage }
// ): Promise<Array<string>>
// export async function ipfsify({
//   storage, filesOrURL,
// }: {
//   filesOrURL: (
//     string | NamedString | Array<NamedString> | File | FileList
//   )
//   storage: NFTStorage,
// }) {
//   let value = filesOrURL
//   if(
//     value == null
//     || (Array.isArray(value) && value.every((v) => v == null))
//   ) {
//     const str = JSON5.stringify(value)
//     throw new Error(`\`ipfsify\` called with value = \`${str}\``)
//   }

//   if(Array.isArray(value)) {
//     const [last] = value.slice(-1)
//     if(typeof last === 'string') {
//       value = last
//     }
//   }

//   if(typeof value === 'string') {
//     if(value.startsWith('ipfs://')) {
//       return value
//     }
//     throw new Error(`Unknown File String: ${value}`)
//   }

//   if(storage == null) {
//     return null
//   }

//   const list: Array<File | NamedString> = (
//     Array.isArray(value) ? (
//       value as Array<File | NamedString>
//     ) : (
//       [value as File | NamedString]
//     )
//   )

//   const root = await storage.storeDirectory(
//     (list instanceof FileList) ? list : (
//       list.map((entry) => new File(
//         [(entry as NamedString).content ?? entry as File],
//         entry.name,
//       ))
//     )
//   )
//   return (
//     list.length === 1 ? (
//       `ipfs://${root.toString()}/${list[0].name}`
//     ) : (
//       list.map((entry) => (
//         `ipfs://${root.toString()}/${entry.name}`
//       ))
//     )
//   )
// }

export const regexify = (str?: string) => {
  if(!str) return str

  let matches = str.split(/((\w)\2{3,})/g)
  for(let i = 0; i < matches.length - 1; i++) {
    const str = matches[i]
    const next = matches[i + 1]
    if((new Set([...str, ...next])).size === 1) {
      matches[i] += next
      matches[i + 1] = ''
      i++
    }
  }
  matches = matches.filter((m) => m !== '')
  const condensed = matches.map((m: string) => {
    const [char] = m
    if(
      m.length > 3
      && /\w/.test(char)
      && (new Set(m)).size === 1
    ) {
      return `${char}{${m.length - 1}}`
    } else {
      return m
    }
  })

  return condensed.join('')
}

export const deregexify = (str?: string) => {
  if(!str) return str

  const matches = str.split(/(\w\{\d+\})/)
  const expanded = matches.map((m: string) => {
    const [_, char, count] = m.match(/^(.)\{(\d+)\}/) ?? []
    if(char && count) {
      return char.repeat(Number(count))
    } else {
      return m
    }
  })
  return expanded.join('')
}

export const extractMessage = (error: unknown): string => (
  (
    (error as { reason: string }).reason
    ?? (error as TransactionExecutionError)?.details
    ?? (error as NestedError)?.error?.message
    ?? (error as MetaMaskError)?.data?.message
    ?? (error as Error)?.message
    ?? (typeof error === 'string' ? error : `𝑼𝒏𝒌𝒏𝒐𝒘𝒏 𝑬𝒓𝒓𝒐𝒓: ${JSON5.stringify(error, null, 2)}`)
  ) as string
)

export const spanListToString = (list: SpanList) => (
  list.map((entry) => (
    (typeof entry === 'number') ? (
      entry.toString()
    ) : (
      (() => {
        const { low, high } = entry as Limits
        return `${low}–${high}`
      })()
    )
  ))
  .join(',')
)

export const toSpanList = (str: string): SpanList => {
  if(str == null) return []

  const visibles = (
    str.split(/\s*(\s|,|;)\s*/)
    .filter((str) => !['', ',', ';'].includes(str.trim()))
  )
  const list = (
    visibles.map((entry) => {
      const parts = entry.split(/[-–—]/)
      if(parts.length > 1) {
        const [[low], [high]] = (
          [parts, parts.slice(-1)]
        )
        return Object.fromEntries(
          Object.entries({ low, high }).map(
            ([key, val]) => [key, Number(val)]
          )
        )
      }
      return Number(entry)
    })
  )

  Object.defineProperty(
    list,
    'toString',
    { get() { return () => spanListToString(this) } }
  )
  return list
}