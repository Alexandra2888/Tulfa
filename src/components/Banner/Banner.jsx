import AnimatedText from "../AnimatedText/AnimatedText.jsx";

const Banner = () => {
    return (
        <section className="flex flex-col h-screen">
            <div className="relative h-[50vh] w-full overflow-hidden">
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source
                        src="https://res.cloudinary.com/dnpjmrdik/video/upload/v1731228878/tulfa/Banner%20Videos/aerial-video-of-the-sunrise-in-the-dolomites-mount-2023-11-27-05-26-37-utc_zbbeqo.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className="h-[50vh] bg-white p-8">
                <div className="max-w-4xl mx-auto">
                    <div className="inline-block">
                        <AnimatedText/>
                    </div>
                    <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/bfcd057107dbac2d691636e4fa9c417b2b0cbbad8b55f096cfd9357132cc4a94?placeholderIfAbsent=true&apiKey=08393cffc2ee4dbabe58a75a40e60eaf"
                        alt="Yellow L-shaped couch"
                        className="w-full h-auto"
                    />
                </div>
            </div>
        </section>
    );
};

export default Banner;