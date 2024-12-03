export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
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