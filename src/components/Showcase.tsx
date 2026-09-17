import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Can from "./Can";
import { flavors, type Flavor } from "../data/flavors";
import "./Showcase.css";

gsap.registerPlugin(ScrollTrigger);

const podiumHeights = [96, 46, 150, 118, 80];

export default function Showcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  const [selectedFlavor, setSelectedFlavor] =
    useState<Flavor | null>(null);

  /*
   * ==========================================
   * PRODUCTS TO SHOW
   * ==========================================
   */
  const showcaseFlavors = flavors.filter((flavor) =>
    [1, 2, 5, 10, 20].includes(flavor.litres)
  );

  /*
   * ==========================================
   * GSAP SHOWCASE ANIMATION
   * ==========================================
   */
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRefs.current,
        {
          y: 90,
          opacity: 0,
        },
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

    return () => {
      ctx.revert();
    };
  }, []);

  /*
   * ==========================================
   * LOCK PAGE SCROLL WHEN MODAL IS OPEN
   * ==========================================
   */
  useEffect(() => {
    if (selectedFlavor) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedFlavor]);

  /*
   * ==========================================
   * ESCAPE KEY CLOSES MODAL
   * ==========================================
   */
  useEffect(() => {
    if (!selectedFlavor) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedFlavor(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedFlavor]);

  /*
   * ==========================================
   * PRODUCT CLICK
   * ==========================================
   */
  const handleProductClick = (flavor: Flavor) => {
    setSelectedFlavor(flavor);
  };

  /*
   * ==========================================
   * CLOSE MODAL
   * ==========================================
   */
  const closeModal = () => {
    setSelectedFlavor(null);
  };

  /*
   * ==========================================
   * WAITLIST
   * ==========================================
   */
  const handleJoinWaitlist = () => {
    if (!selectedFlavor) {
      return;
    }

    console.log("Joining waitlist:", {
      id: selectedFlavor.id,
      name: selectedFlavor.name,
      litres: selectedFlavor.litres,
    });

    /*
     * Connect your waitlist form/Appwrite/WhatsApp
     * here later.
     */
  };

  /*
   * ==========================================
   * IN-STOCK ACTION
   * ==========================================
   */
  const handleOrder = () => {
    if (!selectedFlavor) {
      return;
    }

    console.log("Ordering:", selectedFlavor);

    /*
     * Connect your ordering/payment system here.
     */
  };

  return (
    <>
      <section
        className="showcase"
        id="showcase"
        ref={sectionRef}
      >
        {/* =====================================
            HEADER
        ====================================== */}

        <div className="showcase__head">
          <span className="showcase__eyebrow">
            The lineup
          </span>

          <h2 className="showcase__title">
            Same spirit. Your size.
          </h2>

          <p className="showcase__copy">
            Our Muratina comes in different sizes, keeping the
            same authentic taste while giving you the freedom
            to choose how much you take with you.
          </p>
        </div>

        {/* =====================================
            PRODUCT GRID
        ====================================== */}

        <div className="showcase__grid">
          {showcaseFlavors.map((flavor, i) => (
            <div
              className={`showcase__card ${
                flavor.inStock
                  ? "showcase__card--available"
                  : "showcase__card--soldout"
              }`}
              key={flavor.id}
              ref={(element) => {
                cardRefs.current[i] = element;
              }}
              role="button"
              tabIndex={0}
              aria-label={`View ${flavor.litres} litre ${flavor.name.replace(
                "\n",
                " "
              )}`}
              onClick={() => handleProductClick(flavor)}
              onKeyDown={(event) => {
                if (
                  event.key === "Enter" ||
                  event.key === " "
                ) {
                  event.preventDefault();
                  handleProductClick(flavor);
                }
              }}
            >
              {/* Product */}
              <div className="showcase__can">
                <Can flavor={flavor} />
              </div>

              {/* Podium */}
              <div
                className="showcase__podium"
                style={{
                  height:
                    podiumHeights[
                      i % podiumHeights.length
                    ],
                }}
              />

              {/* Name */}
              <h3 className="showcase__name">
                {flavor.name.replace("\n", " ")}
              </h3>

              {/* Size */}
              <p className="showcase__size">
                {flavor.litres}{" "}
                {flavor.litres === 1
                  ? "Litre"
                  : "Litres"}
              </p>

              {/* Price */}
              <p className="showcase__price">
                KSh {flavor.price.toLocaleString()}
              </p>

              {/* =================================
                  STOCK BADGE
              ================================== */}

              <span
                className={`showcase__stock ${
                  flavor.inStock
                    ? "showcase__stock--available"
                    : "showcase__stock--unavailable"
                }`}
              >
                <span className="showcase__stock-dot" />

                {flavor.inStock
                  ? "In stock"
                  : "Out of stock"}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================
          PRODUCT MODAL
      ========================================= */}

      {selectedFlavor && (
        <div
          className="waitlist-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="product-modal-title"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              closeModal();
            }
          }}
        >
          <div className="waitlist-modal__content">

            {/* Close */}
            <button
              type="button"
              className="waitlist-modal__close"
              onClick={closeModal}
              aria-label="Close"
            >
              ×
            </button>

            {/* =================================
                ICON
            ================================== */}

            <div
              className={`waitlist-modal__icon ${
                selectedFlavor.inStock
                  ? "waitlist-modal__icon--available"
                  : "waitlist-modal__icon--unavailable"
              }`}
            >
              {selectedFlavor.inStock ? "✓" : "!"}
            </div>

            {/* =================================
                EYEBROW
            ================================== */}

            <span className="waitlist-modal__eyebrow">
              {selectedFlavor.inStock
                ? "Available now"
                : "Currently unavailable"}
            </span>

            {/* =================================
                TITLE
            ================================== */}

            <h2
              className="waitlist-modal__title"
              id="product-modal-title"
            >
              {selectedFlavor.inStock
                ? "Ready to order"
                : "Out of stock"}
            </h2>

            {/* Product */}
            <p className="waitlist-modal__size">
              {selectedFlavor.name.replace("\n", " ")}
              {" · "}
              {selectedFlavor.litres}{" "}
              {selectedFlavor.litres === 1
                ? "Litre"
                : "Litres"}
            </p>

            {/* =================================
                PRICE
            ================================== */}

            <p className="waitlist-modal__price">
              KSh {selectedFlavor.price.toLocaleString()}
            </p>

            {/* =================================
                DESCRIPTION
            ================================== */}

            <p className="waitlist-modal__copy">
              {selectedFlavor.inStock
                ? "This size is currently available. You can go ahead and place your order."
                : "This size is currently out of stock. Join our waitlist and we'll let you know as soon as it's available again."}
            </p>

            {/* =================================
                ACTION
            ================================== */}

            {selectedFlavor.inStock ? (
              <button
                type="button"
                className="waitlist-modal__button"
                onClick={handleOrder}
              >
                Order Now
              </button>
            ) : (
              <button
                type="button"
                className="waitlist-modal__button"
                onClick={handleJoinWaitlist}
              >
                Join the Waitlist
              </button>
            )}

            {/* Secondary */}
            <button
              type="button"
              className="waitlist-modal__secondary"
              onClick={closeModal}
            >
              Maybe later
            </button>
          </div>
        </div>
      )}
    </>
  );
}
