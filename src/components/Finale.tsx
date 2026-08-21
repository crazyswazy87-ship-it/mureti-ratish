import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Can from "./Can";
import Navbar from "./Navbar";
import { flavors } from "../data/flavors";
import { tornEdgeClipPath } from "../utils/tornEdge";
import "./Finale.css";

gsap.registerPlugin(ScrollTrigger);

export default function Finale() {
  const sectionRef = useRef<HTMLElement>(null);
  const waveRef = useRef<HTMLDivElement>(null);
  const canLeftRef = useRef<HTMLDivElement>(null);
  const canRightRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(waveRef.current, { yPercent: 30 });
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "top 20%",
          scrub: 0.6,
        },
      })
        .to(waveRef.current, { yPercent: 0, ease: "none" }, 0)
        .to(canLeftRef.current, { y: 0, rotate: -8, opacity: 1, ease: "none" }, 0)
        .to(canRightRef.current, { y: 0, rotate: 10, opacity: 1, ease: "none" }, 0.05);
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="finale" ref={sectionRef}>
      <Navbar tone="light" />
      <div
        className="finale__wave"
        ref={waveRef}
        style={{ clipPath: tornEdgeClipPath(24, 2) }}
      >
        <div
          className="finale__can finale__can--left"
          ref={canLeftRef}
        >
          <Can flavor={flavors[2]} />
        </div>
        <div
          className="finale__can finale__can--right"
          ref={canRightRef}
        >
          <Can flavor={flavors[3]} />
        </div>

        <div className="finale__content">
          <h2 className="finale__title">Get refreshed.</h2>
          <p className="finale__copy">
            Join the list for fresh Muratina drops, new sizes, and the good stuff
            before everyone else gets a sip.
          </p>
          <form
            className="finale__form"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="you@email.com"
              aria-label="Email address"
            />
            <button type="submit">Sign me up</button>
          </form>

          <div className="finale__footer">
            <span>© {new Date().getFullYear()} Mureti &amp; Ratish</span>
            <div className="finale__footer-links">
              <a href="#about">About</a>
              <a href="#showcase">Categories</a>
              <a href="#cart">Cart</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
