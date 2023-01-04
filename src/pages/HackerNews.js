import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "../css/hackernews.css";

const HackerNews = () => {
  //state, data
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState([]);
  const [page, setPage] = useState(0);  
  const [hitsPerPage, sethitsPerPage] = useState(0);
 
  useEffect(() => {
    fetchData()
  }, [search, page, hitsPerPage])
 
  const fetchData = async () => {
   await axios
      .get(`http://hn.algolia.com/api/v1/search?query=${search}&page=${page}&hitsPerPage=${hitsPerPage}`)
      .then((response) => setArticles(response.data.hits))
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      fetchData();
    } else {
      setSearch(event.target.value);
    }
  };

  // const handleNextPage = (event) => { 
  //   event.preventDefault()
  //   setSearch(search)
  //   setPage(page + 1)
  //   fetchData()    
  // }

  const handleChangePage = (e) => {
    sethitsPerPage(e.target.value)
  }


  return (
    <div className="hackernews">
      <div className="searchbutton">
      <input
        type="text"
        placeholder="search"
        value={search}
        onChange={handleSearch}
        onKeyUp={handleSearch}
      />
      <button onClick={() =>fetchData()}>OK</button>
      <button onClick={(event) => {
          setPage(page + 1)

      }}>Next Page</button>
      <br />
      <select value={hitsPerPage} onChange={handleChangePage}>
        <option value={0}>0</option>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
        <option value={20}>20</option>
        <option value={50}>50</option>

      </select>
      </div>

      {articles.map((article) => (
        <div key={article.objectID}>
          <p>{article.title}</p>
          <a href={article.url}>{article.url}</a>
        </div>
      ))}
    </div>
  );
};

export default HackerNews;
