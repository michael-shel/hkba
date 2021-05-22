import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import ARTICLE_QUERY_SLIDER from '../apollo/ArticleQuerySlider'

import Query from '../components/Query.component';
import QuerySlider from '../components/QuerySlider.component';
import Card from '../components/Card.component';
import { HomeHeroSVG, SVGOne, SVGTwo } from '../SVGS/SVGS'
import MediaAsset from '../components/MediaAsset.component';
import React, { Component } from "react";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Slider from "react-slick";

export default function Home() {
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div
      className={`icon sample-next-arrow ${className}`}
        onClick={onClick}
      >
        <i className="icon i-arrow-down--white"></i>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={`sample-prev-arrow ${className}`}
        onClick={onClick}
      >
        <i className="icon i-arrow-down--white"></i>
      </div>
    );
  }

  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div className="leading-normal tracking-normal gradient">
      <Head>
        <title>🚀 | 🤘</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="bg-white border-b py-8">

      <div className="">
          <QuerySlider slug query={ARTICLE_QUERY_SLIDER('blog')}>
            {({ data }) => {
              return  <Slider {...settings}> {
                data.blogArticles.map(blog => {
                  return <Card key={blog.slug} article={blog} />
              }) }
              </Slider>
            }}
          </QuerySlider>
      </div>

      </section>
    </div >
  )
}
