import { Logo } from '../SVGS/SVGS'
import ActiveLink from '../components/ActiveLink';
import Link from 'next/link'
import { useState, useEffect } from 'react';
import MediaAsset from '../components/MediaAsset.component';
import $ from 'jquery';

export default function Nav() {

    const [isTop, setScroll] = useState(true);
    const [mobileToggle, handleMobileToggle] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY < 175)
        })
    })

    return (
        <nav id="header" className={`sticky w-full hkba-nav z-30 top-0 bg-white ${isTop ? '' : 'shadow-2xl'}`}>
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                <div className="block lg:hidden pr-4">
                    <button onClick={() => handleMobileToggle(mobileToggle => !mobileToggle)} id="nav-toggle" className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                        <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
                <div
                    className={`w-full flex-grow lg:flex lg:items-center lg:w-auto mt-2 lg:mt-0 bg-white lg:bg-transparent text-black lg:p-0 z-20 ${mobileToggle ? 'flex' : 'hidden'}`}
                    id="nav-content">
                    <ul className="list-reset lg:flex flex-1 items-center">
                        <li className="mr-3">
                            <ActiveLink href="/">Головна</ActiveLink>
                        </li>
                        <li className="mr-3">
                            <ActiveLink href="/blog">Події</ActiveLink>
                        </li>
                        <li className="mr-3">
                            <ActiveLink href="/contacts">Контакти</ActiveLink>
                        </li>
                        <li className="mr-3">
                            <ActiveLink href="/additions">Абітурієнтам</ActiveLink>
                        </li>
                        <li className="mr-3">
                            <ActiveLink href="/about">Про нас</ActiveLink>
                        </li>
                    </ul>
                </div>
            </div>
            <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
        </nav>
    )
}