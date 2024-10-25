import React, { useState, useEffect } from "react";
import UpdateForm from "./UpdateForm";
import APIservice from "./APIservice";
import { useCookies } from "react-cookie";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [editArticle, setEditArticle] = useState(null);
  const [token] = useCookies(['mytoken']);

  const handleUpdate = (article) => {
    setEditArticle(article);
  };

  const handleDelete = (articleId) => {
    const new_articles = articles.filter(myarticle => myarticle.id !== articleId);

    APIservice.DeleteArticle(articleId, token['mytoken'])
    .then((res) => { console.log(res)})
    .catch((err) => {console.log(err)});

    setEditArticle(new_articles);
  }

  const updatedInformation = (article) => {
    const new_articles = articles.map(myarticle => {
      if(article.id === myarticle.id){
        return article;
      }
      else{
        return myarticle;
      }
    })
    setArticles(new_articles);
  }

  const insertArticle = (article) => {
    const new_articles = [...articles, article];
    setArticles(new_articles);
  }

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/articles/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Token ${token['mytoken']}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setArticles(data))
      .catch((error) => console.log(error));
  }, []); // This will only run once when the component mounts

  return (
    <>
      <h2 className="text-center">Your Feed</h2>
      
      {articles.map((article) => {
        return (
          <div key={article.id} className="container">
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <div className="row">
              <div className="col-md-1">
                <button className="btn btn-success" onClick={() => handleUpdate(article)}>Update</button>
              </div>
              <div className="col">
                <button className="btn btn-danger" onClick={() => handleDelete(article.id)}>Delete</button>
              </div>
            </div>
            <hr className="bg-danger"/>
          </div>
        );
      })}
      

      {editArticle ? 
      <div>
        <UpdateForm article={editArticle} updatedInformation = {updatedInformation}/> 
        <button onClick={() => setEditArticle(null)}>cancel</button>
      </div>
      : null}
      
    </>
  );
}

export default Articles;
