import { useEffect, useState, useParams } from 'react'
import '../css/comments.css'
import axios from 'axios';

const Comments = () => {

    // const [articles, setArticles] = useState([]);
    // const { objectID } = useParams()
    // ;
    

    // const fetchData = async () => {
    //     await axios
    //       .get(
    //         `https://hn.algolia.com/api/v1/search?query=&page=&hitsPerPage=&id=${objectID}`
    //       )
    //       .then((response) => setArticles(response.data.hits))
    //       .catch((error) => {
    //         console.error(error);
    //       });
    //   };


    return(
        <div className='comments'>
            <h1>Comments</h1>
            {/* {articles.map((article) => (
        <div key={article.objectID}>
          <p> {article.title}</p>          
        </div>
        ))} */}
        </div>
    )
}

export default Comments;