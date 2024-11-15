import AnimatedText from "../../atoms/AnimatedText/AnimatedText";

const DescriptionCto2 = () => {
  return (
    <section
      data-testid="cto-description"
      className="h-screen flex flex-col items-center justify-center px-4  max-w-7xl mx-auto"
    >
      <div className="w-full space-y-8">
        <AnimatedText />
        <div className="w-full max-w-3xl mx-auto">
          <img
            src="https://res.cloudinary.com/dnpjmrdik/image/upload/v1731228451/tulfa/Banner%20Videos/modern-scandinavian-yellow-sofa-isolated-over-whit-2023-11-27-05-20-00-utc_kobqbr.jpg"
            alt="Yellow Couch"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default DescriptionCto2;
