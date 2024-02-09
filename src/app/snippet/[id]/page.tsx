import { db } from "@/db";
import { notFound } from "next/navigation";

interface SnippetPageProp {
  params: {
    id: string
  }
}

async function SnippetPage(props: SnippetPageProp) {
  const { id } = props.params;

  try {
    // Fetch the snippet asynchronously
    const snippet = await db.snippet.findFirst({
      where: { id: parseInt(id) }
    });

    if (!snippet) {
      return notFound();
    }

    return (
      <div>
    
        {snippet.snippet}
        {snippet.snippet}
      </div>
    );
  } catch (error) {
    console.error("Error fetching snippet:", error);
    return <div>Error fetching snippet</div>;
  }
}

export default SnippetPage;
