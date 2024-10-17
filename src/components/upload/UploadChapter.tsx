import React from'react';
import { MDXEditorMethods } from '@mdxeditor/editor'

const ChapterUpload = () => {
  return <div>Test</div>;
};
// const ChapterUpload = () => {
//   const editorRef = React.useRef<MDXEditorMethods>(null)
//   const Editor = React.lazy(
//     () => import('../MarkdownEditor')
//   )

//   console.log('ChapterUpload component is being rendered');

//   return (
//     <>
//     <div>
//     <div>
//       <h1>hello</h1>
//       <Editor
//           {...{ editorRef }}
//           markdown=""
//           className="dark-theme dark-editor content mt-10"
//         />
//       </div>
//       <h1>Loading...</h1>
//       </div>
//     </>
//   );
// };

export default ChapterUpload;