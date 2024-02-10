'use server'
import { db } from "@/db"
import { redirect } from "next/navigation"

export async function editSnippet(id: number, snippet: string) {
    // console.log('edit snippet', id, snippet)
  await db.snippet.update({
    where: {id},
    data : {snippet}
  })
  redirect(`/snippet/${id}`)
}

export async function deleteSnippet(id: number) {
    // console.log('edit snippet', id, snippet)
  await db.snippet.delete({
    where: {id},
  })
  redirect(`/`)
}



