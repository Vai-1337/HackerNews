import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Comments() {
  const { objectID } = useParams();  

  useEffect(() => {
    fetchArticle();
  }, [objectID]);

  const fetchArticle = async () => {
    const result = await axios.get(
      `http://hn.algolia.com/api/v1/items/${objectID}`
    );
    console.log(result.data);
  };

  return (
    <div style={{ background: "grey" }}>        
      <h1>Comments </h1>     
    </div>
  );
}
