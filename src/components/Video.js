"use client";
import { useState } from "react";
import Image from "next/image";

const Video = ({ slice }) => {
  const { heading, content, youtube_video_id, thumbnail_image } = slice.primary;

  // Modal state
  const [modal, setModal] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);

  const openModal = () => {
    setModal(!modal);
  };

  const spinner = () => {
    setVideoLoading(!videoLoading);
  };

  return (
    <>
      <style jsx>{`
        .btn-play-video:hover {
          transform: scale(1.1);
          transition: all 0.3s ease;
        }
        .btn-play-video {
          cursor: pointer;
          transition: all 0.3s ease;
        }
      `}</style>

      <section className="section-box mt-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-1 col-sm-1 col-12" />
            <div className="col-lg-10 col-sm-10 col-12 text-center">
              {heading && (
                <h2 className="text-heading-1 color-gray-900 mb-10">
                  {heading}
                </h2>
              )}
              {content && (
                <p className="text-body-lead-large color-gray-600 mt-20">
                  {content}
                </p>
              )}
            </div>
            <div className="col-lg-1 col-sm-1 col-12" />
          </div>
        </div>

        {youtube_video_id && (
          <div className="section-box mt-70">
            <div className="container">
              <div className="row">
                <div className="col-lg-1" />
                <div className="col-lg-10">
                  <div className="box-image">
                    <a
                      className="popup-youtube btn-play-video btn-play-middle"
                      onClick={openModal}
                    ></a>
                    {thumbnail_image?.url ? (
                      <Image
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        className="img-responsive bdrd-16"
                        src={thumbnail_image.url}
                        alt={thumbnail_image.alt || "Video thumbnail"}
                      />
                    ) : (
                      <Image
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        className="img-responsive bdrd-16"
                        src={`https://img.youtube.com/vi/${youtube_video_id}/maxresdefault.jpg`}
                        alt="Video thumbnail"
                      />
                    )}
                  </div>
                </div>
                <div className="col-lg-1" />
              </div>
            </div>
          </div>
        )}
      </section>

      {modal ? (
        <section className="modal__bg" onClick={openModal}>
          <div className="modal__align">
            <div className="modal__content">
              <div className="modal__video-align">
                {videoLoading ? (
                  <div className="modal__spinner">
                    <i className="fi-rr-refresh"></i>
                  </div>
                ) : null}
                <iframe
                  className="modal__video-style"
                  onLoad={spinner}
                  loading="lazy"
                  width="800"
                  height="500"
                  src={`https://www.youtube.com/embed/${youtube_video_id}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default Video;
