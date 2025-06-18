"use client";

const SectionWrapper = ({
  children,
  className = "",
  containerClass = "",
  spacing = "mt-100",
  background = "",
}) => {
  return (
    <section className={`section-box ${spacing} ${background} ${className}`}>
      <div className={`container ${containerClass}`}>
        <div className="row">
          <div className="col-lg-12">{children}</div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper;
