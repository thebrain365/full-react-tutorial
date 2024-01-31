import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs] = useState([
        {title: "Spring and Spring Boot", body: "lorem-ipsum...", author: "Muano", id: 1},
        {title: "React", body: "lorem-ipsum...", author: "Makhokha", id: 2},
        {title: "Android Studio", body: "lorem-ipsum...", author: "Muano", id: 3}
    ])

    return ( 
        <div className="home">
            <BlogList blogs={ blogs } title="All Blogs"></BlogList>
            <BlogList blogs={ blogs.filter(blog => blog.author === "Muano") } title="Muano's Blogs"></BlogList>
        </div>
     );
}
 
export default Home;