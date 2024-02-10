import { db } from "@/db";
import { notFound } from "next/navigation";
import Link from "next/link";
import * as actions from "@/actions"

interface SnippetPageProp {
  params: {
    id: string
  }
}

async function SnippetPage(props: SnippetPageProp) {

  await new Promise((r) => setTimeout(r, 200))
  const { id } = props.params;

  try {
    // Fetch the snippet asynchronously
    const snippet = await db.snippet.findFirst({
      where: { id: parseInt(id) }
    });

    if (!snippet) {
      return (
        <div>
          {/* {notFound()} */}
          <h1 className="bold text-3xl text-center">snippet with id: {id} not found</h1>
        </div>
      );
    }

    const deleteSnippetAction = actions.deleteSnippet.bind(null, snippet.id)


    return (
      <div key={snippet.id} className="border border-blue-500 m-2 rounded-md shadow-md">
        <div className="flex-row m-2">
          <div className="flex justify-between border-b border-red-300 pb-2">

            <div>
              <h1 className="text-2xl text-gray-700 p-1 ">{snippet.title}</h1>
            </div>

            <div className="flex">

              <button className="m-1 p-2 bg-blue-300 hover:bg-blue-400 rounded-lg">
                <Link href={`/snippet/${id}/edit`}>
                  Edit
                </Link>
              </button>

              <form action={deleteSnippetAction}>
                <button className="m-1 p-2 bg-blue-300 hover:bg-blue-400 rounded-lg">
                  Delete
                </button>
              </form>

            </div>

          </div>

          <pre>
            <p className="rounded-md m-2 text-md  p-2 bg-violet-200 text-black">
              {snippet.snippet}
            </p>
          </pre>

        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching snippet:", error);
    return <div>Error fetching snippet</div>;
  }
}

export default SnippetPage;
