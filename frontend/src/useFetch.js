import { useState,useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {

    const abortCont = new AbortController();
    fetch(url, {signal: abortCont.signal})
      .then(res => {
        if(!res.ok)
          {
            throw Error('could not fetch the data from that resource');
          }
        return res.json();
      })
      .then(data => {
        setError(null);
        setData(data);
        setIsPending(false);
      })
      .catch(err => {
        if(err.name === 'AbortError')
          {
            console.log('fetch aborted');
          }
        else
          {
          setIsPending(false);
          setError(err.message);
          }
      })
  }, [url]);

  return {data, isPending, error}
}

export default useFetch;