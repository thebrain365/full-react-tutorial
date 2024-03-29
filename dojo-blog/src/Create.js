import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("muano");
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        const blog = { title, body, author }

        setIsPending(true);

        setTimeout(() => {
            fetch("http://localhost:8000/blogs", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(blog)
            })
            .then(() => {
                console.log("Blog has been added");
                setIsPending(false);
                history.push("/");
            })
        }, 1000)
    }

    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                type="text"
                required
                value={ title }
                onChange={ (e) => setTitle(e.target.value) }
                />
                <label>Blog body:</label>
                <textarea
                required
                value={ body }
                onChange={ (e) => setBody(e.target.value) }
                ></textarea>
                <label>Blog author:</label>
                <select
                value={ author }
                onChange={ (e) => setAuthor(e.target.value) }
                >
                    <option value="muano">Muano</option>
                    <option value="makhokha">Makhokha</option>
                </select>
                { !isPending && <button>Add Blog</button> }
                { isPending && <button disabled>Adding blog...</button> }
            </form>
        </div>
     );
}
 
export default Create;