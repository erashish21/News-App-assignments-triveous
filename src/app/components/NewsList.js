import { useState, useEffect } from "react";
import axios from "axios";
import NewsItem from "../components/NewsItem"; // Import the NewsItem component

const NewsList = () => {
  const [news, setNews] = useState([]);
  const [isGridView, setIsGridView] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/everything?q=tesla&from=2023-11-07&sortBy=publishedAt&apiKey=68d0437618c34c06a42482e3658cf433"
        );
        setNews(response.data.articles);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news:", error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
      <button onClick={() => setIsGridView(!isGridView)}>
        Toggle {isGridView ? "List" : "Grid"} View
      </button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className={isGridView ? "grid-view" : "list-view"}>
          {news.map((article) => (
            <NewsItem key={article.title} article={article} />
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsList;
