import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../css/hackernews.css";

const HackerNews = () => {
  //state, data
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState([]);
  const [page, setPage] = useState(1);
  const [hitsPerPage, sethitsPerPage] = useState(0);
  const [sorted, setSorted] = useState(false);

  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = async () => {
    await axios
      .get(
        `https://hn.algolia.com/api/v1/search?query=${search}&page=${page}&hitsPerPage=${hitsPerPage}`
      )
      .then((response) => setArticles(response.data.hits))
      .catch((error) => {
        console.error(error);
      });
  };

  const sortedArticles = [...articles].sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      fetchData();
    } else {
      setSearch(event.target.value);
    }
  };

  const handleChangePage = (e) => {
    sethitsPerPage(e.target.value);
  };

  return (
    <div className="hackernews">
      <img
        src="https://ironcloudcomics.com/wp-content/uploads/2020/05/solarwinds-hacker-transparent-background.png"
        style={{ width: "80px", display: "flex", justifyContent: "flex-start" }}
      />
      <div className="input-group">
        <input
          className="input"
          style={{ fontStyle: "italic" }}
          type="text"
          placeholder="search"
          value={search}
          onChange={handleSearch}
          onKeyUp={handleSearch}
        />

        <input
          className="button--submit"
          value="OK"
          type="submit"
          onClick={() => fetchData()}
        ></input>
      </div>
      <div className="select">
        <select
          value={hitsPerPage}
          onChange={handleChangePage}
          style={{
            width: "100px",
            height: "20px",
            textAlign: "center",
            fontSize: "12px",
            marginRight: "20px",
          }}
        >
          <option value={0}>select/reset</option>
          <option value={5}>----- 5 -----</option>
          <option value={10}>----- 10 -----</option>
          <option value={15}>----- 15 -----</option>
          <option value={20}>----- 20 -----</option>
          <option value={50}>----- 50 -----</option>
        </select>
        <br />
      </div>
      <input
        className="nextPage"
        value="Next Page"
        type="submit"
        onClick={() => {
          setPage(page + 1);
        }}
      ></input>
      <button onClick={() => setSorted(!sorted)}>{sorted ? 'ordre original' : 'ordre alphabétique'}</button>
      <br />

      {(sorted ? sortedArticles : articles).map((article, index) => (
        <div key={article.objectID}>
          <Link to="/comments">
            <ul>
              <li>
                {index + 1}
                <span style={{ fontStyle: "italic", fontSize: "0.9em" }}>
                  . Title :{" "}
                </span>
                {article.title}
              </li>
            </ul>
          </Link>
          {/* <a href={article.url}>{article.url}</a> */}
          
        </div>
      ))}
      <button onClick={() => setPage(page+ 1)}>Page suivante</button>
    </div>
  );
};

export default HackerNews;
