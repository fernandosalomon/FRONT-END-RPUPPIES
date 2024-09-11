import { useEffect, useRef } from "react";
import { register } from "swiper/element";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "../css/SwiperC.css";

export const Swiper = (props) => {
  const swiperRef = useRef(null);
  const { children, ...rest } = props;

  useEffect(() => {
    register();

    const params = {
      ...rest,
    };

    Object.assign(swiperRef.current, params);

    swiperRef.current.initialize();
  }, []);

  return (
    <>
      <div className="swiper--container">
        <div className="swiper-pagination"></div>
        <swiper-container init="false" ref={swiperRef}>
          {children}
        </swiper-container>
        <div className="d-flex justify-content-center z-3">
          <button className="prev-btn-swiper">
            <i class="bi bi-chevron-left"></i>
          </button>
          <button className="next-btn-swiper">
            <i class="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export const SwiperSlide = (props) => {
  const { children, ...rest } = props;

  return <swiper-slide {...rest}>{children}</swiper-slide>;
};
