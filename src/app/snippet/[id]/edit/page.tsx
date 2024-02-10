import { db } from "@/db";
// import { notFound } from "next/navigation";
import SnippetEditForm from "@/components/snippet-edit-form";
// import { editSnippet } from "@/actions/index" // don't include index


interface SnippetEditPageProp {
  params: {
    id: string
  }
}

async function SnippetPage(props: SnippetEditPageProp) {

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

          </div>

          <SnippetEditForm snippet={snippet} />

        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching snippet:", error);
    return <div>Error fetching snippet</div>;
  }

}

export default SnippetPage;
