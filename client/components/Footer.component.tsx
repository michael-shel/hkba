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
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    const { email, phone, address } = data.info;
    // const phone = info.phone;
    // const address = info.address;
    return (
        <footer className="bg-white">
            <div className="container mx-auto px-8">
                <div className="w-full flex flex-col md:flex-row py-6 align-items-center">
                    <div className="flex-1 col-12 col-md-6 col-lg-3 p-0">
                        <p className="uppercase font-bold text-black-500 md:mb-6 my-3">Контакти</p>
                        <div className="row flex-column">
                            <div className="col">
                                Телефон : <a href={`tel:${phone}`} className="no-underline hover:underline text-gray-800 hover:text-yellow-500">{phone}</a>
                            </div>
                            <div className="col">
                                Email : <a href={`mailto:${email}`} className="no-underline hover:underline text-gray-800 hover:text-yellow-500">{email}</a>
                            </div>
                            <div className="col">
                                Адреса : <a className="no-underline hover:underline text-gray-800 hover:text-yellow-500">{address}</a>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 col-12 p-0 col-md-auto">
                        <p className="uppercase font-bold text-black-500 md:mb-6 my-3">Сторінки</p>
                        <div className="row">
                            <div className="col-6">
                                <Link href="/">
                                    <a className="no-underline hover:underline text-gray-800 hover:text-yellow-500">Головна</a>
                                </Link>
                            </div>
                            <div className="col-6">
                                <Link href="/about">
                                    <a className="no-underline hover:underline text-gray-800 hover:text-yellow-500">Про нас</a>
                                </Link>
                            </div>
                            <div className="col-6">
                                <Link href="/contacts">
                                    <a className="no-underline hover:underline text-gray-800 hover:text-yellow-500">Контакти</a>
                                </Link>
                            </div>
                            <div className="col-6">
                                <Link href="/additions">
                                    <a className="no-underline hover:underline text-gray-800 hover:text-yellow-500">Абітурієнтам</a>
                                </Link>
                            </div>
                            <div className="col-6">
                                <Link href="/blog">
                                    <a className="no-underline hover:underline text-gray-800 hover:text-yellow-500">Події</a>
                                </Link>
                            </div>
                            <div className="col-6">
                                <Link href="/blog">
                                    <a className="no-underline hover:underline text-gray-800 hover:text-yellow-500">Історія</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 row flex-column col-12 p-0 col-lg-3">
                        <div className="col text-center p-3">
                            <MediaAsset slug="logo" classes="h-10 d-inline" />
                        </div>
                        <div className="col">
                            <ul className="footer-bottom-social-list">
                                <li className="footer-bottom-social-item youtube">
                                    <a className="footer-bottom-social-link" target="_blank" href="https://www.pinterest/">
                                        <span className="i-youtube"></span>
                                    </a>
                                </li>
                                <li className="footer-bottom-social-item facebook">
                                    <a className="footer-bottom-social-link" target="_blank" href="https://www.facebook.com/">
                                        <span className="i-facebook"></span>
                                    </a>
                                </li>
                                <li className="footer-bottom-social-item instagram">
                                    <a className="footer-bottom-social-link" target="_blank" href="https://www.instagram.com/">
                                        <span className="i-instagram"></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}