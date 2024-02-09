import { db } from "@/db";
import { notFound } from "next/navigation";

interface SnippetPageProp {
  params: {
    id: string
  }
}

async function SnippetPage(props: SnippetPageProp) {

  await new Promise((r) => setTimeout(r,200))
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
        
        <h1 className="text-2xl text-gray-700 p-1 border-b border-red-300">{snippet.title}</h1>
        <h1 className="text-md text-gray-700 p-1">{snippet.snippet}</h1>
      </div>
    </div>
    );
  } catch (error) {
    console.error("Error fetching snippet:", error);
    return <div>Error fetching snippet</div>;
  }
}

export default SnippetPage;
