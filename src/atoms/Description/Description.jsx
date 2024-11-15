const Description = ({ text, className }) => {
  const defaultStyles =
      "text-center text-[#2A266A] mx-auto font-normal leading-relaxed px-12 xl:px-36 py-24 md:py-16 xl:py-24 xl:max-w-5xl text-[1.05881rem]";

  return <p className={className || defaultStyles}>{text}</p>;
};

export default Description;