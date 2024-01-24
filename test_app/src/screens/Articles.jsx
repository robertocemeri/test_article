import React, { useEffect, useState } from "react";
import ArticleList from "../components/ArticleList";
import "./Articles.css"
import { getArticles } from "../api";

const Articles = () => {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((res) => {
      setArticles(res.data)
      console.log(res);
    })
  },[]);
  const handleArticleClick = (article) => {
    window.location.replace(`/article/${article.id}`);
  };

  return (
    <>
      <header className="header">
        <h2>Articles</h2>
      </header>
      <ArticleList articles={articles} handleArticleClick={handleArticleClick} />
    </>
  );
};

export default Articles;
