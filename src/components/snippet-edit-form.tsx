'use client'
import { Editor } from "@monaco-editor/react";
import { Snippet } from "@prisma/client";
import { useState } from "react";
import * as actions from "@/actions"

interface SnippetEditFormProps {
  snippet: Snippet
}

function SnippetEditForm({ snippet }: SnippetEditFormProps) {

  const [code, setCode] = useState(snippet.snippet)


  // value parameter in the handleChange function is being assigned an empty string "" as its default value if no value is provided when the function is called
  const handleChange = (value: string = "") => {
    // console.log(value)
    setCode(value)
  }

  const editSnippetAction = actions.editSnippet.bind(null, snippet.id, code)

  return (
    <div className="flex-row">
      <Editor
        className='h-[60vh] min-h-[20vh] mt-3 rounded-lg'
        theme="vs-dark"
        language="javascript"
        defaultValue={snippet.snippet}
        options={{ minimap: { enabled: false } }}
        onChange={handleChange}
      />

      <form action={editSnippetAction}>
        <div className="flex">
          <button className="m-1 p-2 bg-blue-300 hover:bg-blue-400 rounded-lg" >
            Save
          </button>
        </div>
      </form>

    </div>
  )
}

export default SnippetEditForm
