import { Link } from "react-router-dom";


const BlogCard = ({blog}) => {
    const { cover_image,title,description,published_at,id} =blog;
    return (
        <div>
            <Link 
                to={`/blog/${id}`}
                className="max-w-sm mx-auto group transition border-2 hover:scale-105 border-primary 
                hover:border-secondary border-opacity-30 hover:no-underline focus:no-underline bg-gray-900">
				<img role="presentation" className="object-cover w-full rounded
                 h-44 bg-gray-500" src={cover_image } />
				<div className="p-6 space-y-2 text-black">
					<h3 className="text-2xl font-semibold  group-hover:underline group-focus:underline">{title}</h3>
					<span className="text-xs ">{new Date(published_at).toLocaleDateString()}</span>
					<p> {description}</p>
				</div>
			</Link>
        </div>
    );
};

export default BlogCard;