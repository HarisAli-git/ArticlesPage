import { useState, useEffect } from "react";

const useCustFetch = (url) => {

    const [data, UpdateData] = useState(null);
    const [isLoading, updateIsLoading] = useState(true);
    const [error, updateError] = useState(null);

    useEffect(() => {

        const abortControl = new AbortController();

        setTimeout(() =>
        {
        fetch(url, {signal: abortControl.signal})
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
        if (error.name === 'AbortError')
        {
            console.log('fetchaborted!');
        }
        else{
            updateError(error.message);
            updateIsLoading(false);
        }
        })
        }, 1000)

        return () => abortControl.abort();

    }, [url]);

    return {data, isLoading, error};
}
 
export default useCustFetch;