import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AddComment from "../components/AddComment";
import CommentsList from "../components/CommentsList";
import axios from "axios";
import NotFound from "./NotFoundPage";

// This page displays the post content.
// It should display the comments for the post in a nested tree.
// There should be a form to add a new comment.
// The latest comments should be displayed first at each level.
// Use the design given in the PDF.

export default function PostPage() {
  let postId = useParams().id;
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      setPost(res.data);
    }
    fetchPost();
  }, [postId]);


  return (
    <>
      <div className="container mx-auto my-5 px-4 py-4 w-full md:w-4/5 lg:my-4 lg:px-4 lg:w-4/5 xl:w-3/4 2xl:w-1/2">
        <h1 className="text-5xl font-semibold my-6">{post.title}</h1>
        <p className="text-slate-600">{post.body}</p>
      </div>
      <AddComment />
      <CommentsList />
    </>
  );
};
