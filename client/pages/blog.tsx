import Query from '../components/Query.component';
import ARTICLE_QUERY from '../apollo/ArticleQuery';
import Card from '../components/SliderCard.component'
import { BlogHeroSvg } from '../SVGS/SVGS';
import ReactMarkdown from 'react-markdown';
import RecomendationBlock from "../components/RecomendationBlock";
import { DropdownButton, Dropdown } from 'react-bootstrap';
const Blog = () => {
    return (
        <section className=''>

            <div className="main-page">

                <article className="page">
                    {/* <div className="page-head neumorphism-static">
                        <DropdownButton className="neumorphism-dropdown border-0 py-3 px-2" id="dropdown-basic-button" title="Сортувати за">
                            <Dropdown.Item href="#/action-1">Датою</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Рекомендацією</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Релевантністю</Dropdown.Item>
                        </DropdownButton>
                    </div> */}
                    <div className="d-flex flex-wrap">
                        <Query slug query={ARTICLE_QUERY("blog")}>
                            {({ data }) => {
                                return data.blogArticles.map(Blog => {
                                    return <div className={`col-12`}><Card key={Blog.slug} article={Blog} /></div>
                                })
                            }}
                        </Query>
                    </div>
                </article>
                <aside className="recomendation">
                    <div className="px-3 px-md-0">
                        <RecomendationBlock />
                    </div>
                </aside>
            </div>
        </section>
    )
}

export default Blog;