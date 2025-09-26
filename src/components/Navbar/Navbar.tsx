import { useState, useEffect, useRef } from "react";
import "./Navbar.css"; // Import the CSS above

export default function Navbar() {
  const navRef = useRef<HTMLDivElement | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(false);
  const threshold = 50;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold && !scrolled) {
        setScrolled(true);
        requestAnimationFrame(() => setVisible(true));
      } else if (window.scrollY <= threshold && scrolled) {
        setVisible(false);
        // Only call addEventListener when navRef.current is not null
        if (navRef.current) {
          navRef.current.addEventListener(
            "transitionend",
            () => setScrolled(false),
            { once: true }
          );
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  // Compute class names
  const classNames = ["navbar"];
  if (scrolled) classNames.push("scrolled");
  if (visible) classNames.push("show");

  return (
    <nav ref={navRef} className={classNames.join(" ")}>
      <div className="logo">
        <a href="/">MyBrand</a>
      </div>
      <div className="menu">
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
