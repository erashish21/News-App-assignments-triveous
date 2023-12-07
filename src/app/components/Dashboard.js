"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import axios from "axios";
import { useEffect, useState } from "react";
import NewsList from "../components/NewsList";
import { useRouter } from "next/navigation"; 

const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  const [news, setNews] = useState([]);
  const router = useRouter(); 

  const fetchNews = async () => {
    try {
      const response = await axios.get("/api/news");
      setNews(response.data);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  useEffect(() => {
    if (!user && !loading) {
      router.push("/login");
    }

    if (user && user.displayName) {
      
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
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div>
            <p className="mr-4">Welcome, {user?.displayName || "User"}!</p>
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </header>
      <main className="container mx-auto flex-1 p-8">
        <h2 className="text-3xl font-bold mb-4">Latest News</h2>

        {loading && <p className="text-center">Loading...</p>}

        {error && (
          <p className="text-center text-red-500">Error: {error.message}</p>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <NewsList news={news} />
          </div>
        )}
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        &copy; 2023 Your News App. All rights reserved.
      </footer>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};

export default Dashboard;
