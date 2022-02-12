import React from "react";
import { Link } from "react-router-dom";

const PostsList = ({posts, loading}) => {
    if (loading) {
        return (
            <div className="container mx-auto my-5 p-4 w-full md:w-4/5 xl:w-3/4 2xl:w-1/2">
                <h3 className="text-4xl font-semibold mb-6">Loading...</h3>
            </div>
        );
    }

    return (
        posts.map(post => (
            <Link className="post-list-item" to={`/post/${post.id}`} key={post.id}>
                <div className="container mx-auto my-5 p-4 w-full md:w-4/5 xl:w-3/4 2xl:w-1/2 border rounded-2xl">
                    <h3 className="text-4xl font-semibold mb-6">{post.title}</h3>
                    <p className="text-slate-600">{post.body}...</p>
                </div>          
            </Link>
        ), this)
    );
}

export default PostsList;