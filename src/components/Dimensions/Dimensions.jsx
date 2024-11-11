import "swiper/css";
import CarouselLayout from "../../layouts/CarousselLayout/CarousselLayout";

const dimensionsData = {
  slides: [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dnpjmrdik/image/upload/v1731231441/tulfa/Dimension/empty-space-on-minimal-beautiful-dining-table-in-m-2023-11-27-05-21-36-utc_mfeisk.jpg",
      title: "Living Room Setup",
      alt: "Modern living room furniture installation",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dnpjmrdik/image/upload/v1731231494/tulfa/Dimension/interior-design-of-neutral-living-room-2024-10-18-05-17-30-utc_cxtd7c.jpg",
      title: "Bedroom Collection",
      alt: "Contemporary bedroom set",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dnpjmrdik/image/upload/v1731231509/tulfa/Dimension/living-room-interior-with-dining-table-cupboard-s-2023-11-27-05-19-28-utc_sgoegb.jpg",
      title: "Office Space",
      alt: "Professional office furniture layout",
    },
    {
      id: 4,
      image:
        "https://res.cloudinary.com/dnpjmrdik/image/upload/v1731231526/tulfa/Dimension/minimal-living-room-interior-design-2023-11-27-05-09-40-utc_abrid5.jpg",
      title: "Office Space",
      alt: "Professional office furniture layout",
    },
    {
      id: 5,
      image:
        "https://res.cloudinary.com/dnpjmrdik/image/upload/v1731231602/tulfa/Dimension/view-of-living-room-in-minimal-style-with-yellow-s-2023-11-27-05-26-51-utc_cblyg5.jpg",
      title: "Office Space",
      alt: "Professional office furniture layout",
    },
    {
      id: 6,
      image:
        "https://res.cloudinary.com/dnpjmrdik/image/upload/v1731231635/tulfa/Dimension/wooden-furniture-in-minimal-dining-room-interior-d-2023-11-27-05-20-43-utc_ggd2c0.jpg",
      title: "Office Space",
      alt: "Professional office furniture layout",
    },
  ],
};

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
