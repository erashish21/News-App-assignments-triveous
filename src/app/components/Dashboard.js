
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import axios from "axios";
import NewsItem from "../components/NewsItem";

const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  const [news, setNews] = useState([]);
  const router = useRouter();

  const fetchNews = async () => {
    try {
      const response = await axios.get("api/news");
      setNews(response.data);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  useEffect(() => {
    if (!user && !loading) {
     
      router.push("/login");
    }

    if (user) {
      console.log("User:", user);
      fetchNews();
    } else {
      console.log("User not authenticated.");
    }
  }, [user, loading, router]);

  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  return (
    <div className="dashboard-container">
      {user ? (
        <div>
          <h1>Welcome, {user.displayName ? user.displayName : "User"}!</h1>
          <button onClick={handleLogout}>Logout</button>

          <div className="news-list">
            {news.map((article) => (
              <NewsItem key={article.title} article={article} />
            ))}
          </div>
        </div>
      ) : (
        <p>Please login to view the news.</p>
      )}

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};

export default Dashboard;

