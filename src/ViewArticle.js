import { useParams } from "react-router-dom";
import useCustFetch from "./useCustFetch";

const ViewArticle = () => {

    const { id } = useParams();
    const {data, isLoading, error} = useCustFetch('http://localhost:8000/articles/' + id);

    return (  
        <div className="ViewArticle">
            <h1>Artcile Details</h1>
            { error && <p>{error}</p>}
            { isLoading && <h2>Loading...</h2>}
            { data && (<blog>
                <h2>{data.title}</h2>
                <p><strong>Author:</strong> {data.author}</p>
                <div>{data.body}</div>
            </blog>)
            }
        </div>
    );
}
 
export default ViewArticle;