import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-secondary pt-16"
      role="banner"
      aria-labelledby="hero-heading"
    >
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-white"
        >
          <h1 id="hero-heading" className="text-5xl md:text-7xl font-bold mb-6">
            Creative Developer
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Transforming ideas into elegant digital experiences through clean code
            and creative solutions
          </p>
          <motion.a
            href="#projects"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="inline-block bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all"
            role="button"
            aria-label="View my work"
          >
            View My Work
          </motion.a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt="Developer workspace showing modern development setup"
            width="600"
            height="400"
            className="rounded-lg shadow-2xl"
            loading="eager"
            priority="true"
          />
        </motion.div>
      </div>
    </section>
  );
};