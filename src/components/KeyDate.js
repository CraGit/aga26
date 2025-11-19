import { PrismicRichText } from "@prismicio/react";
import rtfComponents from "@/utils/RichText";

const KeyDate = ({ date, content, index = 0 }) => {
  // Make index 0 (first item) appear on the right and index 1 on the left
  const sideClass = index % 2 === 0 ? "right" : "left";

  return (
    <div className={`key-date-item timeline-item ${sideClass}`}>
      <div className="timeline-marker" aria-hidden="true"></div>

      <div className="timeline-content">
        <div className="key-date-value text-heading-4 color-green-900">
          {date}
        </div>
        <div className="key-date-content text-body-text color-gray-600 mt-10">
          <PrismicRichText field={content} components={rtfComponents} />
        </div>
      </div>
    </div>
  );
};

export default KeyDate;
