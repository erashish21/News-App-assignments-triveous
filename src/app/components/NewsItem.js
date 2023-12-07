
import React from "react";

const NewsItem = ({ article }) => {
  return (
    <div className="news-item">
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      {/* Add other details as needed */}
    </div>
  );
};

export default NewsItem;
