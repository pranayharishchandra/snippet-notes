// pages/CreateSnippetPage.js
import React from 'react';

const CreateSnippetPage = () => {
  return (
    <div className="flex  justify-center bg-gray-100 h-screen">
      <div className="bg-white p-8 rounded-md shadow-md max-w-[70vw] min-w-[320px] w-full my-5">
        <h1 className="text-3xl font-semibold mb-4 text-center">Create Code Snippet</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-medium">Title:</label>
            <input type="text" id="title" name="title" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-6">
            <label htmlFor="snippet" className="block text-gray-700 font-medium">Snippet:</label>
            <textarea id="snippet" name="snippet" rows={5} className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreateSnippetPage;
