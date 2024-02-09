import { db } from "@/db";
import Link from "next/link";

export default async function Home() {
  const snippets = await db.snippet.findMany();

  const codeSnippets = snippets.map((snippet) => (
    <div key={snippet.id} className="border border-blue-500 m-2 rounded-md shadow-md">
      <div className="flex m-2 justify-between">
        <h1 className="text-2xl text-gray-700 p-1">{snippet.title}</h1>
        <Link href={`/snippet/${snippet.id}`}>
          <button className="p-2 border border-blue-500 bg-blue-300 hover:bg-blue-500 rounded-lg">
            View
          </button>
        </Link>
      </div>
    </div>
  ));

  return (
    <div className="flex items-center justify-center mt-2">
      <div className="w-full max-w-screen-md">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold text-gray-800">Code Snippets</h1>
          <Link href={`/snippet/new`}>
            <button className="p-2 border border-blue-500 bg-blue-300 hover:bg-blue-500 rounded-lg">
              ADD NEW SNIPPET
            </button>
          </Link>
        </div>
        <div>{codeSnippets}</div>
      </div>
    </div>
  );
}
