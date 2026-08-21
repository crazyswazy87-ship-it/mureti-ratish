import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Can from "./Can";
import { flavors } from "../data/flavors";
import "./Showcase.css";

gsap.registerPlugin(ScrollTrigger);

const podiumHeights = [96, 46, 150, 118];

export default function Showcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  // Only showcase products that are in your flavors list
  const showcaseFlavors = flavors.filter((flavor) =>
    [1, 2, 5, 10].includes(flavor.litres)
  );

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRefs.current,
        { y: 90, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="showcase" id="showcase" ref={sectionRef}>
      <div className="showcase__head">
        <span className="showcase__eyebrow">The lineup</span>

        <h2 className="showcase__title">
          Same spirit. Your size.
        </h2>

        <p className="showcase__copy">
          Our Muratina comes in different sizes, keeping the same
          authentic taste while giving you the freedom to choose how
          much you take with you.
        </p>
      </div>

      <div className="showcase__grid">
        {showcaseFlavors.map((flavor, i) => (
          <div
            className="showcase__card"
            key={flavor.id}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
          >
            <div className="showcase__can">
              <Can flavor={flavor} />
            </div>

            <div
              className="showcase__podium"
              style={{
                height: podiumHeights[i % podiumHeights.length],
              }}
            />

            <h3 className="showcase__name">
              {flavor.name.replace("\n", " ")}
            </h3>

            <p className="showcase__size">
              {flavor.litres}{" "}
              {flavor.litres === 1 ? "Litre" : "Litres"}
            </p>

            <p className="showcase__price">
              KSh {flavor.price.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}