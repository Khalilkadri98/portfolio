import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.h2 
            className="text-4xl font-bold mb-4"
            animate={{ 
              scale: [1, 1.02, 1],
              color: ["#1a1a1a", "#646cff", "#1a1a1a"] 
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Turning Vision Into Reality Through Code
          </motion.p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600">
              I'm a passionate full-stack developer with a keen eye for design and a love for creating
              seamless user experiences. With expertise in modern web technologies, I bring ideas to life
              through clean code and creative solutions.
            </p>
            <p className="text-lg text-gray-600">
              My journey in web development started with curiosity and has evolved into a professional
              pursuit of excellence in creating digital solutions that make a difference.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              alt="Working on laptop"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};