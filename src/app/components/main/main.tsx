import React from "react";
import Link from "next/link";

import Image from "next/image";
import Code from './images/code.svg';
import About from './images/AboutImage.png';
import CodeItem from './images/code-item.svg';


import Arrow from './icons/arrow-bottom.svg';
import Block from './icons/block.svg';
import Light from './icons/lightning.svg';
import Circle from './icons/circle.svg';
import Star from './icons/star.svg';

import './main.scss';
import MainAbout from "./mainAbout/mainAbout";
import MainServices from "./mainServices/mainSevices";
import MainPortfolio from "./mainPortfolio/mainProtfolio";
import MainTestimonials from "./mainTestimonials/mainTestimonials";

const Main: React.FC = () => {
    return (
        <main className="main">
            <section className="main-art">
                <section className="main-section">
                    <article className="main-article">
                        <h1 className="main-article-title">EST 21.12.24</h1>
                        <p className="main-article-description">A place where design philosophy blends innovation and clarity to create impactful solutions</p>
                    </article>
                    <Image
                        className="main-section-image"
                        src={Code}
                        alt="Code"
                    />
                </section>
                <section className="main-center-section">
                    <article className="main-center-article">
                        <h1 className="main-center-article-title">The Art of Bold Precision</h1>
                    </article>
                </section>
                <section className="main-bottom-section">
                    <article className="main-bottom-article">
                        <h1 className="main-bottom-article-title">Bold Visions. Precise Execution</h1>
                    </article>
                    <div className="line"></div>
                    <button className="main-bottom-button">
                        DISCOVER OUR WORK
                        <Image
                            className="main-bottom-section-icon"
                            src={Arrow}
                            alt="Code"
                        />
                    </button>
                </section>
            </section>
            <MainAbout />
            <MainServices />
            <MainPortfolio />
            <MainTestimonials />
        </main>
    );
}

export default Main;