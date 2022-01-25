import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Article = ({articles, title}) => {

    return (
        <div>
        <h1 >{title}</h1>  
        <div className="Articles-List">
            {articles.map((article) => (
            <div className="article-desc" key={article.id}>
                <Link to={`/article/${article.id}`}>
                <h2 className="title">{article.title}</h2>
                <p className="author"> Written By: {article.author}</p>
                </Link>
            </div>
        ))}</div>
        </div>
    );
}
 
export default Article;
