import React from "react";
import "./ArticleList.css";

const ArticleList = ({ articles, handleArticleClick }) => {

  return (
    <div className="article-container">
      {articles.map((article,index) => (
        <div className="article-image-card" key={index} onClick={() => handleArticleClick(article)}>
          <img
            className="article-image"
            key={article.id}
            src={article.picture}
            alt={article.title}
          />
          <div className="text-center">
            <h4>
              <b>{article.title}</b>
            </h4>
            <p>{article.description}</p>
            <p>Author: {article.user.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
