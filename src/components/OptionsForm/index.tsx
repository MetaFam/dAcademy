import URIForm from './URIForm'
import JSONForm from './JSONForm'
import NFTForm from './NFTForm'
import SubmitButton from './SubmitButton'
import {
  isSet, isEmpty, regexify, extractMessage,
} from './helpers'
import { upload } from '#utils'
import React, { useCallback, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import JSON5 from 'json5'
import {
  ERC1155Metadata, FormValues, Maybe, OpenSeaAttribute, Attribute,
} from './types'
import { useNavigate } from '@tanstack/react-router'
import toast from 'react-hot-toast'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { Values } from './types'
import os from './OptionsForm.module.css'

export const OptionsForm: React.FC<{
  purpose?: 'create' | 'update'
  tokenId?: string
  metadata?: Maybe<ERC1155Metadata>
  metaURI?: string
}> = ({
  purpose = 'create',
  tokenId,
  metadata: incomingData,
  metaURI: incomingURI,
}) => {
    const FIELD_FORM = 0
    const URI_FORM = 1
    const JSON5_FORM = 2
    const navigate = useNavigate()
    const {
      register, handleSubmit, watch, setValue: setValue,
      formState: { isSubmitting: processing },
    } = useForm<FormValues>({
      defaultValues: {
        uri: incomingURI,
      },
    })
    const [metadata, setMetadata] = (
      useState<ERC1155Metadata>(incomingData ?? {})
    )
    const [tab, setTab] = useState(FIELD_FORM)
    const values = watch()
    const json5 = watch('json5')
    const uri = watch('uri')

    const buildMeta = useCallback(async ({
      data, ipfs = true,
    }: { data: FormValues, ipfs?: boolean }) => {
      const {
        name, description, homepage, color,
        image, animation, attributes,
      } = data

      const metadata: ERC1155Metadata = {
        name: !!name ? name : '𝙐𝙣𝙩𝙞𝙩𝙡𝙚𝙙',
        decimals: 0,
      }

      if (isSet(description)) {
        metadata.description = description
      }

      if (isSet(homepage)) {
        metadata.external_url = homepage
      }

      if (image) {
        metadata.image = image
      }

      if (animation) {
        metadata.animation_url = animation
      }

      if (color?.startsWith('#')) {
        metadata.background_color = (
          color.substring(1).toUpperCase()
        )
      }

      if (isSet(attributes) && !isEmpty(attributes)) {
        metadata.attributes = (
          attributes?.map(({ name, value, type }: Attribute) => {
            const attr: OpenSeaAttribute = {
              trait_type: name,
              value,
            }
            // including a string type causes nothing to render
            if (type !== 'string') {
              attr.display_type = type
            }
            return attr
          })
        )
      }

      return metadata
    }, [])

    const configure = useCallback(
      async ({ metadata }: { metadata: string }) => {
        // if (!rwContract) {
        //   throw new Error(
        //     `Cannot connect to contract to ${purpose} metadata.`
        //   )
        // }
        if (tokenId == null) {
          throw new Error('Token id is unset.')
        }
        if (metadata == null) {
          throw new Error('metadata is unset.')
        }
        try {
          // const hash = await rwContract('setURI', [BigInt(tokenId), metadata]) as '0x{string}'
          // await contractClient.waitForTransactionReceipt({ hash })

          if (metadata !== '') {
            navigate({ to: `/view/${regexify(tokenId)}` })
          }
        } catch (error) {
          console.error({ error })
          toast.error(extractMessage(error))
        }
      },
      [tokenId, purpose, navigate],
    )

    const submit = useCallback(async (data: FormValues) => {
      try {
        const name = `metadata.${(new Date()).toISOString()}.json`
        let metadata = await (async () => {
          switch (tab) {
            case FIELD_FORM: {
              const content = JSON.stringify(
                await buildMeta({ data }), null, 2
              )
              return content
            }
            case URI_FORM: {
              return data.uri ?? ''
            }
            case JSON5_FORM: {
              if (data.json5 == null) {
                throw new Error('JSON5 isn’t set.')
              }
              const meta = JSON5.parse(data.json5)
              return JSON.stringify(meta, null, 2)
            }
            default: {
              throw new Error(`Unknown Tab: ${tab}`)
            }
          }
        })()

        if (metadata == null) {
          throw new Error(`Metadata is \`${JSON5.stringify(metadata)}\`.`)
        } else if (metadata !== '') {
          metadata = await upload(
            [new File([new Blob([metadata])], name)],
          )
        }
        await configure({ metadata })
      } catch (error) {
        console.error({ error })
        toast.error(extractMessage(error))
      }
    }, [buildMeta, configure, tab])

    const changeTo = useMemo(() => ({
      fields: async (previous: number) => {
        let metaPromise
        switch (previous) {
          case URI_FORM: {
            if (uri && uri !== '') {
              metaPromise = (
                fetch(uri)
                  .then((res) => res.text())
                  .then<ERC1155Metadata>(
                    (txt) => JSON5.parse(txt)
                  )
              )
            }
            break
          }
          case JSON5_FORM: {
            if (json5 && json5 !== '') {
              metaPromise = Promise.resolve<ERC1155Metadata>(
                JSON5.parse(json5)
              )
            }
            break
          }
        }

        if (metaPromise) {
          setMetadata({})
          metaPromise
            .then((meta) => {
              const types = [
                { image: 'image' },
                { animation: 'animation_url' },
              ] as const
              for (const typeSet of types) {
                const type = Object.keys(typeSet)[0] as keyof typeof typeSet
                const key = typeSet[type] as Values<typeof typeSet>
                if (
                  typeof meta[key] === 'string'
                  && (meta[key] as string).startsWith('blob:')
                ) {
                  meta[key] = values[type] as string
                }
              }
              setMetadata(meta)
            })
        } else {
          toast.error('No metadata specified.')
        }
      },
      uri: async (previous: number) => {
        return previous
      },
      json5: async (previous: number) => {
        let metaPromise
        switch (previous) {
          case FIELD_FORM: {
            metaPromise = (
              buildMeta({ data: values, ipfs: false })
            )
            break
          }
          case URI_FORM: {
            if (uri && uri !== '') {
              metaPromise = (
                fetch(uri)
                  .then<ERC1155Metadata>((res) => res.json())
              )
            }
            break
          }
        }
        if (metaPromise) {
          setMetadata({})
          setMetadata(await metaPromise)
        } else {
          toast.error('No metadata found.')
        }
      }
    }), [uri, json5, buildMeta, values])

    const onSelect = useCallback(
      (idx: number, previous: number) => {
        if (idx === previous) return

        let changePromise
        switch (idx) {
          case FIELD_FORM: {
            changePromise = changeTo.fields(previous)
            break
          }
          case URI_FORM: {
            changePromise = changeTo.uri(previous)
            break
          }
          case JSON5_FORM: {
            changePromise = changeTo.json5(previous)
            break
          }
        }
        changePromise?.then(() => setTab(idx))
      },
      [changeTo],
    )

    return (
      <fieldset id={os.form} className="relative border border-secondary p-4 w-full">
        <legend>NFT Configuration</legend>
        <form onSubmit={handleSubmit(submit)}>
          <Tabs {...{ onSelect }}>
            <TabList className="flex justify-evenly">
              <Tab>Fields</Tab>
              <Tab>URI</Tab>
              <Tab>JSON5</Tab>
            </TabList>
            {[NFTForm, URIForm, JSONForm].map(
              (Form, idx) => (
                <TabPanel key={idx}>
                  <Form {...{
                    register,
                    watch,
                    setValue,
                    tokenId,
                    metadata,
                  }} />
                </TabPanel>
              )
            )}
          </Tabs>
        </form>
      </fieldset>
    )
  }

export default OptionsForm