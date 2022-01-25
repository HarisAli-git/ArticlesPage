import Article from "./Article";
import useCustFetch from "./useCustFetch";

const Home = () => {

    const {data, isLoading, error} = useCustFetch('http://localhost:8000/articles');
     
    return (  
        <div className="home">
            <h1>HomePage</h1>
            {error && <p>{error}</p>}
            {isLoading && <h2>Loading...</h2>}
            {data && <Article articles={data} title={"All Articles:- "} />}
            {data && <Article articles={data.filter((article) => article.author === "Defence Front")} title={"Defence Front Articles:- "}/>}
        </div>
    );
}
 
export default Home;
