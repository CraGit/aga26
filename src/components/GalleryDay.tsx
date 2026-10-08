"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";

interface GalleryDayProps {
  slice: Content.GalleryDaySlice;
}

const INITIAL_VISIBLE = 12;
const LOAD_MORE_STEP = 12;

const GalleryDay = ({ slice }: GalleryDayProps) => {
  const { heading, photos } = slice.primary;
  const images = (photos || []).filter((item) => isFilled.image(item.image));
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef(0);

  const closeLightbox = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null || images.length === 0) return current;
      return (current - 1 + images.length) % images.length;
    });
  }, [images.length]);
  const showNext = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null || images.length === 0) return current;
      return (current + 1) % images.length;
    });
  }, [images.length]);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, closeLightbox, showPrev, showNext]);

  if (!heading && images.length === 0) return null;

  const visibleImages = images.slice(0, visibleCount);
  const hasMore = visibleCount < images.length;
  const activeImage = activeIndex !== null ? images[activeIndex]?.image : null;

  return (
    <section className="section-box gallery-day">
      <div className="container">
        {heading && (
          <h2 className="text-heading-3 color-green-900 mb-30">{heading}</h2>
        )}

        {images.length > 0 && (
          <>
            <ul className="gallery-grid">
              {visibleImages.map((item, index) => (
                <li key={item.image.id || index} className="gallery-grid__item">
                  <button
                    type="button"
                    className="gallery-grid__button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Open photo ${index + 1}`}
                  >
                    <PrismicNextImage
                      field={item.image}
                      imgixParams={{
                        auto: ["format", "compress"],
                        fit: "crop",
                        w: 480,
                        h: 360,
                        q: 70,
                      }}
                      sizes="(max-width: 767px) 50vw, (max-width: 991px) 33vw, 25vw"
                      loading={index < 4 ? "eager" : "lazy"}
                    />
                  </button>
                </li>
              ))}
            </ul>

            {hasMore && (
              <div className="gallery-more">
                <button
                  type="button"
                  className="btn btn-square hover-up gallery-more__button"
                  onClick={() =>
                    setVisibleCount((count) =>
                      Math.min(count + LOAD_MORE_STEP, images.length),
                    )
                  }
                >
                  View more ({images.length - visibleCount} left)
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {activeIndex !== null && activeImage && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={heading || "Photo gallery"}
          onClick={closeLightbox}
        >
          <button
            type="button"
            className="gallery-lightbox__close"
            onClick={closeLightbox}
            aria-label="Close gallery"
          >
            ×
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                className="gallery-lightbox__nav gallery-lightbox__nav--prev"
                onClick={(event) => {
                  event.stopPropagation();
                  showPrev();
                }}
                aria-label="Previous photo"
              >
                ‹
              </button>
              <button
                type="button"
                className="gallery-lightbox__nav gallery-lightbox__nav--next"
                onClick={(event) => {
                  event.stopPropagation();
                  showNext();
                }}
                aria-label="Next photo"
              >
                ›
              </button>
            </>
          )}

          <div
            className="gallery-lightbox__stage"
            onClick={(event) => event.stopPropagation()}
            onTouchStart={(event) => {
              touchStartX.current = event.touches[0]?.clientX ?? null;
              touchDeltaX.current = 0;
            }}
            onTouchMove={(event) => {
              if (touchStartX.current === null) return;
              touchDeltaX.current =
                (event.touches[0]?.clientX ?? 0) - touchStartX.current;
            }}
            onTouchEnd={() => {
              if (Math.abs(touchDeltaX.current) > 50) {
                if (touchDeltaX.current > 0) showPrev();
                else showNext();
              }
              touchStartX.current = null;
              touchDeltaX.current = 0;
            }}
          >
            <PrismicNextImage
              field={activeImage}
              imgixParams={{ auto: ["format", "compress"], w: 1600, q: 80 }}
              sizes="100vw"
              priority
            />
            <p className="gallery-lightbox__counter">
              {activeIndex + 1} / {images.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default GalleryDay;
