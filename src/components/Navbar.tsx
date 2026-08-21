import "./Navbar.css";

interface NavbarProps {
  tone: "light" | "dark";
}

export default function Navbar({ tone }: NavbarProps) {
  return (
    <header className={`nav nav--${tone}`}>
      <a className="nav__link" href="#about">
        About
      </a>
      <div className="nav__rule" aria-hidden="true" />
      <a className="nav__logo" href="#top" aria-label="Drunk and Drown, home">
        <svg viewBox="0 0 90 90" width="46" height="46">
          <circle
            cx="45"
            cy="45"
            r="42"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeDasharray="2 4"
          />
          <text
            x="45"
            y="30"
            textAnchor="middle"
            fontFamily="Poppins"
            fontSize="7.5"
            fontWeight={600}
            fill="currentColor"
            letterSpacing="1"
          >
              MURETI
          </text>
          <circle cx="34" cy="46" r="3.4" fill="currentColor" />
          <circle cx="56" cy="46" r="3.4" fill="currentColor" />
          <path
            d="M32 58 Q45 68 58 58"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <text
            x="45"
            y="72"
            textAnchor="middle"
            fontFamily="Poppins"
            fontSize="7.5"
            fontWeight={600}
            fill="currentColor"
            letterSpacing="1"
          >
            RATISH
          </text>
        </svg>
      </a>
      <div className="nav__rule" aria-hidden="true" />
      <a className="nav__link" href="#cart">
        Cart (0)
      </a>
    </header>
  );
}
