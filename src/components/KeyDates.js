"use client";
import SectionWrapper from "./layout/SectionWrapper";
import KeyDate from "./KeyDate";

const KeyDates = ({ slice }) => {
  const { heading } = slice.primary;
  const items = slice.items || [];

  return (
    <SectionWrapper>
      <div className="key-dates">
        {heading && (
          <div className="text-center mb-40">
            <h2 className="text-heading-1 color-gray-900">{heading}</h2>
          </div>
        )}

        <div className="key-dates-list timeline-list">
          {items.map((item, idx) => (
            <div className="timeline-row" key={idx}>
              <KeyDate index={idx} date={item.date} content={item.content} />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default KeyDates;
