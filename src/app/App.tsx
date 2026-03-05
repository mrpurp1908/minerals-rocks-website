import { motion } from "motion/react";
import { useState } from "react";
import { MineralCard } from "./components/MineralCard";
import { RockCard } from "./components/RockCard";
import { UseCard } from "./components/UseCard";
import { ThreeBackground } from "./components/ThreeBackground";
import { ParallaxBackground } from "./components/ParallaxBackground";
import { Gem, Building2, Cpu, Sparkles, Mountain, Palette, Factory, Home } from "lucide-react";

export default function App() {
  const [activeRockType, setActiveRockType] = useState<"Igneous" | "Metamorphic" | "Sedimentary">("Igneous");
  const minerals = [
    {
      name: "Quartz",
      formula: "SiO₂",
      description: "One of the most abundant minerals on Earth, quartz is known for its hardness and variety of colors. It forms hexagonal crystals and is resistant to weathering.",
      imageUrl: "https://images.unsplash.com/photo-1687017896948-316a27a12919?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFydHolMjBjcnlzdGFsJTIwbWluZXJhbHxlbnwxfHx8fDE3NzI3MDU0NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Amethyst",
      formula: "SiO₂",
      description: "A purple variety of quartz, amethyst gets its color from iron impurities and irradiation. It's prized as a gemstone and has been used in jewelry for thousands of years.",
      imageUrl: "https://images.unsplash.com/photo-1626470408813-f0059745d58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbWV0aHlzdCUyMGdlbXN0b25lJTIwcHVycGxlfGVufDF8fHx8MTc3MjcwNTQ0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Gold",
      formula: "Au",
      description: "A precious metal mineral known for its lustrous yellow color, malleability, and resistance to corrosion. Gold has been valued throughout human history for currency and jewelry.",
      imageUrl: "https://images.unsplash.com/photo-1759150467270-aa4496d4c61a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwbWluZXJhbCUyMG9yZXxlbnwxfHx8fDE3NzI3MDU0NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Diamond",
      formula: "C",
      description: "The hardest natural mineral, composed of pure carbon. Diamonds form deep within the Earth under extreme pressure and temperature, making them incredibly rare and valuable.",
      imageUrl: "https://images.unsplash.com/photo-1662434923232-0164224dbdb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwZ2Vtc3RvbmUlMjBqZXdlbHJ5fGVufDF8fHx8MTc3MjcwNTQ0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  const rocks = [
    // Igneous Rocks
    {
      name: "Granite",
      type: "Igneous" as const,
      description: "A coarse-grained intrusive igneous rock composed mainly of quartz, feldspar, and mica. Granite forms from slowly cooling magma deep beneath the Earth's surface, creating its characteristic speckled appearance.",
      imageUrl: "https://images.unsplash.com/photo-1652205649547-bf6a16378e18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFuaXRlJTIwcm9jayUyMHRleHR1cmV8ZW58MXx8fHwxNzcyNzA1NDQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Basalt",
      type: "Igneous" as const,
      description: "A fine-grained volcanic rock that makes up most of the ocean floor. Basalt forms from rapidly cooling lava and is rich in iron and magnesium, giving it a dark color.",
      imageUrl: "https://images.unsplash.com/photo-1671584681231-a4a3d721cc09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNhbHQlMjBpZ25lb3VzJTIwcm9ja3xlbnwxfHx8fDE3NzI3MDU0NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Obsidian",
      type: "Igneous" as const,
      description: "A naturally occurring volcanic glass formed when lava cools extremely rapidly. Its glassy texture and sharp edges made it valuable for tools and weapons in ancient civilizations.",
      imageUrl: "https://images.unsplash.com/photo-1764022587494-92f9e8371318?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvYnNpZGlhbiUyMHZvbGNhbmljJTIwZ2xhc3N8ZW58MXx8fHwxNzcyNzA1NDQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Pumice",
      type: "Igneous" as const,
      description: "An extremely lightweight volcanic rock formed when super-heated lava is violently ejected from a volcano. The rapid cooling and depressurization creates a frothy structure filled with gas bubbles.",
      imageUrl: "https://images.unsplash.com/photo-1746349642233-fcfae6365ffc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdW1pY2UlMjBzdG9uZSUyMGxpZ2h0d2VpZ2h0fGVufDF8fHx8MTc3MjcwODM3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Rhyolite",
      type: "Igneous" as const,
      description: "A fine-grained volcanic rock with high silica content, similar in composition to granite but formed from rapidly cooled lava. Often displays beautiful banding and flow patterns.",
      imageUrl: "https://images.unsplash.com/photo-1613825432127-cd5c61fa159b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaHlvbGl0ZSUyMGlnbmVvdXMlMjByb2NrfGVufDF8fHx8MTcyODM2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    // Metamorphic Rocks
    {
      name: "Marble",
      type: "Metamorphic" as const,
      description: "Formed from limestone that has undergone metamorphism, marble is prized for its beauty and workability. The characteristic veining comes from impurities that were present in the original limestone.",
      imageUrl: "https://images.unsplash.com/photo-1694376329587-2b88f6c09aab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJibGUlMjBzdG9uZSUyMHdoaXRlfGVufDF8fHx8MTc3MjcwNTQ0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Slate",
      type: "Metamorphic" as const,
      description: "A fine-grained metamorphic rock formed from shale or mudstone under low-grade metamorphism. Known for its ability to split into thin, flat sheets, making it ideal for roofing tiles.",
      imageUrl: "https://images.unsplash.com/photo-1737272148205-edb3658d1877?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbGF0ZSUyMG1ldGFtb3JwaGljJTIwcm9ja3xlbnwxfHx8fDE3NzI3MDgzNjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Schist",
      type: "Metamorphic" as const,
      description: "A medium-grade metamorphic rock with visible layers of mica crystals that give it a shiny, foliated appearance. Forms under higher temperatures and pressures than slate.",
      imageUrl: "https://images.unsplash.com/photo-1699964621965-1c8ffa0dba17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hpc3QlMjBtZXRhbW9ycGhpYyUyMHJvY2t8ZW58MXx8fHwxNzcyNzA4MzY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Gneiss",
      type: "Metamorphic" as const,
      description: "A high-grade metamorphic rock characterized by distinctive banding patterns. Forms under intense heat and pressure, often from granite or sedimentary rocks.",
      imageUrl: "https://images.unsplash.com/photo-1703599716783-30ec0495acf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbmVpc3MlMjBiYW5kZWQlMjByb2NrfGVufDF8fHx8MTc3MjcwODM2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Quartzite",
      type: "Metamorphic" as const,
      description: "Formed when sandstone is subjected to metamorphism, quartzite is extremely hard and durable. The quartz grains become so tightly interlocked that the rock breaks through the grains rather than around them.",
      imageUrl: "https://images.unsplash.com/photo-1703599716783-30ec0495acf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFydHppdGUlMjBtZXRhbW9ycGhpYyUyMHN0b25lfebnwxfHx8fDE3NzI3MDgzNzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    // Sedimentary Rocks
    {
      name: "Limestone",
      type: "Sedimentary" as const,
      description: "A sedimentary rock composed mainly of calcium carbonate. It often forms from the accumulation of shell, coral, and other organic debris in warm, shallow seas.",
      imageUrl: "https://images.unsplash.com/photo-1759660020928-36f43d9c96a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW1lc3RvbmUlMjBzZWRpbWVudGFyeSUyMHJvY2t8ZW58MXx8fHwxNzcyNzA1NDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Sandstone",
      type: "Sedimentary" as const,
      description: "Formed from compacted sand grains, sandstone displays beautiful layering and comes in various colors. It's commonly used in construction and can preserve excellent fossils.",
      imageUrl: "https://images.unsplash.com/photo-1685666586493-622c826886d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW5kc3RvbmUlMjBzZWRpbWVudGFyeSUyMGxheWVyc3xlbnwxfHx8fDE3NzI3MDgzNzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Shale",
      type: "Sedimentary" as const,
      description: "The most abundant sedimentary rock, formed from compressed mud and clay. Shale breaks easily into thin layers and is often rich in fossils, oil, and natural gas.",
      imageUrl: "https://images.unsplash.com/photo-1673085618479-3d2436530fe6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGFsZSUyMHNlZGltZW50YXJ5JTIwcm9ja3xlbnwxfHx8fDE3NzI3MDgzNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Conglomerate",
      type: "Sedimentary" as const,
      description: "A coarse-grained sedimentary rock composed of rounded pebbles and gravel cemented together. Forms in high-energy environments like rivers and beaches.",
      imageUrl: "https://images.unsplash.com/photo-1758614407483-85047dc53d58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25nbG9tZXJhdGUlMjByb2NrJTIwcGViYmxlc3xlbnwxfHx8fDE3NzI3MDgzNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Coal",
      type: "Sedimentary" as const,
      description: "An organic sedimentary rock formed from accumulated plant debris in swampy environments. Over millions of years, heat and pressure transform peat into coal, a valuable energy source.",
      imageUrl: "https://images.unsplash.com/photo-1632734825563-e180215f0c90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2FsJTIwbWluZXJhbCUyMGJsYWNrfGVufDF8fHx8MTc3MjcwODM3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  const filteredRocks = rocks.filter(rock => rock.type === activeRockType);

  const uses = [
    {
      icon: Gem,
      title: "Jewelry & Gemstones",
      description: "Precious minerals like diamonds, emeralds, and rubies are cut and polished to create beautiful jewelry worn worldwide."
    },
    {
      icon: Building2,
      title: "Construction",
      description: "Granite, marble, and limestone are essential building materials used in monuments, buildings, and infrastructure."
    },
    {
      icon: Cpu,
      title: "Technology",
      description: "Quartz crystals are crucial in electronics, providing precise timing for computers, watches, and communication devices."
    },
    {
      icon: Factory,
      title: "Industry",
      description: "Minerals provide raw materials for manufacturing, from iron ore for steel to gypsum for cement and drywall."
    },
    {
      icon: Palette,
      title: "Art & Sculpture",
      description: "Marble and other fine stones have been used for millennia to create sculptures and artistic masterpieces."
    },
    {
      icon: Home,
      title: "Home & Decor",
      description: "Polished stones and minerals are used for countertops, flooring, tiles, and decorative elements in modern homes."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* 3D Background */}
      <ThreeBackground />
      
      {/* Parallax Background */}
      <ParallaxBackground />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900/80 via-purple-900/80 to-slate-900/80">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1676721492346-90bf798b6c34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMG1pbmVyYWxzJTIwY29sbGVjdGlvbnxlbnwxfHx8fDE3NzI3MDU0NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Minerals background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <Mountain className="w-20 h-20 text-purple-400 mx-auto" />
            </motion.div>
            <h1 className="text-5xl md:text-7xl mb-6 text-white">
              Minerals & Rocks
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover the fascinating world beneath our feet - from precious gemstones to the building blocks of our planet
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Sparkles className="w-8 h-8 text-yellow-400 mx-auto animate-pulse" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-white text-center"
          >
            <div className="text-sm mb-2">Scroll to explore</div>
            <div className="w-6 h-10 border-2 border-white rounded-full mx-auto flex items-start justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-2 bg-white rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Minerals Section */}
      <section className="py-20 px-4 relative bg-slate-50/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4">Precious Minerals</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Naturally occurring inorganic substances with specific chemical compositions and crystal structures
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {minerals.map((mineral, index) => (
              <MineralCard key={mineral.name} {...mineral} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Rocks Section */}
      <section className="py-20 px-4 bg-white/90 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl mb-4">Types of Rocks</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Rocks are aggregates of minerals formed through various geological processes over millions of years
            </p>
          </motion.div>

          {/* Rock Type Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center gap-4 mb-12 flex-wrap"
          >
            {(["Igneous", "Metamorphic", "Sedimentary"] as const).map((type) => (
              <button
                key={type}
                onClick={() => setActiveRockType(type)}
                className={`px-8 py-3 rounded-full transition-all duration-300 ${
                  activeRockType === type
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-300 scale-105"
                    : "bg-white text-gray-700 hover:bg-purple-50 border-2 border-purple-200"
                }`}
              >
                <span className="font-medium">{type}</span>
              </button>
            ))}
          </motion.div>

          {/* Rock Cards */}
          <div className="space-y-6">
            {filteredRocks.map((rock, index) => (
              <RockCard key={rock.name} {...rock} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Uses Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-100/90 to-slate-200/90 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4">Practical Applications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Minerals and rocks play vital roles in our daily lives, from technology to construction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {uses.map((use, index) => (
              <UseCard key={use.title} {...use} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto text-center"
        >
          <Mountain className="w-12 h-12 mx-auto mb-6 text-purple-400" />
          <p className="text-gray-400 mb-6">
            Exploring the wonders of Earth's geology
          </p>
          
          <div className="mb-8">
            <h3 className="text-lg mb-4 text-gray-300">Created by</h3>
            <div className="flex flex-wrap justify-center gap-4 text-gray-400">
              <span className="hover:text-purple-400 transition-colors">Ralph Fuentes</span>
              <span className="text-gray-600">•</span>
              <span className="hover:text-purple-400 transition-colors">Jen Paul Ma</span>
              <span className="text-gray-600">•</span>
              <span className="hover:text-purple-400 transition-colors">Cholo Soriano</span>
              <span className="text-gray-600">•</span>
              <span className="hover:text-purple-400 transition-colors">Mark Jasper Bulan</span>
              <span className="text-gray-600">•</span>
              <span className="hover:text-purple-400 transition-colors">Alain Paul Mable</span>
            </div>
          </div>
          
          <p className="text-sm text-gray-500">
            © 2026 Minerals & Rocks Information Hub
          </p>
        </motion.div>
      </footer>
    </div>
  );
}
