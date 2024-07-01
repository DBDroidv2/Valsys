import React, { useState, useEffect } from "react";

function Island() {
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShrink(true);
      } else {
        setShrink(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="sticky top-3 z-50 flex justify-center items-center">
      <nav
        className={`w-full bg-black p-3 flex justify-center items-center rounded-md mx-3 md:mx-3 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-25 transition-all duration-300 ${
          shrink ? "w-3/12 md:w-1/12" : ""
        }`}
      >
        <img src="../../../public/logo.png" alt="" className="w-10" />
      </nav>
    </div>
  );
}

export default Island;
