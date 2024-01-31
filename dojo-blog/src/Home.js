import { useState } from "react";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: "Spring and Spring Boot", body: "lorem-ipsum...", author: "Muano", id: 1},
        {title: "React", body: "lorem-ipsum...", author: "Makhokha", id: 2},
        {title: "Android Studio", body: "lorem-ipsum...", author: "Ano", id: 3}
    ])

    return ( 
        <div className="home">
            { blogs.map((blog) => (
                <div className="blog-preview" key={ blog.id }>
                    <h2>{ blog.title }</h2>
                    <p>Written by: { blog.author }</p>
                </div>
            )) }
        </div>
     );
}
 
export default Home;