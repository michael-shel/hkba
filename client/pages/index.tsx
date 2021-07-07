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
              <div className="neumorphism-static mx-3 mx-lg-5 mt-5 p-3">
                <Accordion defaultActiveKey="1">
                  <Accordion.Toggle
                    className="px-3 py-2 collapse-title neumorphism-dynamic-btn regular-shadow my-4 "
                    eventKey="1"
                  >
                    Євангеліє від Марка
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="1">
                    <div className="neumorphism-static-inset flex-column px-3 py-2">
                      <span className="font-weight-bold">Мк 2:14-17</span>А коли
                      Він прохо́див, то побачив Левія Алфі́євого, що сидів на
                      ми́тниці, і каже йому: „Іди за Мною!“ Той устав, і пішов
                      услід за Ним. 15 Коли ж Він сидів при столі в його домі,
                      то багато ми́тників і грішників сиділи з Ісусом та з у́чнями
                      Його; бо було їх багато, і вони ходили за Ним. 16 Як
                      побачили ж книжники та фарисеї, що Він їсть із грішниками
                      та з ми́тниками, то сказали до учнів Його: „Чому́ то Він
                      їсть із ми́тниками та з грішниками?“ 17 А Ісус, як почув,
                      промовляє до них: „Лікаря не потребують здорові, а слабі.
                      Я не прийшов кликати праведних, але грішників (на
                      покаяння).“
                    </div>
                  </Accordion.Collapse>
                </Accordion>

                <Accordion defaultActiveKey="1">
                  <Accordion.Toggle
                    className="px-3 py-2 collapse-title neumorphism-dynamic-btn regular-shadow my-4"
                    eventKey="1"
                  >
                    Коментар до Євангелія
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="1">
                    <div className="neumorphism-static-inset flex-column px-3 py-2">
                      На одній роботі мати «товсту шкіру» – корисна риса.
                      Наприклад, у сучасній західній країні потрібні міцні
                      нерви, щоб керувати рухом транспорту або відповідати за
                      автостоянку. Цілий день видаєш людям квитанції на стоянку
                      або штрафуєш, якщо залишили автомобіль у недозволеному
                      місці. Розлючені автовласники скаржаться на
                      несправедливість, ніби, вони тільки на хвилинку і
                      пригальмували, а на них вже накинулися. Яке це, коли день
                      за днем на тебе кричать за те, як ти робиш свою справу? А
                      якщо ця людина на автостоянці на додаток служить
                      іноземному уряду, який вам ненависний, і який ви мрієте
                      повалити? Допустимо, правила стоянки були введені зовсім
                      нещодавно, і люди, які роками ставлять свої машини в
                      одному і тому ж місці, тепер за це ж саме зобов’язані
                      платити штраф. Я б не позаздрив працівникам цієї
                      автостоянки. А тепер поставте себе на місце Левія, сина
                      Алфія. Він збирав мито в Капернаумі. Що це означає, на
                      кого він працював? Очевидно, працював він на Ірода Антипу.
                      Після смерті Ірода Великого в 4 р. до Р.Х. його велике
                      царство розділили три сини: Архелай отримав південь, тобто
                      Юдею, Антипі дістався північний регіон – Галілея і частина
                      долини Йордану, а Пилипу – територія, яку ми тепер
                      називаємо Голанськими висотами (вона охоплювала і частину
                      Сирії). Володіння Антипи і Пилипа розділяла річка Йордан у
                      південній її частині від гори Ермон до моря Галілейського.
                      Капернаум був останнім містом для подорожуючого на схід, з
                      царства Антипи в область Пилипа, або першим на західному
                      шляху в Галілею. Як і сьогодні, при перетині кордону (чи
                      за користування шосе, територією аеропорту) доводилося
                      платити мито.
                    </div>
                  </Accordion.Collapse>
                </Accordion>
              </div>
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
