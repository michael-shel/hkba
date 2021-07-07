import { Logo } from '../SVGS/SVGS'
import MediaAsset from '../components/MediaAsset.component';
import { useQuery, gql } from '@apollo/client';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link'
const INFO = gql`
  query Info {
    info {
      phone
      address
      email
    }
  }
`;
export default function Footer() {

    const { error, loading, data } = useQuery(INFO);
    if (loading) return <h1> Loading... </h1>;
    if (error) return <h1> `Error! ${error.message}` </h1>
    const { email, phone, address } = data.info;
    // const phone = info.phone;
    // const address = info.address;
    return (
        <footer className="neumorphism-footer m-3 mb-3">
            <div className="neumorphism-static-inset justify-content-around">
                <div className="row align-items-center footer-content-block p-4 w-100">
                    <div className="neumorphism-static mb-4 mb-lg-0 pt-3 col-12 col-lg-3">
                        <h3 className="uppercase danger-shadow">Контакти</h3>
                        <div className="row flex-column text-nowrap">
                            <div className="col pt-3 d-flex flex-wrap justify-content-between align-items-center">
                                <div className="neumorphism-inset justify-content-between d-flex py-2 px-3 col-12 col-sm-5 align-items-center">
                                    <span className="regular-shadow">Телефон</span>
                                    <div className=""><i className="icon-footer i-phone"></i></div>
                                </div>
                                <a href={`tel:${phone}`} className="text-center col-12 col-sm-6 neumorphism-dynamic-btn mt-2 mt-sm-0 py-2 px-3 regular-shadow">{phone}</a>
                            </div>
                            <div className="col pt-3 d-flex flex-wrap justify-content-between align-items-center">
                                <div className="neumorphism-inset justify-content-between d-flex py-2 px-3 col-12 col-sm-5 align-items-center">
                                    <span className="regular-shadow">Email</span>
                                    <div className=""><i className="icon-footer i-mail"></i></div>
                                </div>
                                <a href={`mailto:${email}`} className="text-center col-12 col-sm-6 neumorphism-dynamic-btn mt-2 mt-sm-0 py-2 px-3 regular-shadow">{email}</a>
                            </div>
                            <div className="col p-3 d-flex flex-wrap justify-content-between align-items-center">
                                <div className="neumorphism-inset justify-content-between d-flex py-2 px-3 col-12 col-sm-5 align-items-center">
                                    <span className="regular-shadow ">Адреса</span>
                                    <div className=""><i className="icon-footer i-pin"></i></div>
                                </div>
                                <span className="text-center neumorphism-inset py-2 px-3 col-12 col-sm-6 regular-shadow mt-2 mt-sm-0">{address}</span>
                            </div>
                        </div>
                    </div>

                    <div className="neumorphism-static mb-4 mb-lg-0 p-3 col-12 col-lg-5">
                        <h3 className="uppercase danger-shadow">Сторінки</h3>
                        <div className="row text-nowrap">
                            <div className="col-6 py-2">
                                <Link href="/">
                                    <a className="link-underline">Головна</a>
                                </Link>
                            </div>
                            <div className="col-6 py-2">
                                <Link href="/about">
                                    <a className="link-underline">Про нас</a>
                                </Link>
                            </div>
                            <div className="col-6 py-2">
                                <Link href="/contacts">
                                    <a className="link-underline">Контакти</a>
                                </Link>
                            </div>
                            <div className="col-6 py-2">
                                <Link href="/additions">
                                    <a className="link-underline">Абітурієнтам</a>
                                </Link>
                            </div>
                            <div className="col-6 py-2">
                                <Link href="/blog">
                                    <a className="link-underline">Події</a>
                                </Link>
                            </div>
                            <div className="col-6 py-2">
                                <Link href="/history">
                                    <a className="link-underline">Історія</a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 row flex-column col-12 p-0 col-lg-3">
                        <div className="col text-center p-3">
                            <MediaAsset slug="logo2" classes="h-8 d-inline" />
                        </div>
                        <div className="col p-3">
                            <ul className="footer-bottom-social-list">
                                <li className="footer-bottom-social-item youtube neumorphism-dynamic">
                                    <Link href="https://www.pinterest/">
                                        <a className="footer-bottom-social-link" target="_blank">
                                            <span className="i-youtube"></span>
                                        </a>
                                    </Link>
                                </li>
                                <li className="footer-bottom-social-item facebook neumorphism-dynamic">
                                    <Link href="https://www.facebook.com/">
                                        <a className="footer-bottom-social-link" target="_blank">
                                            <span className="i-facebook"></span>
                                        </a>
                                    </Link>
                                </li>
                                <li className="footer-bottom-social-item instagram neumorphism-dynamic">
                                    <Link href="https://www.instagram.com/">
                                        <a className="footer-bottom-social-link" target="_blank">
                                            <span className="i-instagram"></span>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}