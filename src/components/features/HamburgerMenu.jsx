import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from 'framer-motion'
import { SlMenu } from "react-icons/sl";

function useOutsideClick(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        // Only trigger handler if the click is outside the ref element
        handler(event);
      }
    };
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
}

function HamburgerMenu({ sectionList }) {
  // State: controls whether the menu is open
  const [isOpen, setIsOpen] = useState(false);

  // Close the menu when the Escape key is pressed
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Ref: tracks the component container for outside click detection
  const containerRef = useRef(null);

  // Toggle the menu open/closed
  const handleMenuOpen = () => {
    setIsOpen((prev) => !prev);
    console.log(isOpen)
  };

  // Memoized callback to handle outside clicks (only closes when open)
  const handleOutsideClick = useCallback(() => {
    if (isOpen) handleMenuOpen();
  }, [isOpen]);

  // Attach the outside click listener
  useOutsideClick(containerRef, handleOutsideClick);

  return (
    <div ref={containerRef} className="flex justify-center items-center">
      {/* Start menu icon btn */}
      <button
        onClick={handleMenuOpen}
        className="text-xl md:text-4xl text-[#3b82f6]"
        aria-label="Open menu"
      >
        <SlMenu />
      </button>
      {/* End menu icon btn */}

      {/* Start menu list */}
      <AnimatePresence>
        {isOpen && (
          <motion.div role="menu" 
          className="absolute px-4 md:px-10 flex flex-col top-1/3 right-0 border rounded-2xl rounded-tr-none bg-indigo-950 text-blue-300 border-blue-500/60 group"
          initial={{ clipPath: "inset(0% 0% 100% 100%)" }} // inset(T R B L)
          animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
          exit={{ clipPath: "inset(0% 0% 100% 100%)" }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {sectionList.map((section) => (
              <a
                key={`menu_${section}`}
                className="text-center text-lg md:text-2xl font-bold py-3 md:py-5 border-b last:border-0 group-hover:text-white"
                href={`#${section.toLowerCase()}`}
                role="menuitem"
                onClick={handleMenuOpen}
              >
                {section}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      {/* End menu list */}
    </div>
  );
}

export default HamburgerMenu;
