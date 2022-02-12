import React from "react";

const CommentCard = ({username, comment}) => {
    return (
        <div className="container mx-auto my-5 p-6 w-full md:w-4/5 lg:my-4 lg:px-6 lg:w-4/5 xl:w-3/4 2xl:w-1/2 border rounded-md">
            <div className="md:flex">
                <img alt="Avatar" className="w-12 h-12 block rounded-full mr-4" src="https://picsum.photos/32/32/?random"/>
                <figcaption className="font-small">
                    <div className="text-indigo-600 text-bold">
                        Bob
                    </div>
                    <div className="text-slate-700 dark:text-slate-500">
                        JUNE 25, 2021 AT 5:46 AM
                    </div>
                </figcaption>
            </div>
            <div className="pt-6 text-center md:text-left space-y-4">
                <blockquote>
                    <p className="text-sm">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </p>
                </blockquote>
                <p className="text-sm text-indigo-600 hover:text-indigo-900 float-left pl-3 pb-3">Reply</p>
            </div>
        </div>
    )
}

export default CommentCard;