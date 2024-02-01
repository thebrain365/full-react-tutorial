import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:8000/blogs")
            .then(res => { 
                if (!res.ok) {
                    throw Error("couldn't fetch the resource");
                }
                return res.json(); 
            })
            .then(data => {
                setBlogs(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                setIsPending(false);
                setError(err.message);
            });
        }, 1500)
    }, [])

    return ( 
        <div className="home">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading blogs...</div> }
            { blogs && <BlogList blogs={ blogs } title="All Blogs"></BlogList> }
        </div>
     );
}
 
export default Home;