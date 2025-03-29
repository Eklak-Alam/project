"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "motion/react";

export const ContainerScroll = ({
  titleComponent,
  children
}) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="h-[50rem] md:h-[60rem] flex items-center justify-center relative p-2 md:p-20"
      ref={containerRef}>
      <div
        className="py-10 md:py-20 w-full relative"
        style={{
          perspective: "1000px",
        }}>
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }) => {
  return (
    <motion.div
      style={{
        translateY: translate, // Scroll effect
      }}
      className="absolute -top-10 md:-top-10 left-1/2 transform -translate-x-1/2 
                 max-w-5xl mx-auto text-center"
    >
      <div className="text-2xl md:text-6xl font-semibold">{titleComponent}</div>
    </motion.div>
  );
};


export const Card = ({ rotate, scale, children }) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 20px rgba(255, 0, 0, 0.5), 0 0 40px rgba(255, 0, 0, 0.3), 0 0 60px rgba(255, 0, 0, 0.2)",
        transition: "box-shadow 0.4s ease-in-out, transform 0.4s ease-in-out",
      }}
      whileHover={{
        scale: 1.05, // Slightly increase size on hover
        boxShadow:
          "0 0 30px rgba(255, 0, 0, 0.7), 0 0 60px rgba(255, 0, 0, 0.5), 0 0 90px rgba(255, 0, 0, 0.5)", // More intense red glow on hover
      }}
      className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-2 md:p-6 
                 bg-[#222222] rounded-[30px] shadow-2xl transition-all duration-500"
    >
      <div
        className="h-full w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl md:p-4"
      >
        {children}
      </div>
    </motion.div>
  );
};
