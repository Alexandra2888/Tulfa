const SizeVars = () => {
  return (
    <div className="relative w-full min-h-[600px] flex flex-col items-center justify-center py-8 bg-[#F0F3FB]">
      <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Large shelf - Back */}
        <div className="relative w-full">
          <span className="absolute left-20 sm:left-4 top-[65%] sm:top-[57%] -translate-y-1/2 font-normal text-[#2A266A] text-3xl xl:text-2xl">
            L
          </span>
          <img
            src="https://res.cloudinary.com/dnpjmrdik/image/upload/v1731232158/tulfa/Size%20Var/6412-brown-storage-cabinet-isolated-on-a-transpar-2023-11-27-05-08-49-utc-Photoroom_jqyomw.png"
            alt="Large shelf"
            className="max-w-6xl sm:w-[90%] xl:w-full mx-auto"
          />
        </div>

        {/* Medium shelf - Middle */}
        <div className="absolute top-[12%] sm:top-[15%] w-full">
          <span className="absolute left-28 sm:left-9 top-[67%] sm:top-[60%] -translate-y-1/2 font-normal text-[#2A266A] text-3xl xl:text-2xl">
            M
          </span>
          <img
            src="https://res.cloudinary.com/dnpjmrdik/image/upload/v1731232158/tulfa/Size%20Var/6412-brown-storage-cabinet-isolated-on-a-transpar-2023-11-27-05-08-49-utc-Photoroom_jqyomw.png"
            alt="Medium shelf"
            className="max-w-5xl sm:w-[80%] xl:w-[85%] ml-14 xl:mx-auto"
          />
        </div>

        {/* Small shelf - Front */}
        <div className="absolute top-[24%] sm:top-[30%] w-full">
          <span className="absolute left-48 sm:left-16 top-[70%] sm:top-[63%] -translate-y-1/2 font-normal text-[#2A266A] text-3xl xl:text-2xl">
            S
          </span>
          <img
            src="https://res.cloudinary.com/dnpjmrdik/image/upload/v1731232158/tulfa/Size%20Var/6412-brown-storage-cabinet-isolated-on-a-transpar-2023-11-27-05-08-49-utc-Photoroom_jqyomw.png"
            alt="Small shelf"
            className="max-w-3xl sm:w-[70%] xl:w-[70%] xl:mx-auto ml-36"
          />
        </div>
      </div>
      <p className="text-center text-base font-normal text-[#2A266A] mt-8">
        Lorem ipsum Dolor Sit Amet
      </p>
    </div>
  );
};

export default SizeVars;
