import  { useEffect, useState } from 'react';

const AnimatedGradientText = () => {
    const [currentGradient, setCurrentGradient] = useState(0);

    const gradientPairs = [
        ['#433E98', '#643B9B'],
        ['#643B9B', '#813599'],
        ['#813599', '#9C2C93'],
        ['#9C2C93', '#B4228A'],
        ['#B4228A', '#C8187D'],
        ['#C8187D', '#E5245C'],
        ['#E5245C', '#ED3749'],
        ['#ED3749', '#F04C33'],
        ['#E5245C', '#ED3749'],
        ['#C8187D', '#E5245C'],
        ['#B4228A', '#C8187D'],
        ['#9C2C93', '#B4228A'],
        ['#813599', '#9C2C93'],
        ['#643B9B','#813599']
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentGradient((prev) => (prev + 1) % gradientPairs.length);
        }, 400);

        return () => clearInterval(interval);
    }, []);

    return (
      <h1
        className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-8"
        style={{
          backgroundImage: `linear-gradient(to right, ${gradientPairs[currentGradient][0]}, ${gradientPairs[currentGradient][1]})`,
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          WebkitTextFillColor: "transparent",
          transition: "all 400ms ease-out",
        }}
      >
        Virtual Product Photography
      </h1>
    );
};

export default AnimatedGradientText;