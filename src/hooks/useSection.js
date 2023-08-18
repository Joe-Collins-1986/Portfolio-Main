import { useEffect, useState } from "react";

export const useSection = (sectionIds) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const activeClass = "sectionAnimate";

    const observer = new IntersectionObserver(
      (sections) => {
        sections.forEach((section) => {
          if (section.isIntersecting) {
            setActiveSection(section.target.id);
          }
        });
      },
      { rootMargin: "0px 0px -50% 0px" }
    );

    sectionIds.forEach((id) => {
      observer.observe(document.querySelector(`#${id}`));
    });

    return () => {
      sectionIds.forEach((id) => {
        observer.unobserve(document.querySelector(`#${id}`));
      });
    };
  }, [sectionIds]);

  return activeSection;
};
