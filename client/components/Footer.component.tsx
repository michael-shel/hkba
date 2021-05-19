import { Logo } from '../SVGS/SVGS'
import MediaAsset from '../components/MediaAsset.component';
export default function Footer() {
    return (
        <footer className="bg-white">
            <div className="container mx-auto px-8">
                <div className="w-full flex flex-col md:flex-row py-6 align-items-center">
                    <div className="flex-1">
                        <p className="uppercase font-bold text-black-500 md:mb-6">Контакти</p>
                        <ul className="list-reset mb-6">
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#" className="no-underline hover:underline text-gray-800 hover:text-yellow-500">FAQ</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#" className="no-underline hover:underline text-gray-800 hover:text-yellow-500">Help</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#" className="no-underline hover:underline text-gray-800 hover:text-yellow-500">Support</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <p className="uppercase font-bold text-black-500 md:mb-6">Сторінки</p>
                        <ul className="list-reset mb-6">
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#" className="no-underline hover:underline text-gray-800 hover:text-yellow-500">FAQ</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#" className="no-underline hover:underline text-gray-800 hover:text-yellow-500">Help</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#" className="no-underline hover:underline text-gray-800 hover:text-yellow-500">Support</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1 row flex-column">
                        <div className="col text-center">
                            <MediaAsset slug="logo" classes="h-10 d-inline"/>
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