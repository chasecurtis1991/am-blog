import { React, useState, useEffect } from "react";
import PostsList from "../components/PostsList";
import AddPostModal from "../components/AddPostModal";
import PaginationMenu from "../components/PaginationMenu";
import { postAdded } from "../actions";
import store from "../store";
import axios from "axios";

// This page is for displaying the list of articles.
// The articles must be in a paginatable list.
// When a user clicks on a list item it opens the post page to display the post.
// The page will have an "Add New Post" button that opens a modal to create a new post.
// Each post has three fields: title, content and date.


export default function BlogPage() {
  const [isOpen, setIsOpen] = useState(false);

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    }
  
    fetchPosts();
  }, []);
  
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      {isOpen && <AddPostModal setIsOpen={setIsOpen} />}
      <div className="container mx-auto mt-5 px-4 pt-4 w-full md:w-4/5 lg:px-4 lg:w-4/5 xl:w-3/4 2xl:w-1/2 h-36 align-middle">
        <h1 className="text-5xl font-semibold my-6 float-left">My Blog</h1>
        <button onClick={() => setIsOpen(true)} className="py-2 px-2 my-8 font-medium text-white bg-slate-700 hover:bg-slate-900 rounded float-right">
          Add New Post
        </button>
      </div>
      <PostsList posts={currentPosts} loading={loading}/>
      <PaginationMenu postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
    </>
  );
}
