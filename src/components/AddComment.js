import React from "react";

const AddComment = () => {
    return (
        <div className="container mx-auto mb-10 p-4 w-full md:w-4/5 lg:px-4 lg:w-4/5 xl:w-3/4 2xl:w-1/2 border rounded-md">
            <h2 className="text-3xl font-semibold mb-4">Add a Comment</h2>
            <input type="text" className="w-full text-sm leading-6 bg-transparent text-slate-900 placeholder:text-slate-400 rounded-md py-2 pl-4 ring-1 ring-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 dark:text-slate-100 dark:placeholder:text-slate-500 dark:ring-0 dark:focus:ring-2" aria-label="Name" placeholder="Name" />
            <textarea className="w-full mt-4 mb-2 text-sm leading-6 bg-transparent text-slate-900 placeholder:text-slate-400 rounded-md py-2 pl-3 ring-1 ring-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 dark:text-slate-100 dark:placeholder:text-slate-500 dark:ring-0 dark:focus:ring-2" placeholder="Comment" rows="5"/>
            <button className="bg-slate-700 hover:bg-slate-900 text-white py-2 px-4 rounded-md text-sm">Submit</button>
        </div>
    )
}

export default AddComment;