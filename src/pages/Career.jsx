// Career.jsx
import React, { useState } from "react";
import img01 from "../assets/images/career/work04.jpg";
import img02 from "../assets/images/career/work05.jpg";
import img03 from "../assets/images/career/work06.jpg";
import img14 from "../assets/images/career/work14.jpg";
import img15 from "../assets/images/career/work15.jpg";
import img16 from "../assets/images/career/work16.jpg";

import imgKb from "../assets/images/career/국민카드.jpg";
import imgSony from "../assets/images/career/sonykorea.jpg";
import imgClinique from "../assets/images/career/work17.jpg";
import imgJomalone from "../assets/images/career/work18.jpg";

import imgProj01 from "../assets/images/career/project01.jpg";
import imgProj02 from "../assets/images/career/project02.jpg";
import imgProj03 from "../assets/images/career/project03.jpg";
import imgProj04 from "../assets/images/career/project04.jpg";

import video01 from "../assets/video/video01.mp4";

const tabsData = [
    { id: "tab-1", label: "구축(솔루션)" },
    { id: "tab-2", label: "운영" },
    { id: "tab-3", label: "개인 프로젝트" },
    { id: "tab-4", label: "REACT" },
];

const projects = {
    "tab-1": [
        { img: img01, title: "정우 q.e.b건설", sub: "그누보드 솔루션", contribution: "퍼블리싱 기여도 100%", link: "http://www.jwqeb.co.kr/" },
        { img: img02, title: "수원시환경성질환아토피센터", sub: "하드코딩", contribution: "퍼블리싱 기여도 100%", link: "https://www.atopyzerosuwon.or.kr/html/?pmode=main" },
        { img: img03, title: "이유에프앤씨", sub: "그누보드 솔루션", contribution: "퍼블리싱 기여도 100%", link: "https://leeyoo-food.com/" },
        { img: img14, title: "한일합성수지공업사", sub: "그누보드 솔루션", contribution: "퍼블리싱 기여도 100%", link: "http://nurimono.co.kr/" },
        { img: img15, title: "티씨글로칼", sub: "그누보드 솔루션", contribution: "퍼블리싱 기여도 100%", link: "http://fs210412.dothome.co.kr/" },
        { img: img16, title: "동신포리마", sub: "그누보드 솔루션", contribution: "퍼블리싱 기여도 100%", link: "http://14.63.227.17/" },
    ],
    "tab-2": [
        { img: imgKb, title: "국민카드", sub: "사이트 운영", link: "https://card.kbcard.com/" },
        { img: imgSony, title: "SONY KOREA", sub: "사이트 운영", link: "https://store.sony.co.kr/" },
        { img: imgClinique, title: "크리니크", sub: "사이트 운영", link: "https://www.cliniquekorea.co.kr/" },
        { img: imgJomalone, title: "조말론", sub: "사이트 운영", link: "https://www.jomalone.co.kr/" },
    ],
    "tab-3": [
        { img: imgProj01, title: "에스쁘아", sub: "#리뉴얼 #반응형 #기획 #코딩", contribution: "퍼블리싱 기여도 100%", link: "../../project/project01/index.html" },
        { img: imgProj02, title: "자라", sub: "#리뉴얼 #반응형 #기획 #코딩", contribution: "퍼블리싱 기여도 100%", link: "../../project/project02/project5.html" },
        { img: imgProj03, title: "스포티파이", sub: "#리뉴얼 #반응형 #기획 #코딩", contribution: "퍼블리싱 기여도 100%", link: "../../project/project03/spotify.html" },
        { img: imgProj04, title: "누보", sub: "#반응형 #클론코딩", contribution: "퍼블리싱 기여도 100%", link: "../../project/project04/nuvo_main.html" },
    ],
    "tab-4": [
        { video: video01, title: "ICONIC CREATIVE STUDIO", sub: "#구축 #반응형 #코딩", contribution: "퍼블리싱 및 디자인 기여도 100%", link: "https://iconicseoul.com/" },
    ],
};

const ProjectBox = ({ project }) => (
    <div className="box">
        <div className="img-box">
            {project.img && <img src={project.img} alt={project.title} />}
            {project.video && <video src={project.video} muted autoPlay playsInline></video>}
        </div>
        <div className="text-box">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
                <h5>{project.title}</h5>
                <h6>{project.sub}</h6>
                {project.contribution && <h6>{project.contribution}</h6>}
            </a>
        </div>
    </div>
);

const Career = () => {
    const [activeTab, setActiveTab] = useState("tab-1");

    return (
        <div className="career">
            <div className="container-fix-sub">
                <div className="title">
                <h1>CAREER</h1>
                <p>MORE THAN<br />15+ Collection layouts</p>
                </div>

                <div className="tab-wrap">
                <ul className="tabs">
                    {tabsData.map((tab) => (
                    <li
                        key={tab.id}
                        className={`tab-link ${activeTab === tab.id ? "current" : ""}`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.label}
                    </li>
                    ))}
                </ul>

                {Object.keys(projects).map((tabId) => (
                    <div
                    key={tabId}
                    id={tabId}
                    className={`tab-content ${activeTab === tabId ? "current" : ""}`}
                    >
                    <div className="content">
                        {projects[tabId].map((project, idx) => (
                        <ProjectBox key={idx} project={project} />
                        ))}
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
};

export default Career;