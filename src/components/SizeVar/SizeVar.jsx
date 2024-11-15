const SizeVars = () => {
  return (
    <section
      data-testid="size-vars-container"
      className="w-full flex flex-col items-center justify-end sm:justify-center bg-[#F0F3FB] overflow-hidden"
    >
      <div
        data-testid="size-vars-content"
        className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Large shelf - Back */}
        <div
          data-testid="large-shelf-container"
          className="relative w-full translate-y-1/4 sm:translate-y-0"
        >
          <span
            data-testid="large-shelf-label"
            className="absolute left-16 sm:left-4 top-[60%] sm:top-[57%] -translate-y-1/2 font-normal text-[#2A266A] text-3xl xl:text-2xl"
          >
            L
          </span>
          <img
            data-testid="large-shelf-image"
            src="https://res.cloudinary.com/dnpjmrdik/image/upload/v1731232158/tulfa/Size%20Var/6412-brown-storage-cabinet-isolated-on-a-transpar-2023-11-27-05-08-49-utc-Photoroom_jqyomw.png"
            alt="Large shelf"
            className="max-w-6xl sm:w-[90%] xl:w-full mx-auto"
          />
        </div>

        {/* Medium shelf - Middle */}
        <div
          data-testid="medium-shelf-container"
          className="absolute top-[12%] sm:top-[15%] w-full translate-y-1/4 sm:translate-y-0"
        >
          <span
            data-testid="medium-shelf-label"
            className="absolute left-20 sm:left-9 top-[67%] sm:top-[60%] -translate-y-1/2 font-normal text-[#2A266A] text-3xl xl:text-2xl"
          >
            M
          </span>
          <img
            data-testid="medium-shelf-image"
            src="https://res.cloudinary.com/dnpjmrdik/image/upload/v1731232158/tulfa/Size%20Var/6412-brown-storage-cabinet-isolated-on-a-transpar-2023-11-27-05-08-49-utc-Photoroom_jqyomw.png"
            alt="Medium shelf"
            className="max-w-5xl sm:w-[80%] xl:w-[85%] ml-14 xl:mx-auto"
          />
        </div>

        {/* Small shelf - Front */}
        <div
          data-testid="small-shelf-container"
          className="absolute top-[24%] sm:top-[30%] w-full translate-y-1/4 sm:translate-y-0"
        >
          <span
            data-testid="small-shelf-label"
            className="absolute left-36 sm:left-16 top-[85%] sm:top-[63%] -translate-y-1/2 font-normal text-[#2A266A] text-3xl xl:text-2xl"
          >
            S
          </span>
          <img
            data-testid="small-shelf-image"
            src="https://res.cloudinary.com/dnpjmrdik/image/upload/v1731232158/tulfa/Size%20Var/6412-brown-storage-cabinet-isolated-on-a-transpar-2023-11-27-05-08-49-utc-Photoroom_jqyomw.png"
            alt="Small shelf"
            className="max-w-3xl sm:w-[70%] xl:w-[70%] xl:mx-auto ml-36"
          />
        </div>
      </div>
      <p
        data-testid="size-vars-description"
        className="text-center text-base font-normal text-[#2A266A] mt-8 mb-4 sm:mb-0 xl:mb-12"
      >
        Lorem ipsum Dolor Sit Amet
      </p>
    </section>
  );
};

export default SizeVars;
