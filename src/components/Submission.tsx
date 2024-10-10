import React, { useState, Suspense } from 'react'
import toast from 'react-hot-toast'
import { upload } from '../utils'

export const Submission = (
  { name = 'Submission' }: { name?: string }
) => {
  const [markdown, setMarkdown] = useState('')
  const Editor = React.lazy(
    () => import('./MarkdownEditor')
  )

  return (
    <Suspense fallback={<h3>Loading Submission Editor…</h3>}>
      <Editor
        onChange={(mark: string) => setMarkdown(mark)}
        className="dark-theme dark-editor content mt-10"
      />
      <button
        onClick={async () => {
          if(!markdown) throw new Error(
            `Invalid \`markdown\`: "${markdown}".`
          )
          const blob = new Blob(
            [JSON.stringify({ name, description: markdown })],
            { type: 'application/json' },
          )
          const cid = await upload([
            new File([blob], 'submission.json'),
          ])
          toast.custom(
            <>
              Successfully uploaded response submission to Web3.Storage at
              {' '}<a href={`https://w3s.link/ipfs/${cid}`}>ipfs://{cid}</a>.
            </>,
            { duration: 15_000, position: 'bottom-center' },
          )
        }}
        className="btn btn-wide text-primary my-6"
      >
        Submit Proof
      </button>
    </Suspense>
  )
}

export default Submission