const Article = ({articles, title, deleteArticle}) => {

    return (
        <div>
        <h1 >{title}</h1>  
        <div className="Articles-List">
            {articles.map((article) => (
            <div className="article-desc" key={article.id}>
                <h2 className="title">{article.title}</h2>
                <p className="author"> Written By: {article.author}</p>
                <button onClick={() => deleteArticle(article.id)}>Delete Me!</button>
            </div>
        ))}</div>
        </div>
    );
}
 
export default Article;
