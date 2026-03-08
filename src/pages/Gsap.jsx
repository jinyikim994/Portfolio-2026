// GsapWithAnimation.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// 이미지 import
import img01 from "../assets/images/gsap/img01.jpg";
import img02 from "../assets/images/gsap/img02.jpg";
import img03 from "../assets/images/gsap/img03.jpg";
import img04 from "../assets/images/gsap/img04.jpg";
import img05 from "../assets/images/gsap/img05.jpg";
import img06 from "../assets/images/gsap/img06.jpg";
import img07 from "../assets/images/gsap/img07.jpg";
import img08 from "../assets/images/gsap/img08.jpg";
import img09 from "../assets/images/gsap/img09.jpg";
import img10 from "../assets/images/gsap/img10.jpg";
import img11 from "../assets/images/gsap/img11.jpg";

gsap.registerPlugin(ScrollTrigger);

const gsapImages = [
    img01, img02, img03, img04, img05,
    img06, img07, img08, img09, img10, img11
];

const GsapWithAnimation = () => {
    const quoteRef = useRef(null);
    const thankRef = useRef(null);

useEffect(() => {
    const boxes = quoteRef.current.querySelectorAll(".box");

    // Quote ScrollTrigger
    const quoteTimeline = gsap.timeline({
    scrollTrigger: {
    trigger: quoteRef.current,
    pin: true,
    scrub: 0.3,
    start: "top top",
    end: "+=3000"
    }
});

quoteTimeline.to(boxes, {
    xPercent: -100,
    duration: 2,
    ease: "none",
    stagger: 3
}).to({}, { duration: 1 });

// Thank 애니메이션
const thankSpans = thankRef.current.querySelectorAll("span");

const thankTimeline = gsap.timeline({ repeat: -1, repeatDelay: 1 });

thankTimeline
    .fromTo(
        thankSpans,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.1 }
    )
    .to(
        thankSpans,
        {
        opacity: 0,
        y: -100,
        duration: 1,
        stagger: { each: 0.1, from: "end" }
        },
        "+=2" // delay 2초 후 실행
);

// Cleanup
return () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    quoteTimeline.kill();
    thankTimeline.kill();
};
}, []);

  return (
    <div className="gsap">
      <div className="container-fix-sub">
        <div className="title">
          <h2>GSAP.</h2>
          <p>"<span>I</span>M<span>POSSIBLE</span>"</p>
        </div>

        {/* Quote Section */}
        <div className="quote" ref={quoteRef} style={{ height: "3000px" }}>
          <div className="box-wrapper" style={{ display: "flex", width: `${gsapImages.length * 100}%` }}>
            {gsapImages.map((img, idx) => (
              <div className="box" key={idx} style={{ flex: "0 0 auto" }}>
                <img src={img} alt={`img0${idx + 1}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Thank Section */}
        <div className="thank" ref={thankRef}>
          {"THANKYOUFORWATCHING".split("").map((char, idx) => (
            <span key={idx}>{char}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GsapWithAnimation;