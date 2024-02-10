'use client'
import { Editor } from "@monaco-editor/react";

interface SnippetEditFormProps {
  snippet: string
}

function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  return (
    <div>
      <Editor
        className='min-h-[40vh] auto mt-3'
        theme="vs-dark"
        language="javascript"
        defaultValue={snippet}
        options={{minimap: {enabled: false}}}
      />

    </div>
  )
}

export default SnippetEditForm
