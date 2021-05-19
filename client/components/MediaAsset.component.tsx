import MEDIA_QUERY from '../apollo/SingleMedia';
import Query from '../components/Query.component';

export default function MediaAsset({ slug, classes = '' }) {
    return (
        <Query slug={slug} query={MEDIA_QUERY()}>
            {({ data }) => {
                const media = data.mediaAssets[0];
                return <img src={`http://localhost:1337${media.image.url}`} alt={media.title} className={classes} />
            }}
        </Query>
    )
}