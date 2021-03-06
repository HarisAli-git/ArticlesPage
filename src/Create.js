import { useState} from "react";

const Create = () => {
    const [title, setTitle] = useState(' ');
    const [body, setBody] = useState(' ');
    const [author, setAuthor] = useState(' ');

    return ( 
        <div className="create">
            <h1><strong>Add a new Article</strong></h1>
            <form>
                <label>Title: </label>
                <input
                    type = "text"
                    required
                    value = {title}
                    onChange = {(e) => setTitle(e.target.value)}
                ></input>
                <label>Body: </label>
                <textarea
                    required
                    value = {body}
                    onChange = {(e) => setBody(e.target.value)}
                ></textarea>
                <label>Author: </label>
                <select
                value = {author}
                onChange = {(e) => setAuthor(e.target.value)}>
                    <option value="NationalGeographic">NationalGeographic</option>
                    <option value="Defence Front">Defence Front</option>
                    <option value="Aerospace Industries">Aerospace Industries</option>
                </select>
                <button>Add New Article</button>
            </form>
            <p>{author}</p>
            <p>{body}</p>
            <p>{title}</p>
        </div>
        );
    }

export default Create;