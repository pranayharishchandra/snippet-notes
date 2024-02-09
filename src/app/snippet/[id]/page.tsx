import { db } from "@/db";
import { notFound } from "next/navigation";

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


    return (
      <div key={snippet.id} className="border border-blue-500 m-2 rounded-md shadow-md">
        <div className="flex-row m-2">
          <div className="flex justify-between border-b border-red-300 pb-2">

            <div>
              <h1 className="text-2xl text-gray-700 p-1 ">{snippet.title}</h1>
            </div>

            <div className="flex">
              <button className="mx-1 px-2 bg-blue-300 hover:bg-blue-400 rounded-lg">Edit</button>
              <button className="mx-1 px-2 bg-blue-300 hover:bg-blue-400 rounded-lg">Delete</button>
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
