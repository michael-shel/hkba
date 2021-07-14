import Link from 'next/link'
import ReactMarkdown from 'react-markdown';

export default function Card({ article }) {
    const category = article.__typename.replace('Article', '').toLowerCase();
    const { title, slug, ArticleBase, published_at } = article;
    const date = new Date(published_at).toLocaleDateString();

    return (
        <Link href={`${category}/${slug}`}>
            <a className="text-hover d-flex flex-column neumorphism-dynamic m-4 blink p-1">
                <div className="col-12 p-1 neumorphism-slider-inset">
                    <img src={`http://localhost:1337${ArticleBase.images[0].url}`} alt={title} className='rc-img' />
                </div>
                <div className="col-12 d-flex justify-content-between flex-column">
                    <div>
                        <div className="text-1-rows mb-1">
                            <span className="h4 link" >
                                {title}
                            </span>
                        </div>
                        <p className="text-base mb-1">
                            {ArticleBase.content.slice(0, 80) + ' ...'}
                        </p>
                    </div>
                    <p className="text-right pr-3 mb-2"> {date} </p>
                </div>
            </a>
        </Link>

    )
}