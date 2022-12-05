import React from "react";


const AcordeonDenuncia= ({
  showDescription,
  ariaExpanded,
  fontWeightBold,
  item,
  index,
  onClick,
}) => (
  <div className="faq__question" key={item._id}>
    <dt>
      <button
        aria-expanded={ariaExpanded}
        aria-controls={`faq${index + 1}_desc`}
        data-qa="faq__question-button"
        className={`faq__question-button ${fontWeightBold}`}
        onClick={onClick}
      >
        {item.fecha}
      </button>
    </dt>
    <dd>
      <p
        id={`faq${index + 1}_desc`}
        data-qa="faq__desc"
        className={`faq__desc ${showDescription}`}
      >
        {item.detalles}
      </p>
    </dd>
  </div>
);
export default AcordeonDenuncia;
