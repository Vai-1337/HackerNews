import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "../css/hackernews.css";

const HackerNews = () => {
  //state, data
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState([]);

  const fetchData = () => {
    axios
      .get(`http://hn.algolia.com/api/v1/search?query=${search}`)
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
      <button onClick={fetchData}>OK</button>
      </div>

      {articles.map((article) => (
        <div key={article.objectID}>
          <p> Title : {`title is : ${article.title}`}</p>
          <a href={article.url}>{article.url}</a>
        </div>
      ))}
    </div>
  );
};

export default HackerNews;
