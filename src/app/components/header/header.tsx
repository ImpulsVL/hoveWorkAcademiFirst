import React from "react";
import Link from "next/link";

import Image from "next/image";
import BigArrowRight from './icons/big-arrow-right.svg';
import LittleArrowRight from './icons/down-arrow.svg';


import './header.scss';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header-title">
                <h2 className="header-title-text">SCHRIFT</h2>
                <Image
                    className="header-title-icon"
                    src={BigArrowRight}
                    alt="Arrow Right"
                />
            </div>
            <nav className="header-nav">
                <ul className="header-list">
                    <h2 className="header-item">
                        <Link href="/" className="header-link">ABOUT</Link>
                    </h2>
                    <h2 className="header-item">
                        <Link href="/" className="header-link">SERVICES</Link>
                    </h2>
                    <h2 className="header-item">
                        <Link href="/" className="header-link">PORTFOLIO</Link>
                    </h2>
                </ul>
                <ul className="header-second-title">
                    <h2 className="header-second-title-text">LET’S TALK
                    </h2>
                    <Image
                        className="header-title-icon-second"
                        src={LittleArrowRight}
                        alt="Arrow Right"
                    />
                </ul>
            </nav>
        </header>
    );
}

export default Header;