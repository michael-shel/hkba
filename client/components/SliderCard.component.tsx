import Link from 'next/link'
import ReactMarkdown from 'react-markdown';

export default function Card({ article }) {
    const category = article.category;
    const { title, slug, ArticleBase } = article;
    const date = new Date(article.published_at).toLocaleDateString();

    return (
        <Link href={`${category}/${slug}`}>
            <a className="text-hover d-flex flex-wrap m-3 m-md-4 m-lg-5 main-carousel neumorphism-dynamic blink p-1">
                <div className="col-12 col-md-5 p-1 neumorphism-slider-inset ">
                    <img src={`http://localhost:1337${ArticleBase.images[0].url}`} alt={title} className='mc-img' />
                </div>
                <div className="col-12 col-md-7 p-3 d-flex justify-content-between flex-column">
                    <div>
                        <div className="text-2-rows mb-3">
                                <span className="h3 link" >
                                    {title}
                                </span>
                        </div>
                        <p className="text-base">
                            {ArticleBase.content.slice(0, 100) + ' ...'}
                        </p>
                    </div>
                    <p className="text-right pr-3"> {date} </p>
                </div>
            </a>
        </Link>

    )
}