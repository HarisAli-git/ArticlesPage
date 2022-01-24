import { useState, useEffect } from "react";

const useCustFetch = (url) => {

    const [data, UpdateData] = useState(null);
    const [isLoading, updateIsLoading] = useState(true);
    const [error, updateError] = useState(null);

    useEffect(() => {
        setTimeout(() =>
        {
        fetch(url)
        .then(res => {
            if (!res.ok)
            {
                throw Error('couldnt fetch the required resource');
            }
            return res.json();
        })
        .then(data => {
            UpdateData(data);
            updateIsLoading(false);
            updateError(null);
        })
        .catch(error => {
            updateError(error.message);
            updateIsLoading(false);
        })
        }, 500)
    }, [url]);

    return {data, isLoading, error};
}
 
export default useCustFetch;