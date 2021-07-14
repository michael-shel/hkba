import { useRouter } from 'next/router'
import { resourceLimits } from 'worker_threads';

const ActiveLink = ({ children, href, icon }) => {

    const router = useRouter();
    let cls,ils;
    if (`/${router.query.category}` === href || router.asPath === href) {
        cls = 'active-link';
        ils = 'neumorphism-static-btn'
    } else {
        cls = '';
        ils = 'neumorphism-static-inset'
    }

    const handleClick = e => {
        e.preventDefault();
        router.push(href)
    }

    return <div className={`${cls} text-hover neumorphism-dynamic-btn`}><a href={href} onClick={handleClick} className={`link px-3 py-2 d-flex align-items-center justify-content-center `}><div className={`p-1 mr-2`}><i className={`nav-icon  ${icon}`}></i></div> {children}</a></div>
}

export default ActiveLink;