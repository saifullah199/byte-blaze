import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { deleteBlog } from "../utils";

const BlogCard = ({blog, deletable,handleDelete}) => {
    const { cover_image,title,description,published_at,id} =blog;
    
    return (
        <div className="flex relative">
            <Link 
                to={`/blog/${id}`}
                className="max-w-sm mx-auto group transition border-2 hover:scale-105 border-primary 
                hover:border-secondary border-opacity-30 hover:no-underline focus:no-underline ">
				<img role="presentation" className="object-cover w-full rounded
                 h-44 bg-gray-500" src={cover_image } />
				<div className="p-6 space-y-2 text-black">
					<h3 className="text-2xl font-semibold  group-hover:underline group-focus:underline">{title}</h3>
					<span className="text-xs ">{new Date(published_at).toLocaleDateString()}</span>
					<p> {description}</p>
				</div>
			</Link>
            {deletable && <div 
            onClick={() => handleDelete(id)}
            className="absolute p-3 rounded-full hover:scale-105 -top-5 -right-5">
                <MdDeleteForever className=" text-5xl text-secondary group-hover:text-primary" /></div>}
        </div>
    );
};

export default BlogCard;