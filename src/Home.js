import { useState } from "react";

const Home = () => {
    const [name, UpdateName] = useState('Mario');
    const [Age, UpdateAge] = useState(18);
    const [Articles, ShowArticles] = useState([
        {title: "Cars", body: "VolksWagon....", author: "NationalGeographic", id: 1},
        {title: "PAF", body: "CAC/PAC JF-17 Thunder....", author: "Defence Front", id: 2},
        {title: "Aeroplanes", body: "Boeing 777 300ER....", author: "Aerospace Indus.", id: 3},
    ]);

    const clickEvent = (name, e) => {
        console.log("Button is Hit by: ", name, e);
        UpdateName("SuperMario");
        UpdateAge(22);
    }

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
            <div>{Articles.map((article) => (
                <div className="article-desc" key={article.id}>
                    <h1 className="title">{article.title}</h1>
                    <p className="author"> Written By: {article.author}</p>
                </div>
            ))}</div>
        </div>
    );
}
 
export default Home;
