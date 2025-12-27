import "swiper/css";
import { EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { DATA } from "../../data";
import { VideoCard } from "./VideoCardItem";

export const MemorySwiper = () => {
  const initialIndex = Math.floor(DATA.length / 2);

  return (
    <div className="w-full overflow-hidden flex justify-center">
      <Swiper
        modules={[EffectCoverflow]}
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        initialSlide={initialIndex}
        slideToClickedSlide
        watchSlidesProgress
        speed={600}
        updateOnWindowResize
        nested={true}
        coverflowEffect={{
          rotate: 0,
          stretch: -60,
          depth: 120,
          modifier: 1,
          slideShadows: false,
        }}
        breakpoints={{
          768: {
            coverflowEffect: {
              stretch: 10,
              depth: 60,
            },
          },
        }}
        className="!overflow-visible !py-10 w-full"
      >
        {DATA.map((item, index) => (
          <SwiperSlide
            key={item.id}
            className="!w-[260px] md:!w-[430px] !h-[460px] md:!h-[760px] flex items-center justify-center cursor-pointer select-none"
          >
            {({ isActive }) => (
              <div
                className={`w-full h-full flex items-center justify-center transition-all duration-500 will-change-transform ${
                  isActive ? "scale-100 opacity-100" : "scale-85 opacity-70"
                }`}
              >
                <VideoCard
                  item={item}
                  isActive={isActive}
                  index={index}
                  isFirstCard={index === initialIndex}
                />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .swiper { overflow: visible !important; }
        .swiper-slide-active { z-index: 100 !important; }
        .swiper-slide-prev, .swiper-slide-next { z-index: 50 !important; }
        .swiper-slide { 
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
          will-change: transform, opacity;
        }
      `}</style>
    </div>
  );
};
