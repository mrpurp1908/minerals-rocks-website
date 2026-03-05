import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function ParallaxBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Create different parallax speeds for different layers
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, 150]);
  const y3 = useTransform(scrollY, [0, 1000], [0, 100]);
  const y4 = useTransform(scrollY, [0, 1000], [0, 300]);
  const y5 = useTransform(scrollY, [0, 1000], [0, 250]);
  const y6 = useTransform(scrollY, [0, 1000], [0, 180]);

  const images = [
    {
      url: "https://images.unsplash.com/photo-1626470408813-f0059745d58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbWV0aHlzdCUyMGNyeXN0YWwlMjBwdXJwbGV8ZW58MXx8fHwxNzcyNjI4MTEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      y: y1,
      position: "top-[10%] left-[5%]",
      size: "w-48 h-48",
      rotation: "-rotate-12"
    },
    {
      url: "https://images.unsplash.com/photo-1550852826-5369a2d5e585?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFydHolMjBjcnlzdGFsJTIwY2xlYXJ8ZW58MXx8fHwxNzcyNzA4MTM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      y: y2,
      position: "top-[25%] right-[8%]",
      size: "w-40 h-40",
      rotation: "rotate-6"
    },
    {
      url: "https://images.unsplash.com/photo-1699240893326-3a0c7c3af05a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2NrJTIwbWluZXJhbCUyMGdlb2xvZ3l8ZW58MXx8fHwxNzcyNzA4MTM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      y: y3,
      position: "top-[45%] left-[10%]",
      size: "w-56 h-56",
      rotation: "rotate-12"
    },
    {
      url: "https://images.unsplash.com/photo-1676721591838-e4ab8cf55f5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW1zdG9uZSUyMGNvbGxlY3Rpb24lMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzI2OTAzNjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      y: y4,
      position: "top-[60%] right-[12%]",
      size: "w-44 h-44",
      rotation: "-rotate-8"
    },
    {
      url: "https://images.unsplash.com/photo-1652205649547-bf6a16378e18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFuaXRlJTIwcm9jayUyMHRleHR1cmV8ZW58MXx8fHwxNzcyNzA1NDQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      y: y5,
      position: "top-[80%] left-[15%]",
      size: "w-52 h-52",
      rotation: "rotate-15"
    },
    {
      url: "https://images.unsplash.com/photo-1760651691839-d089c1d9ff54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnlzdGFsJTIwZm9ybWF0aW9uJTIwbmF0dXJhbHxlbnwxfHx8fDE3NzI3MDgxMzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      y: y6,
      position: "top-[100%] right-[5%]",
      size: "w-48 h-48",
      rotation: "-rotate-6"
    }
  ];

  return (
    <div ref={containerRef} className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Gradient overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 via-slate-50/80 to-slate-100/90 z-10" />
      
      {/* Parallax images */}
      {images.map((image, index) => (
        <motion.div
          key={index}
          style={{ y: image.y }}
          className={`absolute ${image.position} ${image.size} ${image.rotation} opacity-20 hover:opacity-30 transition-opacity duration-500`}
        >
          <img
            src={image.url}
            alt={`Mineral ${index + 1}`}
            className="w-full h-full object-cover rounded-2xl shadow-2xl"
            loading="lazy"
          />
        </motion.div>
      ))}

      {/* Additional decorative floating elements */}
      <motion.div
        style={{ y: useTransform(scrollY, [0, 1000], [0, 350]) }}
        className="absolute top-[35%] left-[70%] w-36 h-36 bg-purple-300/10 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: useTransform(scrollY, [0, 1000], [0, 220]) }}
        className="absolute top-[70%] left-[60%] w-48 h-48 bg-blue-300/10 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: useTransform(scrollY, [0, 1000], [0, 280]) }}
        className="absolute top-[50%] right-[70%] w-40 h-40 bg-pink-300/10 rounded-full blur-3xl"
      />
    </div>
  );
}
