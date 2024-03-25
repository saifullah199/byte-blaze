import { useEffect, useState } from "react";
import { deleteBlog, getBlogs } from "../utils";
import BlogCard from "../Component/BlogCard";
import EmptyState from "../Component/EmptyState";


const Bookmarks = () => {
    const [blogs,setBlogs]= useState([])

    useEffect(() =>{
        const storedBlogs = getBlogs()
        setBlogs(storedBlogs)
    },[])

    const handleDelete = id =>{
        deleteBlog(id)
        const storedBlogs = getBlogs()
        setBlogs(storedBlogs)
    }

    if (blogs.length < 1) {
        return (
          <EmptyState
            message='No Bookmarks Found'
            address='/blogs'
            label='Browse Blogs'
          />
        )
      }
    return (
        <div className="grid lg:px-12 justify-center grid-cols-1 gap-6 sm:grid-cols-2
         lg:grid-cols-3">
			
            {
                blogs.map(blog => (
                    <BlogCard handleDelete={handleDelete} deletable={true} blog={blog} key={blog.id}> </BlogCard>
                ))
            }
			
		</div>
    );
};

export default Bookmarks;