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

  // create
export  async function createSnippet(formState: {message: string}, formData: FormData) {


    // Check the user input, if valid then add to db
    const title = formData.get('title') as string
    const code  = formData.get('code') as string


    if (typeof(title) !== 'string' || title.length < 2 )
      return { message: "title must be longer" }

    if (typeof(code) !== 'string' || code.length < 3 )
      return { message: "code must be longer" }

    // add it to db
    const snippet = await db.snippet.create({
      data: {
        title: title,
        snippet: code
      }
    })

    console.log(snippet)

    // redirect back to root page
    redirect('/')
    
  }



