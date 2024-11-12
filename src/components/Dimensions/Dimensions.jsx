import "swiper/css";
import CarouselLayout from "../../layouts/CarousselLayout/CarousselLayout";

import { dimensionsData } from "../../data/data";

const Dimensions = () => {
  return (
    <CarouselLayout
      title="Lorem Ipsum"
      description="Give your customers a clear view of how your furniture fits into their space with precise dimensions and scale indicators."
      slides={dimensionsData.slides}
    />
  );
};

export default Dimensions;
