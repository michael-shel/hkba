import Link from 'next/link'
import ReactMarkdown from 'react-markdown';
import RECOMENDATION_QUERY_SLIDER from '../apollo/RecomendationQuerySlider'
import QuerySlider from '../components/QuerySlider.component';
import RecomendedCard from './RecomendedCard.component';
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

export default function RecomendationBlock() {

    var settings = {
        dots: false,
        slidesPerRow: 1,
        rows: 2,
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
        <section className="">
          <div className="neumorphism-static px-3 py-2 w-100 text-center mt-4">
            <h2 className="regular-shadow">Останні події</h2>
          </div>

          <QuerySlider slug query={RECOMENDATION_QUERY_SLIDER()}>
                {({ data }) => {
                  return (
                    <Slider {...settings}>
                      {data.sideSliders[0].blog_articles.map(item => {
                          return <RecomendedCard key={item.slug} article={item}/>
                        }
                      )}
                    </Slider>
                  );
                }}
              </QuerySlider>
          </section>
    )
}