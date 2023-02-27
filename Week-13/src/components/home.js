import { BrowserRouter, Link } from 'react-router-dom';

const { useState, useReducer, useEffect } = require("react");


const initialUrls = [];

const reducer =  (state, action) => {
  switch (action.type) {
    case "ADD_URL":
      return state.concat({
        url: action.newUrl,
        id: state.length,
        shortUrl: "loading...",
      });

    case "ADD_SHORT_url":
       state = state.map((element) => {
        if (element.url === action.originalURL) {
          element = { ...element, shortUrl:action.shortURL};
          return element;
        } else {
          return element;
        }
      });

      return state;
    default:
      return state;
  }
};

function Home() {
  const [url, setUrl] = useState("");
  const [urls, dispatch] = useReducer(reducer, initialUrls);

  useEffect(() => {
    async function fetchShortURL(){
      let temp = url;
      setUrl("");

      const path = "https://api.urlo.in/api/short-url";
      const obj = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ originalUrl: temp }),
      };

      async function getShortURL() {
        let tempUrl = ""
        try{
          const response = await fetch(path, obj)
          const res = await response.json();
          tempUrl =  res.data.shortUrl;
          return tempUrl
        }
        catch(error){
          console.error(error)
        }
      }

      const short = await getShortURL();
      console.log(short)
      console.log("here")

    const shortURL = (temp) => {
        dispatch({ type: "ADD_SHORT_url", originalURL: temp, shortURL: short});
     };
 
     if (temp) {
       shortURL(temp);
     }
    }

    fetchShortURL();
  }, [urls]);

  function handleChange(url) {
    setUrl(url.target.value);
  }
  const handleUrl = async (url) => {
      dispatch({ type: "ADD_URL", newUrl: url });
  };

  return (
    <>
      <input type="text" value={url} onChange={handleChange}></input>
      <button onClick={() => handleUrl(url)}>add url</button>
      <div>
        {urls.map((url) => (
          <div key={url.id}>
            
            <BrowserRouter>
            <Link to={url.url} >{url.url} </Link>     :     
             <Link to={url.shortUrl} >{url.shortUrl} </Link>
            </BrowserRouter>
              
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
