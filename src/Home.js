import { useState, useEffect } from "react";
import Article from "./Article";

const Home = () => {
    const [name, UpdateName] = useState('Mario');
    const [Age, UpdateAge] = useState(18);
    const [Articles, UpdateArticle] = useState([
        {title: "Cars", body: "VolksWagon....", author: "NationalGeographic", id: 1},
        {title: "PAF", body: "CAC/PAC JF-17 Thunder....", author: "Defence Front", id: 2},
        {title: "War & Peace", body: "Terrorist Insurgence....", author: "Defence Front", id: 3},
        {title: "Aeroplanes", body: "Boeing 777 300ER....", author: "Aerospace Indus.", id: 4},
    ]);

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
        console.log('DOM has been rendered!');
        console.log(name);
    }, [name]);
    
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
            <Article articles={Articles} title={"All Articles:- "} deleteArticle={deleteArticle}/>
            <Article articles={Articles.filter((article) => article.author === "Defence Front")} title={"Defence Front Articles:- "}/>
        </div>
    );
}
 
export default Home;
