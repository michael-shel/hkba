import MediaGallery from '../../components/MediaGallery.component'
import Query from '../../components/Query.component'
import MEDIA_QUERY from '../../apollo/SingleGallery'
import { useRouter } from 'next/router'


const MediaWrapper = () => {
    const router = useRouter();
    return (
        <Query slug={router.query.slug} query={MEDIA_QUERY()}>
            {({ data }) => {
                console.log(data)
                data['category'] = router.query.category;
                return <MediaGallery key={data.mediaArticles[0].slug} media={data.mediaArticles[0]} />
            }}
        </Query>

    )
}

export default MediaWrapper;