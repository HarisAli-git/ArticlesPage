import { useState } from "react";

const Home = () => {
    const [name, UpdateName] = useState('Mario');
    const [Age, UpdateAge] = useState(18);

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
        </div>
    );
}
 
export default Home;
