import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

// 이미지 및 비디오 불러오기
import video01 from "../../assets/video/video01.mp4";
import img01 from "../../assets/images/main/project01.jpg";
import img02 from "../../assets/images/main/project02.jpg";
import img03 from "../../assets/images/main/project03.jpg";
import img04 from "../../assets/images/main/project04.jpg";

/* slick 커스텀 화살표 */
const PrevArrow = ({ className, onClick }) => {
  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
    >
      ㅡ<br />P<br />R<br />E<br />V<br />ㅡ
    </button>
  );
};

const NextArrow = ({ className, onClick }) => {
  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
    >
      ㅡ<br />N<br />E<br />X<br />T<br />ㅡ
    </button>
  );
};

const projects = [
  {
    id: 1,
    type: "video",
    src: video01,
    alt: "프로젝트01",
    leftText: ["PROJECT01", "#React 작업"],
    rightText: ["ICONIC CREATIVE STUDIO", "REACT"],
  },
  {
    id: 2,
    type: "image",
    src: img01,
    alt: "프로젝트02",
    leftText: ["PROJECT02", "#반응형", "#리뉴얼"],
    rightText: ["Spotify", "RESPONSIVE WEB", "RENEWAL"],
  },
  {
    id: 3,
    type: "image",
    src: img02,
    alt: "프로젝트03",
    leftText: ["PROJECT03", "#브랜딩 / #리뉴얼", "#반응형"],
    rightText: ["Lancôme", "RESPONSIVE WEB", "RENEWAL"],
  },
  {
    id: 4,
    type: "image",
    src: img03,
    alt: "프로젝트04",
    leftText: ["PROJECT04", "#브랜딩 / #리뉴얼", "#반응형"],
    rightText: ["Espoir", "RESPONSIVE WEB", "RENEWAL"],
  },
  {
    id: 5,
    type: "image",
    src: img04,
    alt: "프로젝트05",
    leftText: ["PROJECT05", "#클론 #반응형"],
    rightText: ["Nuvo", "RESPONSIVE WEB", "CLONE"],
  },
];

const MainSlide = () => {
  /* slick 설정 */
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    dots: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (

    <div className="main-wrapper">
      <div className="container-fix">
        <Slider className="main-slide" {...settings}>
          {projects.map((project, index) => (
            <div key={project.id}>
              <div className="main-project">
                <div className="main-thum">
                  {project.type === "video" ? (
                    <video
                      src={project.src}
                      muted
                      autoPlay
                      playsInline
                      loop
                    />
                  ) : (
                    <img src={project.src} alt={project.alt} />
                  )}

                  <div className="left-text">
                    <span>
                      {project.leftText.map((text, i) => (
                        <React.Fragment key={i}>
                          {text}
                          <br />
                        </React.Fragment>
                      ))}
                    </span>
                  </div>
                  <a href="#" className="project-btn">
                    <div className="project-circle"></div>
                    <p>
                      JINYI KIM <br /> PROJECT
                    </p>
                  </a>
                </div>

                <div className="right-text">
                  <span>
                    {project.rightText.map((text, i) => (
                      <React.Fragment key={i}>
                        {text}
                        <br />
                      </React.Fragment>
                    ))}
                  </span>
                </div>
                </div>
                  <div className="main-paging">
                    <span><b>{String(index + 1).padStart(2, "0")}</b> - 05</span>
                  </div>
              </div>
          ))}
        </Slider>
      </div>
    </div>
    
  );
};

export default MainSlide;
