
import "swiper/css";
import CarouselLayout from "../../layouts/CarousselLayout/CarousselLayout";

import { installationData } from "../../data/data";


const Installation = () => {
  return (
    <CarouselLayout
      title="Lorem Ipsum"
      description="Give your customers a clear view of how your furniture fits into their space with precise dimensions and scale indicators."
      slides={installationData.slides}
    />
  );
};

export default Installation;
