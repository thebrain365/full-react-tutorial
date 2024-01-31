import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: "Spring and Spring Boot", body: "lorem-ipsum...", author: "Muano", id: 1},
        {title: "React", body: "lorem-ipsum...", author: "Makhokha", id: 2},
        {title: "Android Studio", body: "lorem-ipsum...", author: "Muano", id: 3}
    ])

    const handleDelete = id => {
        let newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    return ( 
        <div className="home">
            <BlogList blogs={ blogs } handleDelete={handleDelete} title="All Blogs"></BlogList>
        </div>
     );
}
 
export default Home;