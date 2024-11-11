
import "swiper/css";
import CarouselLayout from "../../layouts/CarousselLayout/CarousselLayout";


const installationData = {
  slides: [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dnpjmrdik/image/upload/v1731231754/tulfa/Installation/happy-couple-carrying-furniture-into-their-new-apa-2023-11-27-05-33-12-utc_vgzpf3.jpg",
      title: "Living Room Setup",
      alt: "Modern living room furniture installation",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dnpjmrdik/image/upload/v1731231905/tulfa/Installation/male-carpenter-making-wooden-designer-furniture-fo-2023-11-27-05-07-47-utc_f6jcu6.jpg",
      title: "Bedroom Collection",
      alt: "Contemporary bedroom set",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dnpjmrdik/image/upload/v1731231949/tulfa/Installation/male-carpenter-making-wooden-designer-furniture-fo-2023-11-27-05-12-13-utc_ylckp8.jpg",
      title: "Office Space",
      alt: "Professional office furniture layout",
    },
    {
      id: 4,
      image:
        "https://res.cloudinary.com/dnpjmrdik/image/upload/v1731231982/tulfa/Installation/male-carpenter-making-wooden-designer-furniture-fo-2023-11-27-05-12-45-utc_yb1znh.jpg",
      title: "Office Space",
      alt: "Professional office furniture layout",
    },
    {
      id: 5,
      image:
        "https://res.cloudinary.com/dnpjmrdik/image/upload/v1731232010/tulfa/Installation/young-man-in-a-furniture-factory-2023-11-27-05-26-18-utc_rlvcx0.jpg",
      title: "Office Space",
      alt: "Professional office furniture layout",
    },
    {
      id: 6,
      image:
        "https://res.cloudinary.com/dnpjmrdik/image/upload/v1731231740/tulfa/Installation/closeup-professional-carpenter-hold-electric-circu-2024-01-04-21-15-19-utc_bf78o6.jpg",
      title: "Office Space",
      alt: "Professional office furniture layout",
    },
  ],
};

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
