import Link from 'next/link';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import Slider from "react-slick";

function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div>
        <div
          className={`icon sample-next-arrow-req ${className}`}
          onClick={onClick}
        >
          <i className="icon i-arrow-down--dark-grey"></i>
          <div className="dots">
            <div className="dot-req"></div>
          </div>
        </div>
      </div>

    );
  }

  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div>
        <div
          className={`icon sample-prev-arrow-req ${className}`}
          onClick={onClick}
        >
          <i className="icon i-arrow-down--dark-grey"></i>
          <div className="dots">
            <div className="dot-req"></div>
          </div>
        </div>
      </div>
    );
  }

const Article = ({ article }) => {
  console.log(article);
    const category = article.category,
        singleArticle = article.blogArticles[0],
        date = new Date(singleArticle.published_at).toLocaleDateString();

    const content = singleArticle.ArticleBase.content.replace(/\/uploads/g, "http://localhost:1337/uploads");
    var settings = {
        dots: true,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 8888,
        speed: 888,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };

    return (
        <section className="container p-4 mt-5">

            <div className="neumorphism-static px-3 py-2 mb-5">
                <h1 className='regular-shadow'>{singleArticle.title}</h1>
            </div>

            <div className="neumorphism-inset p-2 px-md-4 py-md-3">
                <div className="blog-slider">
                    <Slider {...settings}> {
                    singleArticle.ArticleBase.images.map(img => {
                        return <img src={`http://localhost:1337${img.url}`} alt={singleArticle.title} className='blog-img' />
                    })}
                    </Slider>
                </div>
                <div className="">
                    <ReactMarkdown children={content} />
                </div>

                <div className="">
                    <p>{date}</p>
                </div>
            </div>

            <div className="my-5">
                <Link href={`/${category}`}>
                    <a className="regular-shadow neumorphism-dynamic-btn p-3 flex items-center text-2xl capitalize">
                        Назад
                    </a>
                </Link>
            </div>
        </section>
    )
}

export default Article