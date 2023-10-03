import React, { createContext, useEffect, useState } from "react";

export const MainContext = createContext(null);

const MainContextProvider = ({ children }) => {
  const [blogs, setBlogs] = useState(null);
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    // fetching news data from api then set to blogs variable
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/dragon-news-resources/main/data/news.json"
    )
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((error) => {
        console.error(error);
      });

    // fetching categories from api then set the value to categories variable
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/dragon-news-resources/main/data/categories.json"
    )
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const info = {
    blogs,
    categories,
  };
  return <MainContext.Provider value={info}>{children}</MainContext.Provider>;
};

export default MainContextProvider;
