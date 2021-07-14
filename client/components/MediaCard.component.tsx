import Link from 'next/link'
import ReactMarkdown from 'react-markdown';

export default function Card({ article }) {
    const { title, slug, ArticleBase, published_at } = article;

    return (
        <Link href={`gallery/${slug}`}>
            <a className="media-link">
                <div className="img-container">
                    <img src={`http://localhost:1337${ArticleBase.images[0].url}`} alt={title} className='ma-img' />
                    <img src={`http://localhost:1337${ArticleBase.images[1].url}`} alt={title} className='first-img absolute-img' />
                    <img src={`http://localhost:1337${ArticleBase.images[2].url}`} alt={title} className='last-img absolute-img' />
                </div>
            </a>
        </Link>

    )
}