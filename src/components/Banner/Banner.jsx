import { useRef, useMemo, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BannerContent } from "./BannerContent";
import { S3_CONFIG } from "../../config/bannerConfig";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { useVideoScroll } from "../../hooks/useVideoScroll";

 const Banner = () => {
   const containerRef = useRef(null);
   const videoRef = useRef(null);
   const [state, setState] = useState({
     hasError: true, 
     showingVideo: true, 
   });

   const {
     currentFrame,
     showIntroducing: imageShowIntroducing,
     animationControls,
   } = useScrollAnimation(
     containerRef,
     S3_CONFIG.totalFrames,
     state.showingVideo
   );

   const { showIntroducing: videoShowIntroducing } = useVideoScroll(
     containerRef,
     videoRef,
     state.showingVideo
   );

   const showIntroducing = state.showingVideo
     ? videoShowIntroducing
     : imageShowIntroducing;

   const contentProps = {
     useFallbackVideo: true, 
     showIntroducing,
     videoProps: {
       videoRef,
       showIntroducing,
       fallbackVideoUrl: S3_CONFIG.fallbackVideoUrl,
     },
     imageProps: {
       currentFrame,
       imageUrls: [],
       showIntroducing,
     },
   };

   return (
     <section className="relative w-full">
       <div ref={containerRef} className="relative">
         <motion.div
           animate={animationControls}
           initial={{ opacity: 1 }} 
           className="scroll-animation"
         >
           <BannerContent
             isLoading={false}
             loadingProps={{
               progress: 100,
               loadedCount: 0,
               totalCount: 0,
               hasError: true,
             }}
             contentProps={contentProps}
           />
         </motion.div>
       </div>
     </section>
   );
 };
 export default Banner;