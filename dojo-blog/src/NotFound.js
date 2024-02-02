import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Oops...</h2>
            <p>The page you're looking for could not be found</p>
            <Link to="/">Go to the homepage</Link>
        </div>
    );
}
 
export default NotFound;