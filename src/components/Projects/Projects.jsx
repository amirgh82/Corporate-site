import React, { useEffect, useState } from "react";
import "./Projects.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode } from "swiper/modules";
export default function Projects() {
  const [slidesPerView, setSlidesPerView] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setSlidesPerView(4);
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 576) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="projects" id="projects">
      <h4 className="section-title">پروژه های کدینو</h4>
      <span className="section-title-en">Codino projects</span>
      <div className="swiper-container">
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={30}
          freeMode={true}
          modules={[FreeMode]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div class="projects-card">
              <img src="/src/assets/images/background2.jpg" alt="" />
              <h5>پروژه فروشگاهی</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="projects-card">
              <img src="/src/assets/images/background4.jpg" alt="" />
              <h5>پروژه فروشگاهی</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="projects-card">
              <img src="/src/assets/images/background4.jpg" alt="" />
              <h5>پروژه فروشگاهی</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="projects-card">
              <img src="/src/assets/images/background2.jpg" alt="" />
              <h5>پروژه فروشگاهی</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="projects-card">
              <img src="/src/assets/images/background2.jpg" alt="" />
              <h5>پروژه فروشگاهی</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="projects-card">
              <img src="/src/assets/images/background2.jpg" alt="" />
              <h5>پروژه فروشگاهی</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="projects-card">
              <img src="/src/assets/images/background3.jpg" alt="" />
              <h5>پروژه فروشگاهی</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="projects-card">
              <img src="/src/assets/images/background3.jpg" alt="" />
              <h5>پروژه فروشگاهی</h5>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
