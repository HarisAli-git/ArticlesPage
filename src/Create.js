import { useState} from "react";
import { useHistory } from 'react-router-dom'; 

const Create = () => {
    const [title, setTitle] = useState(' ');
    const [body, setBody] = useState(' ');
    const [author, setAuthor] = useState(' ');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const submitForm = (e) => {
        e.preventDefault();
        const articleOBJ = {title, body, author};

        setIsPending(true);

        fetch('http://localhost:8000/articles', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(articleOBJ)
        }).then(() => {
            setIsPending(false)
            console.log('Article Added!')
            history.push('/')
        })
    } 
    
    return ( 
        <div className="create">
            <h1><strong>Add a new Article</strong></h1>
            <form onSubmit={submitForm}>
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
                {!isPending && <button>Add New Article</button>}
                {isPending && <button disabled>Adding New Article...</button>}
            </form>
            <p>{author}</p>
            <p>{body}</p>
            <p>{title}</p>
        </div>
        );
    }

export default Create;