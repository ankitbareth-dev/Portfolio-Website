import { useCallback } from "react";

export const useSmoothScroll = () => {
  const scrollToSection = useCallback((e, callback) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href");

    if (targetId === "#home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }

    if (callback) {
      callback();
    }
  }, []);

  return { scrollToSection };
};
