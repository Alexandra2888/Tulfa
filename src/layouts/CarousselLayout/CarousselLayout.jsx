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
      <div className="w-full flex flex-col">
        {/* Title Section */}
        <div className="w-full py-16 xl:py-36 flex justify-center items-center">
          <Title text={title} />
        </div>

        {/* Carousel Section - Full Width */}
        <div className="w-full relative">
          <div className="w-full aspect-[4/3] relative overflow-hidden">
            <Swiper
              direction="vertical"
              onSwiper={setSwiper}
              speed={500}
              onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
              className="h-full w-full"
              style={{ height: "100%" }}
              loop={true}
            >
              {slides.map((slide) => (
                <SwiperSlide key={slide.id} className="w-full h-full">
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Buttons */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-10">
              <Button
                onClick={prevSlide}
                className="border-2 border-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-all hover:bg-white/20 active:bg-white/30 touch-manipulation"
                aria-label="Previous slide"
              >
                <ChevronUp className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </Button>
              <Button
                onClick={nextSlide}
                className="border-2 border-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-all hover:bg-white/20 active:bg-white/30 touch-manipulation"
                aria-label="Next slide"
              >
                <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </Button>
            </div>

            {/* Slide Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-gray-900/75 text-white px-4 py-2 rounded-full text-sm z-10">
              {currentSlide + 1} / {slides.length}
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="w-full my-36 md:my-18 xl:my-16">
          <Description text={description} />
        </div>
      </div>
    </section>
  );
};

export default CarouselLayout;
