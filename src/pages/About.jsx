import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";

// 비디오
import myVideo from "../assets/video/video.mp4";

// 썸네일 및 Experience 이미지 import
import aboutThum from "../assets/images/about/about-thum.jpg";
import img01 from "../assets/images/about/img01.jpg";
import img02 from "../assets/images/about/img02.jpg";
import img03 from "../assets/images/about/img03.jpg";
import img04 from "../assets/images/about/img04.jpg";
import img05 from "../assets/images/about/img05.jpg";
import img06 from "../assets/images/about/img06.jpg";
import img07 from "../assets/images/about/img07.jpg";
import img08 from "../assets/images/about/img08.jpg";
import img09 from "../assets/images/about/img09.jpg";
import img10 from "../assets/images/about/img10.jpg";
import img11 from "../assets/images/about/img11.jpg";
import img12 from "../assets/images/about/img12.jpg";
import img13 from "../assets/images/about/img13.jpg";
import img14 from "../assets/images/about/img14.jpg";
import img15 from "../assets/images/about/img15.jpg";
import img16 from "../assets/images/about/img16.jpg";

const experienceImages = [
    img01, img02, img03, img04, img05, img06, img07, img08,
    img09, img10, img11, img12, img13, img14, img15, img16
];

const careerData = [
    {
        title: "01. 더조은 컴퓨터 아트학원 / 2020.09~2021.03",
        desc: "- 웹 개발 양성과정\n- HTML / CSS / JQUERY / JAVASCRIPT"
    },
    {
        title: "02. 파이브센스 / 웹에이전시 / 2021.03 ~ 2021.09",
        desc: "- PHP 기반 웹 구축\n- 쇼핑몰 / 기업형 사이트 구축"
    },
    {
        title: "03. 아이파트너즈 / 웹에이전시 / 2023.02 ~",
        desc: "- 국민카드 운영\n- 소니코리아 운영"
    }
];

const About = () => {
    const typedEl = useRef(null);
    const [activeIndex, setActiveIndex] = useState(null);

    useEffect(() => {
        const typed = new Typed(typedEl.current, {
            strings: ["WELCOME TO MY PORTFOLIO", "FRONTEND PUBLISHER", "CREATIVE DEVELOPER"],
            typeSpeed: 60,
            backSpeed: 40,
            loop: true
        });

        return () => typed.destroy();
    }, []);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="about">

        {/* Visual */}
        <div className="visual">
            <div className="container-fix-sub">
            <div className="left">
                <h2 className="visual-title">
                HELLO WORLD <br />
                "<span ref={typedEl}></span>"
                </h2>
            </div>
            <div className="right">
                <video autoPlay muted loop playsInline>
                <source src={myVideo} type="video/mp4" />
                </video>
            </div>
            </div>
        </div>

        {/* Introduction */}
        <div className="introduction">
            <div className="container-fix-sub">
            <div className="left">
                <img src={aboutThum} alt="thumbnail" />
            </div>
            <div className="right">
                <h2 className="main-title">MY STORY</h2>
                <p className="desc">
                아름다운 모든것들을 사랑하는 웹퍼블리셔 김진이입니다.
                패션 디자인과를 전공한 저는 평소 자연스럽게 시각적인 부분에 관심을 갖게 되었고,
                좋아하는일과 잘 할수있는 일을 고민끝에 ‘웹 개발자 양성 과정’ 교육을 이수하였습니다.
                처음 코딩을 배우는 과정에서 다소 생소하기도,어렵기도 하였지만 배울수록 흥미있는 분야였고 
                실수를 반복하고 고쳐나가는 과정들을 통해 성장하는 저의 모습을 보며 성취감을 느끼게 되었습니다.<br/>
                웹에이전시에서의 짧은 6개월 인턴 경험을 통해 다양한 실무경험을 쌓을수있었으며 앞으로 부족하더라도 계속해서 성장하며 나아갈수있는 퍼블리셔가 되고싶다는 생각을 하게되었습니다.
                </p>
            </div>
            </div>
        </div>

        {/* Experience */}
        <div className="experience">
            <div className="container-fix-sub">
            <h2 className="main-title">WORKING HOLIDAY</h2>
            <div className="image-wrap">
                {experienceImages.map((img, index) => (
                    <img key={index} src={img.default || img} alt={`experience-${index + 1}`} />
                ))}
                </div>
            </div>
        </div>

        {/* Career */}
        <div className="career">
            <div className="container-fix-sub">
            <h2 className="main-title">CAREER</h2>
            <div className="content">
                {careerData.map((item, index) => (
                <div 
                    className={`accordion-item ${activeIndex === index ? "active" : ""}`} 
                    key={index}
                    onClick={() => toggleAccordion(index)}
                >
                    <div className="title">
                    <span>{item.title}</span>
                    </div>
                    {activeIndex === index && (
                    <p className="desc">
                        {item.desc.split("\n").map((line, i) => (
                        <React.Fragment key={i}>{line}<br/></React.Fragment>
                        ))}
                    </p>
                    )}
                </div>
                ))}
            </div>
            </div>
        </div>

        {/* Contact */}
        <div className="contact">
            <div className="container-fix-sub">
            <h2 className="main-title">CONTACT</h2>
            <div className="info">
                <div className="circle">get in <br /> touch</div>
                <ul>
                <li>PERSONAL INFO</li>
                <li>MBTI : ISTJ</li>
                <li>PHONE : 010 4204 8415</li>
                </ul>
            </div>
            </div>
        </div>

        </div>
    );
};

export default About;