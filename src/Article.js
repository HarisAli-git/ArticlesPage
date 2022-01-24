const Article = (props) => {
    const articles = props.articles;
    const title = props.title;

    return (
        <div>
        <h1 >{title}</h1>  
        <div className="Articles-List">
            {articles.map((article) => (
            <div className="article-desc" key={article.id}>
                <h2 className="title">{article.title}</h2>
                <p className="author"> Written By: {article.author}</p>
            </div>
        ))}</div>
        </div>
    );
}
 
export default Article;
