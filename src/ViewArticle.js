import { useParams } from "react-router-dom";

const ViewArticle = () => {

    const { id } = useParams();

    return (  
        <div className="ViewArticle">
            <h2>Artcile Details: {id} </h2>
        </div>
    );
}
 
export default ViewArticle;