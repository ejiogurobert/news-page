import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "../../components/Card/Card";
import "./Home.css";
import { NavBar } from "../../components/NavBar/NavBar";
import { PageNumber } from "../../components/PageNumber/PageNumber";
import { Loader } from "../../components/Loader/Loader";

const PAGE_NUMBERS = [1, 2, 3, 4, 5, 6];

export const Home = () => {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticles(page);
  }, [page]);

  const fetchArticles = async (pageNumber) => {
    setLoading(true);
    let response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=30d5b4daa52740009b6503ea2356deed&page=${pageNumber}&pageSize=8`
    );

    if (response && response.data && response.data.articles) {
      console.log(response);
      setNews(response.data.articles);
    }
    setLoading(false);
  };

  return (
    <>
      <NavBar />
      <div className='sectionWrapper'>
        <div className='subSection'>
          <span>Latest news</span>
        </div>
        <hr />
        {!loading ? (
          <>
            <div className='cardsWrapper'>
              {news?.map(({ title, description, content, url }) => (
                <Card
                  title={title}
                  description={description}
                  content={content}
                  url={url}
                  time='5 mins ago'
                />
              ))}
            </div>
            <div className='pagesWrapper'>
              {PAGE_NUMBERS.map((number) => (
                <PageNumber
                  number={number}
                  active={number === page}
                  changePage={setPage}
                />
              ))}
            </div>
          </>
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};
