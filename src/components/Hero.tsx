"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";

const Hero = () => {
  const hero = "/assets/videos/hero.mp4";
  const smallHero = "/assets/videos/smallHero.mp4";

  const [videoSrc, setVideoSrc] = useState<string>("");

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHero);
    } else {
      setVideoSrc(hero);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);

    setVideoSrc(window.innerWidth < 760 ? smallHero : hero);

    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  }, []);

  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 2.1 })
    gsap.to("#cta", { opacity: 1, y: -50, delay: 2.1 });
  });

  return (
    <section className="w-ful nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">
          iPhone 15 Pro
        </p>
        <div className="md:w-10/12 w-9/12">
          <video autoPlay muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a href="#highlights" className="btn">
          Buy
        </a>
        <p className="font-normal text-xl">From $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
