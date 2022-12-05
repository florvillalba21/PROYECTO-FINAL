import React, { useState } from "react";
import AccordionItem from "./layout/AcordeonDenuncia";

 const Accordion = ({ denuncias }) => {
  const [activeIndex, setActiveIndex] = useState(1);

  const denuncia = denuncias.map((item, index) => {
    const showDescription = index === activeIndex ? "show-description" : "";
    const fontWeightBold = index === activeIndex ? "font-weight-bold" : "";
    const ariaExpanded = index === activeIndex ? "true" : "false";
    return (
      <AccordionItem
        showDescription={showDescription}
        fontWeightBold={fontWeightBold}
        ariaExpanded={ariaExpanded}
        item={item}
        index={index}
        onClick={() => {
          setActiveIndex(index);
        }}
      />
    );
  });

  return (
    <div className="faq">
      <dl className="faq__list">{denuncia}</dl>
    </div>
  );
};
export default Accordion;
