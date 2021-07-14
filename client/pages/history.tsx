import Query from '../components/Query.component';
import ARTICLE_QUERY from '../apollo/ArticleQuery';
import Card from '../components/SliderCard.component'
import { BlogHeroSvg } from '../SVGS/SVGS';
import ReactMarkdown from 'react-markdown';
import RecomendationBlock from "../components/RecomendationBlock";
const Blog = () => {
    return (
        <section className=''>
                <div className="bloc-content">
                    <Query slug query={ARTICLE_QUERY('history')}>
                        {({ data }) => {
                            return data.blogArticles.map(History => {
                                    return <div className={`blog-bloc`}><Card key={History.slug} article={History} /></div>
                            })
                        }}
                    </Query>
                </div>
        </section>
    )
}

export default Blog;