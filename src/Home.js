const Home = () => {
    const clickEvent = (name, e) => {
        console.log("Button is Hit by: ", name, e);
    }

    const TestEvent = (e) => {
        console.log("Button is Hit by: ", e);
    }
     
    return (  
        <div className="home">
            <h1>HomePage</h1>
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
