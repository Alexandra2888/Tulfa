import Title from "../../atoms/Title/Title.jsx";

const Callout = () => {
    return (
        <section className="w-full min-h-screen flex flex-col" data-testid="callout-section">
            <div className="w-full flex justify-center py-24 xl:py-28">
                <Title text="Lorem Ipsum"/>
            </div>
            <div className="w-full h-[calc(100vh-8rem)]" data-testid="video-container">
                <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    data-testid="callout-video"
                >
                    <source
                        data-testid="video-source"
                        src="https://res.cloudinary.com/dnpjmrdik/video/upload/v1731328815/tulfa/Callout/interior-design-moodboard-with-modern-living-room-2023-12-01-01-15-03-utc_gsjstz.mp4"
                        type="video/mp4"
                    />
                </video>
            </div>
        </section>
    );
};

export default Callout;
