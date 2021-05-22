import Link from 'next/link'
import ReactMarkdown from 'react-markdown';

export default function Card({ article }) {
    const category = article.__typename.replace('Article', '').toLowerCase();
    const { title, slug, ArticleBase, published_at } = article;
    const date = new Date(published_at).toLocaleDateString();

    return (
        <Link href={`${category}/${slug}`}>
            <a className="w-full p-3 flex">
                <div className="flex-1 bg-white overflow-hidden hover:shadow-xl transition-shadow">
                    <img src={`http://localhost:1337${ArticleBase.images[0].url}`} alt={title} className='' />
                    <div className="w-full font-bold text-xl text-gray-800 px-6 my-3 text-2-rows">
                        {title}
                    </div>
                    <p className="text-gray-700 text-base px-6 mb-5">
                        {ArticleBase.content.slice(0, 100) + ' ...'}
                    </p>
                    <p className="text-gray-500 text-right pr-3"> {date} </p>
                </div>
            </a>
        </Link>
    )
}