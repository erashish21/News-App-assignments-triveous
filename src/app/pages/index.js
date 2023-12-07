
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import axios from "axios";
import Link from "next/link";

const MainPage = () => {
  const [user] = useAuthState(auth);
  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    try {
      const response = await axios.get("/api/news");
      setNews(response.data);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []); // Fetch news on component mount

  return (
    <div className="main-container">
      {user ? (
        <div>
          <h1>Welcome, {user.displayName || "User"}!</h1>
          <div className="news-list">
            {news.map((article) => (
              <Link
                key={article.title}
                href={`/news/${encodeURIComponent(article.title)}`}
              >
                <div className="news-item">
                  <h2>{article.title}</h2>
                  <p>{article.description}</p>
                  {/* Add other details as needed */}
                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <p>Please login to view the news.</p>
      )}
    </div>
  );
};

export default MainPage;
