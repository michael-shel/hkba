import ActiveLink from './ActiveLink';
import Link from 'next/link'
import MediaAsset from './MediaAsset.component';
import $ from 'jquery';

export default function Header() {

    return (
        <div>
        <div className={`main-logo w-full container grid-cols-3 mx-auto grid grid-cols-3 items-center justify-between `}>
            <div className="text-left">
                <Link href="/">
                    <a className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
                        <MediaAsset classes="inline" slug="sketch" />
                    </a>
                </Link>
            </div>
            <div className="text-center">
                <Link href="/">
                    <a className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
                        <MediaAsset classes="inline" slug="logo" />
                    </a>
                </Link>
            </div>
            <div className="text-right">
                <Link href="/">
                    <a className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
                        <MediaAsset classes="inline" slug="patron" />
                    </a>
                </Link>
            </div>
        </div>
        <div className="border-yellow-700 border">
            <p className="container mx-auto uppercase fs text-lg text-center">ужгородська греко-католицька богословська академія ім. блаженного теодара ромжі</p>
        </div>
        </div>
    )
}