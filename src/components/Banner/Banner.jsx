import { useRef, useState } from "react";
import { BannerContent } from "./BannerContent";

import IntroducingOverlay from "./IntroducingOverlay.jsx";

 const Banner = () => {
   const containerRef = useRef(null);

   return (
     <section className="relative w-full">
       <div ref={containerRef} className="relative">

           <BannerContent/>
       </div>
       <IntroducingOverlay
           data-id="banner-introducing-overlay"
       />
     </section>
   );
 };
 export default Banner;