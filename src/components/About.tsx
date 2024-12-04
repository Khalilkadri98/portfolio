import khalil from "../../public/assets/khalil.jpg";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-8 lg:px-16">
        <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center md:text-left">
            <p className="text-lg text-gray-600">
              Hello! I'm Khalil, a Full-Stack Web Developer specializing in the
              MERN stack (MongoDB, Express.js, React, Node.js). I’m passionate
              about building dynamic web applications with seamless user
              experiences and scalable backend solutions. My expertise includes
              secure user authentication, interactive frontend design, robust
              backend development, efficient database management, and API
              integration.
            </p>
            <p className="text-lg text-gray-600">
              With a Bachelor’s degree in Computer Science and advanced
              proficiency in German and English, I thrive in diverse,
              collaborative environments.
            </p>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-fade-in">
              Transforming Ideas Into Impactful Web Solutions!
            </h3>
          </div>
          <div className="relative flex justify-center">
            <img
              src={khalil}
              alt="Working on laptop"
              className="rounded-lg shadow-xl h-96"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
