'use client'

import React from 'react';
// import { db } from '@/db';
// import { redirect } from 'next/navigation';
import * as actions from '@/actions'
import { useFormState } from 'react-dom';

const CreateSnippetPage = () => {

  const [formState, action] = useFormState(actions.createSnippet, {
    message: '',
  })




  return (
    <div className="flex  justify-center bg-gray-100 h-screen">
      <div className="bg-white p-8 rounded-md shadow-md max-w-[70vw] min-w-[390px] sm:w-screen my-5">
        <h1 className="text-3xl font-semibold mb-4 text-center">Create Code Snippet</h1>
        {/* <form action={createSnippet}> */}
        <form action={action}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-medium">Title:</label>
            <input type="text" id="title" name="title" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-6">
            <label htmlFor="snippet" className="block text-gray-700 font-medium">Snippet:</label>
            <textarea id="snippet" name="code" rows={15} className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"></textarea>
          </div>

          {formState.message && <div className='bg-red-400 text-white rounded-md  w-full mb-1 mt-[-1.5rem] p-1 border border-red-600'>
            <h1 className="text-lg  text-center text-white-600">{formState.message}</h1>
          </div>}

          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreateSnippetPage;
