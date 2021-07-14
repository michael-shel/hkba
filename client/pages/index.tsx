import Head from "next/head";
import styles from "../styles/Home.module.scss";
import ARTICLE_QUERY_SLIDER from "../apollo/ArticleQuerySlider";
import MAIN_SLIDER_QUERY from "../apollo/MainSliderQuery";

import Query from "../components/Query.component";
import QuerySlider from "../components/QuerySlider.component";
import SliderCard from "../components/SliderCard.component";
import { HomeHeroSVG, SVGOne, SVGTwo } from "../SVGS/SVGS";
import MediaAsset from "../components/MediaAsset.component";
import React, { Component, useState } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import Sidebar from "../components/Sidebar.component";
import DropdownCH from "../components/DropdownCH.component";
import Link from "next/link";
import { Accordion, Button } from "react-bootstrap";
import ReactPlayer from "react-player";
import { useQuery, gql } from "@apollo/client";

export default function Home() {
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div>
        <div
          className={`icon sample-next-arrow ${className}`}
          onClick={onClick}
        >
          <i className="icon i-arrow-down--dark-grey"></i>
          <div className="dots">
            <div className="dot"></div>
          </div>
        </div>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return <div className={`d-none ${className}`} onClick={onClick}></div>;
  }

  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 8888,
    speed: 888,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const mainPost = gql`
    query mainPost {
      mainPosts {
        blog_article {
          title
          category
          published_at
          slug
          ArticleBase {
            content
            images {
              url
            }
          }
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(mainPost);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  let poster = data.mainPosts[0].blog_article;
  return (
    <div>
      <div className="p-4">
        <div className="text-uppercase neumorphism-static nav-static-block">
          <div className="head-title danger-shadow text-center m-0">
            Ужгородська Греко-католицька богословська академія імені бладенного
            теодора ромжі
          </div>
        </div>
      </div>
      <main className="">
        <article className="article">
          <div className="">
            <Head>
              <title>🚀 | 🤘</title>
            </Head>
            <div className="selected-today">
              <div
                className="selected-block"
                style={{
                  backgroundImage: `url(http://localhost:1337${poster.ArticleBase.images[0].url})`,
                }}
              ></div>
              <div className="selected-content">
                <div className="mh-80 o-hidden">
                  <Link href={`${poster.category}/${poster.slug}`}>
                    <a>
                      <h3>{poster.title}</h3>
                    </a>
                  </Link>
                  <span className="text-8-rows">
                    {poster.ArticleBase.content}
                  </span>
                </div>
                <div className="w-100">
                  <div className={"text-hover neumorphism-dynamic-btn"}>
                    <Link href={`${poster.category}/${poster.slug}`}>
                      <a className={`link p-3 d-block`}>Читати</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <section className="">
              <div className="neumorphism-static mx-3 mx-lg-5 mt-5 fit-content px-3 py-2 event-title">
                <h2 className="regular-shadow">Останні події</h2>
              </div>

              <QuerySlider slug query={MAIN_SLIDER_QUERY()}>
                {({ data }) => {
                  return (
                    <Slider {...settings}>
                      {data.mainSliders[0].blog_articles.map(item => {
                          return <SliderCard key={item.slug} article={item}/>
                        }
                      )}
                    </Slider>
                  );
                }}
              </QuerySlider>

            </section>

            <section className="">
              <DropdownCH />
            </section>

            <section className="">
              <div className="neumorphism-static mx-3 mx-lg-5 mt-5 fit-content px-3 py-2">
                <h2 className="regular-shadow">Христос Воскресе!</h2>
              </div>

              <div className="neumorphism-youtube mx-5 my-3">
                <ReactPlayer
                  width="100%"
                  height="420px"
                  url="https://www.youtube.com/watch?v=ydUozWctCu0&ab_channel=%D0%90%D0%9A%D0%90%D0%94%D0%95%D0%9C%D0%86%D0%AF%D0%A2%D0%95%D0%9E%D0%94%D0%9E%D0%A0%D0%90%E2%80%A2%D0%A3%D0%B6%D0%93%D0%9A%D0%91%D0%90"
                />
              </div>
            </section>
          </div>
        </article>

        <aside className="sidebar">
          <Sidebar />
        </aside>
      </main>
    </div>
  );
}
