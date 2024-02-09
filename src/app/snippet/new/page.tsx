// pages/CreateSnippetPage.js
import React from 'react';
import { db } from '@/db';
import { redirect } from 'next/navigation';

const CreateSnippetPage = () => {

  // create
  async function createSnippet(formData: FormData) {
    // This needs to be a server
    'use server'

    // Check the user input, if valid then add to db
    const title = formData.get('title') as string
    const code  = formData.get('code') as string

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




  return (
    <div className="flex  justify-center bg-gray-100 h-screen">
      <div className="bg-white p-8 rounded-md shadow-md max-w-[70vw] min-w-[390px] sm:w-screen my-5">
        <h1 className="text-3xl font-semibold mb-4 text-center">Create Code Snippet</h1>
        <form action={createSnippet}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-medium">Title:</label>
            <input type="text" id="title" name="title" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-6">
            <label htmlFor="snippet" className="block text-gray-700 font-medium">Snippet:</label>
            <textarea id="snippet" name="code" rows={15} className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full">Submit</button>
        </form>
      </div>
    </div>
  );
}; 

export default CreateSnippetPage;
