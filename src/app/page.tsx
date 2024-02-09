import { db } from "@/db";

export default async function Home() {

  const snippets = await db.snippet.findMany()

  const codeSnippets = snippets.map (snippet => (
    <div key={snippet.id} className="border border-blue-500 m-2 rounded-md shadow-md">
      <div className="flex-row m-2">
      <h1 className="text-2xl text-gray-700 p-1 border-b border-red-300">{snippet.title}</h1>
      <h1 className="text-md text-gray-700 p-1">{snippet.snippet}</h1>
      </div>
    </div>
  ))



  return (
    <div >

    <div className="flex-row w-[70vh] mx-auto">
      {codeSnippets}
    </div>
    </div>
  );
}
