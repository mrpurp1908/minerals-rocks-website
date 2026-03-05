import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface MineralCardProps {
  name: string;
  description: string;
  formula?: string;
  imageUrl: string;
  index: number;
}

export function MineralCard({ name, description, formula, imageUrl, index }: MineralCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="h-64 overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="h-full"
        >
          <ImageWithFallback
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl mb-2">{name}</h3>
        {formula && (
          <p className="text-gray-500 text-sm mb-3 italic">{formula}</p>
        )}
        <p className="text-gray-700">{description}</p>
      </div>
    </motion.div>
  );
}
