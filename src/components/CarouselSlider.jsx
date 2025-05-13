import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// CarouselLogos.astro
import agn from "../assets/logosCarousel2/agn.png";
import asea from "../assets/logosCarousel2/asea.png";
import basf from "../assets/logosCarousel2/basf.png";
import capufe from "../assets/logosCarousel2/capufe.png";
import cardio from "../assets/logosCarousel2/cardio.png";
import consar from "../assets/logosCarousel2/consar.png";
import consorcio from "../assets/logosCarousel2/consorcio.png";
import dhl from "../assets/logosCarousel2/dhl.png";
import infonavit from "../assets/logosCarousel2/infonavit.png";
import mexarrend from "../assets/logosCarousel2/mexarrend.png";
import nissan from "../assets/logosCarousel2/nissan.png";
import procuraduria from "../assets/logosCarousel2/procuraduria.png";
import profeco from "../assets/logosCarousel2/profeco.png";
import profepa from "../assets/logosCarousel2/profepa.png";
import saltillo from "../assets/logosCarousel2/saltillo.png";
import uni from "../assets/logosCarousel2/uni.png";

const logos = [
  agn.src,
  asea.src,
  basf.src,
  capufe.src,
  cardio.src,
  consar.src,
  consorcio.src,
  dhl.src,
  infonavit.src,
  mexarrend.src,
  nissan.src,
  procuraduria.src,
  profeco.src,
  profepa.src,
  saltillo.src,
  uni.src,
];

export default function ReactCarousel() {
  return (
    <div style={{ width: "100%", maxWidth: "600px", margin: "0 auto" }}>
      <Swiper
        modules={[Autoplay]} // Quitamos Pagination
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        // pagination eliminado
      >
        {logos.map((src, i) => (
          <SwiperSlide key={i}>
            <img
              src={src}
              alt={`logo-${i}`}
              style={{ width: "100%", height: "auto", objectFit: "contain" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
