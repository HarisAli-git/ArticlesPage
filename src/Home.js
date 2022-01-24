import { useState, useEffect } from "react";
import Article from "./Article";

const Home = () => {
    const [name, UpdateName] = useState('Mario');
    const [Age, UpdateAge] = useState(18);
    const [Articles, UpdateArticle] = useState(null);
    const [isLoading, updateIsLoading] = useState(true);
    const [Error, updateError] = useState(null);

    const deleteArticle = (id) => {
        const newArticles = Articles.filter(article => article.id !== id);
        UpdateArticle(newArticles);
    }

    const clickEvent = (name, e) => {
        console.log("Button is Hit by: ", name, e);
        UpdateName("SuperMario");
        UpdateAge(22);
    }

    useEffect(() => {
        setTimeout(() =>
        {
        fetch('http://localhost:8000/articles')
        .then(res => {
            if (!res.ok)
            {
                throw Error('couldnt fetch the required resource');
            }
            return res.json();
        })
        .then(data => {
            UpdateArticle(data);
            updateIsLoading(false);
            updateError(null);
        })
        .catch(error => {
            updateError(error.message);
            updateIsLoading(false);
        })
        }, 1000)
    }, []);
    
    const TestEvent = (e) => {
        console.log("Button is Hit by: ", e);
    }
     
    return (  
        <div className="home">
            <h1>HomePage</h1>
            <p>{name} is {Age} years old!</p>
            <button onClick={
                (e) => {
                    clickEvent("user", e);
                }
            }>TestButton</button>
            <button onClick={TestEvent}>EventButton</button>
            {Error && <p>{Error}</p>}
            {isLoading && <h2>Loading...</h2>}
            {Articles && <Article articles={Articles} title={"All Articles:- "} deleteArticle={deleteArticle}/>}
            {Articles && <Article articles={Articles.filter((article) => article.author === "Defence Front")} title={"Defence Front Articles:- "}/>}
        </div>
    );
}
 
export default Home;
