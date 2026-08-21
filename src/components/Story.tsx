import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./Navbar";
import Can from "./Can";
import Splatter from "./Splatter";
import { flavors } from "../data/flavors";
import { tornEdgeClipPath } from "../utils/tornEdge";
import "./Story.css";

gsap.registerPlugin(ScrollTrigger);

const canA = flavors[0]; // Tropical Depression — the hero can
const canB = flavors[1]; // Drunken Sailor — the second falling can

export default function Story() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const pinkLayerRef = useRef<HTMLDivElement>(null);
  const ghostHeadlineRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const canARef = useRef<HTMLDivElement>(null);
  const canBRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLHeadingElement>(null);
  const line2Ref = useRef<HTMLHeadingElement>(null);
  const noHangoverRef = useRef<HTMLDivElement>(null);
  const circle1Ref = useRef<HTMLDivElement>(null);
  const circle2Ref = useRef<HTMLDivElement>(null);

  const [tone, setTone] = useState<"light" | "dark">("light");

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(pinkLayerRef.current, { yPercent: 100 });
      gsap.set([line1Ref.current, line2Ref.current], { opacity: 0, y: 50 });
      gsap.set(noHangoverRef.current, { opacity: 0, y: 30 });
      gsap.set([circle1Ref.current, circle2Ref.current], {
        opacity: 0,
        scale: 0.6,
      });
      gsap.set(canBRef.current, { x: "26%", y: "-4%", rotate: 18 });
      gsap.set(canARef.current, {
        x: "-6%",
        y: "10%",
        rotate: -10,
        scale: 1,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.6,
          pin: stageRef.current,
          onUpdate: (self) => {
            setTone(self.progress > 0.32 ? "dark" : "light");
          },
        },
        defaults: { ease: "none" },
      });

      // -- Phase A -> B: tagline / CTA retire early
      tl.to([taglineRef.current, ctaRef.current], { opacity: 0, y: -18, duration: 0.1 }, 0.12);

      // second can tumbles off
      tl.to(
        canBRef.current,
        { x: "60%", y: "50%", rotate: 70, opacity: 0, scale: 0.7, duration: 0.2 },
        0.16
      );

      // ghost headline fades as the pink curtain rises
      tl.to(ghostHeadlineRef.current, { opacity: 0, duration: 0.12 }, 0.26);

      // pink curtain wipes up over the navy hero
      tl.to(pinkLayerRef.current, { yPercent: 0, duration: 0.26 }, 0.28);

      // hero can settles, rotates upright, drifts left through the whole story
      tl.to(
        canARef.current,
        { x: "-22%", y: "0%", rotate: -95, scale: 0.82, duration: 0.62 },
        0.16
      );

      // headline line 1 in / out
      tl.to(line1Ref.current, { opacity: 1, y: 0, duration: 0.14 }, 0.32);
      tl.to(line1Ref.current, { opacity: 0, y: -50, duration: 0.1 }, 0.54);

      // headline line 2 in / out
      tl.to(line2Ref.current, { opacity: 1, y: 0, duration: 0.14 }, 0.54);
      tl.to(line2Ref.current, { opacity: 0, y: -40, duration: 0.1 }, 0.74);

      // lifestyle circles + "no hangover" caption
      tl.to(
        [circle1Ref.current, circle2Ref.current],
        { opacity: 1, scale: 1, duration: 0.16, stagger: 0.06 },
        0.66
      );
      tl.to(noHangoverRef.current, { opacity: 1, y: 0, duration: 0.16 }, 0.7);

      // everything retires before the pin releases into the showcase
      tl.to(
        [canARef.current, circle1Ref.current, circle2Ref.current, noHangoverRef.current],
        { opacity: 0, duration: 0.08 },
        0.9
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="story" ref={wrapperRef}>
      <div className="story__stage" ref={stageRef}>
        <Navbar tone={tone} />

        {/* NAVY BASE LAYER */}
        <div className="story__layer story__layer--navy">
          <Splatter className="story__splatter story__splatter--a" color="#ffffff" />
          <Splatter className="story__splatter story__splatter--b" color="#ffffff" />
          <h1 className="story__ghost" ref={ghostHeadlineRef}>
            MURATINA
          </h1>

          <div className="story__hero-copy">
            <p className="story__tagline" ref={taglineRef}>
              Born from tradition. Made for the moment. A bold taste of Muratina,
              crafted to bring people together.
            </p>
            <a className="story__cta" href="#showcase" ref={ctaRef}>
              Get yours
            </a>
          </div>
        </div>

        {/* PINK CURTAIN LAYER */}
        <div
          className="story__layer story__layer--pink"
          ref={pinkLayerRef}
          style={{ clipPath: tornEdgeClipPath(22, 2.4) }}
        >
          <Splatter className="story__splatter story__splatter--c" color="#eeb8cb" />
          <div className="story__headline-stack">
            <h2 className="story__line" ref={line1Ref}>
              DRINKS WITHOUT
            </h2>
            <h2 className="story__line story__line--alt" ref={line2Ref}>
              A HANGOVER
            </h2>
          </div>

          <div className="story__lifestyle" ref={noHangoverRef}>
            <span className="story__eyebrow">Real refreshment</span>
            <h3 className="story__no-hangover">NO HANGOVER</h3>
          </div>

          <div className="story__circle story__circle--a" ref={circle1Ref}>
            <LifestyleBlob />
          </div>
          <div className="story__circle story__circle--b" ref={circle2Ref}>
            <LifestyleBlob variant="b" />
          </div>
        </div>

        {/* CANS — sit above both layers */}
        <div className="story__can story__can--b" ref={canBRef}>
          <Can flavor={canB} />
        </div>
        <div className="story__can story__can--a" ref={canARef}>
          <Can flavor={canA} />
        </div>
      </div>
    </div>
  );
}

function LifestyleBlob({ variant = "a" }: { variant?: "a" | "b" }) {
  const bg = variant === "a" ? "#f2a7c3" : "#1f2a6b";
  const fg = variant === "a" ? "#1f2a6b" : "#f6cfe0";
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="98" fill={bg} />
      <circle cx="72" cy="86" r="7" fill={fg} />
      <circle cx="128" cy="86" r="7" fill={fg} />
      <path
        d="M60 122 Q100 156 140 122"
        stroke={fg}
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M30 40 Q45 10 62 34 Q70 48 52 56 Q34 62 30 40Z"
        fill={fg}
        opacity="0.7"
      />
    </svg>
  );
}
