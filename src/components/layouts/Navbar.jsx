import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import HamburgerMenu from "../features/HamburgerMenu";
import SectionLink from "../features/SectionList";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const sectionList = ["Home", "About", "Skills", "Projects", "Contact"];

  const isWidth768 = useMediaQuery({ minWidth: 768 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`z-50 sticky top-0 backdrop-blur-sm w-full h-20 md:h-25 lg:h-16 transition-all duration-350
            ${
              scrolled
                ? "bg-[#0B1121]/50 shadow-md backdrop-blur-md"
                : "bg-transparent"
            }`}
    >
      <div className="container-mid h-full flex justify-between">
        <a
          href="#home"
          className="h-full text-xl md:text-4xl lg:text-2xl flex justify-center items-center font-bold bg-linear-to-r from-[#3b82f6] to-[#8b5cf6] bg-clip-text text-transparent"
          aria-label="Go to Home"
          title="Portfolio Home"
        >
          Portfolio
        </a>

        {!isWidth768 ? (
          <HamburgerMenu sectionList={sectionList} />
        ) : (
          <ul className="h-full w-90 flex justify-between">
            {sectionList.map((section) => (
              <SectionLink key={section} section={section} />
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
