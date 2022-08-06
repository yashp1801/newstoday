import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./news.css";

const ApiProject = () => {
  const [news, setNews] = useState([]);

  const getNews = () => {
    Axios.get(
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=fb1e44e05d3c43499107117f765bbd50"
    ).then((response) => {
      // console.log(response);
      setNews(response.data.articles);
    });
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div className="main">
      <h1 className="main_title">NewsToday📰 </h1>
      <div className="news">
        {news.map((e) => {
          return (
            <div className="news_card">
              <div className="news_card_container">
                <div className="news_card_img">
                  <img src={e.urlToImage} alt="" />
                </div>
                <div className="news_card_content">
                  <h1>{e.title}</h1>
                  <p>{e.description}</p>
                  <a href={e.url}>read more</a>
                  <span>{e.publishedAt}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ApiProject;
