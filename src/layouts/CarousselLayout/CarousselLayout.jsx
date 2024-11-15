import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronUp, ChevronDown } from "lucide-react";
import "swiper/css";
import Title from "../../atoms/Title/Title";
import Description from "../../atoms/Description/Description";
import Button from "../../atoms/Button/Button";

const CarouselLayout = ({ title, description, slides }) => {
  const [swiper, setSwiper] = React.useState(null);
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = () => swiper?.slideNext();
  const prevSlide = () => swiper?.slidePrev();

  return (
      <section className="w-full bg-white">
        {/* Title Section in Container */}
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="w-full py-12 lg:py-24 flex justify-center items-center">
            <Title text={title} className="text-4xl lg:text-5xl font-bold text-center" />
          </div>
        </div>

        {/* Full-width Carousel Section */}
        <div className="w-full relative">
          <div className="w-full aspect-[16/9] relative">
            <Swiper
                direction="vertical"
                onSwiper={setSwiper}
                speed={500}
                onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
                className="h-full w-full"
                loop={true}
            >
              {slides.map((slide) => (
                  <SwiperSlide key={slide.id} className="w-full h-full">
                    <div className="relative w-full h-full">
                      <img
                          src={slide.image}
                          alt={slide.alt}
                          className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/10" />
                    </div>
                  </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Buttons */}
            <div className="absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-10">
              <Button
                  onClick={prevSlide}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full w-12 h-12 flex items-center justify-center transition-all hover:bg-white/30 active:bg-white/40"
                  aria-label="Previous slide"
              >
                <ChevronUp className="w-6 h-6 text-white" />
              </Button>
              <Button
                  onClick={nextSlide}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full w-12 h-12 flex items-center justify-center transition-all hover:bg-white/30 active:bg-white/40"
                  aria-label="Next slide"
              >
                <ChevronDown className="w-6 h-6 text-white" />
              </Button>
            </div>

            {/* Slide Counter */}
            <div className="absolute bottom-6 left-6 lg:left-12 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm z-10">
              {currentSlide + 1} / {slides.length}
            </div>
          </div>
        </div>

        {/* Description Section in Container */}
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="w-full mx-auto px-4 xl:px-0">
            <Description
                text="Give your customers a clear view of how your furniture fits into their space with precise dimensions and scale indicators."
            />
          </div>
        </div>
      </section>
  );
};

export default CarouselLayout;