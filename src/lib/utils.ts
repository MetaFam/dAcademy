import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import * as Delegation from '@web3-storage/w3up-client/delegation'
import * as W3UpClient from '@web3-storage/w3up-client'

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const toHTTP = (url?: string) => {
  return url?.replace(/^ipfs:\/\//, 'https://w3s.link/ipfs/')
}

export const maybeENS = (test?: string) => {
  if(!test) return false
  if(/^\S+(\.\S+)+$/g.test(test)) return true
  if(!test.startsWith('0x')) {
    console.warn(`Specious ENS Name: ${test}`)
  }
  return false
}

export const upload = async (files: Array<File>) => {
  const client = await W3UpClient.create()

  console.debug({
    'W3Up Client': client,
    accounts: client.accounts(),
    did: client.did(),
  })

  const response = await fetch(
    import.meta.env.VITE_UCAN_DELEGATOR,
    {
      method: 'POST',
      body: JSON.stringify({ did: client.did() })
    }
  )
  const { delegation } = await response.json()

  const { ok, error } = await Delegation.extract(
    new Uint8Array(delegation)
  )

  if(!ok) {
    throw new Error(
      'Failed to extract delegation.',
      { cause: error },
    )
  }

  const space = await client.addSpace(ok)
  client.setCurrentSpace(space.did())

  return (await client.uploadDirectory(files)).toString()
}

export const truncateHash = (hash: string, length: number = 6) => {
  if (!hash) return '';
  return `${hash.slice(0, length)}...${hash.slice(-length)}`;
}

export const toSlug = (title: string) => (
  title.toLowerCase().replace(/\s+/g, '-').replace(/[\?,:]/g, '')
)

export const toDataURL = (
  file: File | undefined, setter: (u: string | null) => void,
) => {
  if(!file) {
    setter(null)
  } else {
    const reader = new FileReader()
    reader.onload = () => {
      let { result } = reader
      if(result instanceof ArrayBuffer) {
        result = new String(result) as string
      }
      setter(result)
    }
    reader.readAsDataURL(file)
  }
}

export const timestamp = () => {
  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZoneName: 'longOffset',
  } as const

  return (
    new Date()
    .toLocaleString('sv-SE', options)
    .replace(/\//g, '⁄')
    .replace(',', '@')
    .replace(/\s/g, '')
    .replace('GMT', '')
  )
}

export const toHex = (buffer: Uint8Array) => (
  `0x${Array.from(buffer).map((byte) => (
    byte.toString(16).padStart(2, '0')
  )).join('')}`
)

export const truncateAddress = (address: string) => {
  if (!address) return ''
  return `${address.slice(0, 7)}…${address.slice(-5)}`
}
