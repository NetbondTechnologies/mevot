import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Sliders from "./Slider";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP, SplitText);

const Homepage:React.FC = () => {
  const para: string[] = ["Changing", "Mobility", "Forever."];
  const para2: string[] = ["Discover Our", "Story"];
  const title: string[] = ["Tech", "&", "Performance"]
  let paraRef = useRef<HTMLParagraphElement[]>([]);
  let para2Ref = useRef<HTMLParagraphElement[]>([]);
  let sectionRef = useRef<HTMLDivElement>(null);
  let heroTitleRef = useRef<HTMLHeadingElement>(null)
  let descTitleRef = useRef<HTMLHeadingElement>(null)
  let heroElementRef = useRef<HTMLSpanElement[]>([])
  let descElementRef = useRef<HTMLSpanElement[]>([])

  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 2,
      effects: true,
      normalizeScroll: true,
    });
    
    gsap.from(sectionRef.current, {
      duration: 1.6,
      ease: "sine.in",
      y: 200,
      opacity: 0,
      scrollTrigger: {
        trigger: ".button",
        start: "bottom center",
        end: "bottom top",
      },
    });
    const split = new SplitText(para2Ref.current, {
      type: "lines",
      linesClass: "line",
      mask: "lines",
    });
    gsap.set(para2Ref, { opacity: 1 });
    gsap.from(split.lines, {
      duration: 1.4,
      y: 150,
      stagger: 0.1,
      ease: "expo.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "top 10%",
      },
    });

    gsap.fromTo(
      descElementRef.current,
      { opacity: 0 },
      {
        
        opacity: 1,
        stagger: 1.5,
        ease: "linear",
        scrollTrigger:{
          trigger: descTitleRef.current,
          start: "top 90%",
          end: "top 10%",
        }
      }
    );

    gsap.fromTo(
      heroElementRef.current,
      { opacity: 0, y: 20 },
      {
        y: 0,
        opacity: 1,
        delay: 1,
        stagger: 0.1,
        ease: "linear",
      }
    );
    
      gsap.fromTo(
        heroTitleRef.current,
        { filter: "blur(12px)" },
        {
          y: 0,
          duration:5,
          opacity: 1, 
          delay:1,
          filter: "blur(0px)",
          ease: "power4.out",
        }
      );
  

    gsap.fromTo(
      paraRef.current,
      { color: "gray" },
      {
        color: "white",
        stagger: 0.8,
        ease: "linear",
        scrollTrigger: {
          trigger: ".small-cta",
          start: "top top",
          pin: true,
          end: "+=300",
          scrub: 1,
        },
      }
    );

    gsap.to(".img-1", {
      x: -1250,
      ease: "linear",
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top 10%",
        end: "+=1600",
        pin: true,
        scrub: 1,
      },
    });
    gsap.to(".img-2", {
      x: 1150,
      ease: "linear",
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top 10%",
        end: "+=1600",
        scrub: 1,
      },
    });
    gsap.to(".hero-title", {
      scale: 0.2,
      opacity: 0.4,
      ease: "linear",
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top 10%",
        end: "+=1800",
        scrub: 1,
      },
    });
    return () => split.revert();
  });

  return (
    <>
    <div className="homepage">
      <div className="hero-section">
        <h1 className="hero-title" ref={heroTitleRef}>{"Mevot MK2".split("").map((l: string, i: number)=>{
          return <span className={`${i === 4? "mr" : ""}`} ref={(er)=>{
            if(er) heroElementRef.current[i] = er;
          }} key={i}>{l}</span>
        
        })}</h1>
        <div className="hero-image img-1">
          <img src="./asset 2.png" alt="" />
        </div>
        <div className="hero-image img-2">
          <img src="./asset 1.png" alt="" />
        </div>
      </div>
      <div className="small-cta">
        <div className="sm-cta-text">
          {para.map((p: string, i) => {
            return (
              <p
                key={i}
                ref={(el) => {
                  if (el) paraRef.current[i] = el;
                }}
                className="sm-cta-text-sub"
              >
                {p}
              </p>
            );
          })}
        </div>
        <div className="sm-cta-img">
          <img src="./asset 3.png" alt="" />
        </div>
        <button type="button" className="button">
          {" "}
          Buy Now{" "}
        </button>
      </div>
      <div className="info" ref={sectionRef}>
        <div className="info-text">
          <div className="info-title">
            {para2.map((p: string, i) => {
              return (
                <p
                  ref={(el) => {
                    if (el) para2Ref.current[i] = el;
                  }}
                  className="info-title-sub"
                  key={i}
                >
                  {p}
                </p>
              );
            })}
          </div>
          <p>
            Our story began with a simple goal: to revolutionize urban mobility.
            Founded by a small team of dreamers and entrepreneurs in a garage,
            we set out to design an e-board that reflected our values of
            excellence in design and performance. Today, we bring that vision to
            life by creating a mode of transport that empowers you to go farther
            and explore more.{" "}
          </p>
        </div>
        <div className="info-img">
          <img src="./asset 4.jpeg" alt="" />
        </div>
      </div>
      <div className="description-section">
        <div className="desc-title-div">
          <h1 className="desc-title" ref={descTitleRef}>
            {title.map((p: string, i: number) => {
              return <span ref={(er)=>{
                if(er) descElementRef.current[i] = er;
              }} key={i}>{p}</span>;
            })}
          </h1>
        </div>
        <div className="desc-desc-div">
          <h3>Designed with excellence in mind.</h3>
          <p>
            The Mevot e-board redefines urban mobility with precision-engineered
            design. Effortlessly combining power, portability, and reliability,
            it sets a new benchmark for personal transportation. With advanced
            motors and a long-lasting battery, every ride is smooth, fast, and
            built to go farther. The Mevot e-board redefines urban mobility with
            precision-engineered design. Effortlessly
          </p>
        </div>
        <div className="product-showcase">
          <div className="product-img">
            <img src="./asset 5.png" alt="" />
          </div>
          <div className="product-desc">
            <p className="product-para">
              Mevot's e-board fuses cutting-edge battery tech, powerful dual
              motors, and resilient chassis engineering for peak{" "}
              <span className="highlight">performance</span>, extended range,
              and the ultimate ride across both urban and rugged terrains. Go
              fast!
            </p>
            <p></p>
          </div>
        </div>
      </div>
      <div className="cta-plus-info">
        <div className="cta-plus-img">
          <img src="./asset 6.png" alt="" />
        </div>
        <div className="cta-plus-info-div">
          <div className="plus-info">
            <h2>25km </h2>
            <p>Of fully electric autonomy </p>
          </div>
          <div className="plus-info">
            <h2>35km/h</h2>
            <p>For the maximum speed</p>
          </div>
          <div className="plus-info">
            <h2>IP54</h2>
            <p>Dust and water resistance</p>
          </div>
          <div>
            <button type="button" className="button">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="cta-two">
        <div className="para">
          From steep hills to distant commutes, Mevot ensures you focus on the
          ride, not your <span className="highlight">battery</span>. Engineered
          to deliver top speed and endurance, it's ready to elevate your
          performance. Go anywhere safe.
        </div>
        <div className="cta-two-info">
          <div>
            <p className="text">In only </p>
            <p className="center">2h</p>
            <p className="text">Get you board charged up to 80%</p>
          </div>
          <div>
            <p className="text">Up to</p>
            <p className="center">150kg</p>
            <p className="text">Capacity, engineered for strength</p>
          </div>
          <div>
            <p className="text">At only</p>
            <p className="center">6kg</p>
            <p className="text">Its lightweight and comfortable</p>
          </div>
        </div>
        <button type="button" className="button">
          Buy Now
        </button>
      </div>
      <div className="components">
        <div className="product-component">
          <div className="prdt-cmpnt-img">
            <img src="./asset 7.png" alt="" />
          </div>
          <div className="prdt-cmpnt-info">
            <h2>Easy</h2>
            <p>
              Easily adjust speed, brake, switch directions, and cycle through
              four riding modes. The built-in display keeps you informed with
              real-time speed tracking.
            </p>
            <button type="button" className="button">
              Buy Now
            </button>
          </div>
        </div>
        <div className="product-component">
          <div className="prdt-cmpnt-img">
            <img src="./asset 8.png" alt="" />
          </div>
          <div className="prdt-cmpnt-info">
            <h2>Fast</h2>
            <p>
              The Mevot charger powers your e-board in just 2.5 hours. Compact
              and lightweight, it's built for convenience on the go.
            </p>
            <button type="button" className="button">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
    <Sliders/>
    </>
  );
};

export default Homepage;
