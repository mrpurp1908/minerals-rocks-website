import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface RockCardProps {
  name: string;
  type: string;
  description: string;
  imageUrl: string;
  index: number;
}

export function RockCard({ name, type, description, imageUrl, index }: RockCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="flex flex-col md:flex-row gap-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <motion.div
        whileHover={{ scale: 1.05, rotate: 2 }}
        transition={{ duration: 0.3 }}
        className="md:w-1/3 h-48 md:h-auto rounded-lg overflow-hidden flex-shrink-0"
      >
        <ImageWithFallback
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="flex-1">
        <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm mb-3">
          {type}
        </div>
        <h3 className="text-2xl mb-3">{name}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </motion.div>
  );
}
