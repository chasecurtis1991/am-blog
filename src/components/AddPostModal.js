import React, { useState } from "react";
import {RiCloseLine} from "react-icons/ri";


const AddPostModal = ({ setIsOpen }) => {  
	return (
		<>
			<div className="bg-black bg-opacity-10 w-screen h-screen z-1 top-0 left-0 absolute" onClick={() => setIsOpen(false)}/>

			<div className="bg-white container mx-auto mb-10 p-4 w-full md:w-4/5 lg:px-4 lg:w-4/5 xl:w-3/4 2xl:w-1/2 border rounded-md fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
				<h2 className="text-3xl font-semibold mb-4 float-left">Add a Blog Post</h2>
				<button className="float-right h-9 text-3xl" onClick={() => setIsOpen(false)}><RiCloseLine/></button>
				<input type="text" className="w-full text-sm leading-6 bg-transparent text-slate-900 placeholder:text-slate-400 border border-slate-900 rounded-md py-2 pl-4 ring-1 ring-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-900" aria-label="Title" placeholder="Title" />
				<textarea className="w-full mt-4 mb-2 text-sm leading-6 bg-transparent text-slate-900 placeholder:text-slate-400 border border-slate-900 rounded-md py-2 pl-3 ring-1 ring-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-900" aria-label="Content" placeholder="Content" rows="10"/>
				<div className="w-1/4">
					<input type="date" className="w-full mb-4 text-sm leading-6 bg-transparent text-slate-900 placeholder:text-slate-400 border border-slate-900 rounded-md py-2 pl-3 ring-1 ring-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-900" aria-label="Date" placeholder="Date" />
				</div>
				<button className="bg-slate-700 hover:bg-slate-900 text-white py-2 px-4 rounded-md text-sm" onClick={() => setIsOpen(false)}>Submit</button>
			</div>   
		</>
	);
  };
export default AddPostModal;