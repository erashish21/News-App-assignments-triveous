// pages/api/news.js

import axios from "axios";

export default async function handler(req, res) {
  const { category = "general" } = req.query;

  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=https://newsapi.org/or`
    );

    const articles = response.data.articles;

    res.status(200).json(articles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
