import { Button } from "./ui/button";

export const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Resume</h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-gray-600 mb-8">
            Download my resume to learn more about my experience, education, and
            skills.
          </p>
          <Button
            className="bg-primary hover:bg-primary/90 text-white"
            onClick={() => window.open("./assets/Khalil_Kadri__EN_.pdf", "_blank")}
          >
            Resume (EN) (PDF)
          </Button>
          <div className="max-w-2xl mx-auto text-center my-4">
          <Button
            className="bg-primary hover:bg-primary/90 text-white mx-4"
            onClick={() => window.open("./assets/Khalil_Kadri__DE_.pdf", "_blank")}
          >
            Lebenslauf (DE) (PDF)
          </Button>
          </div>
          <div className="max-w-2xl mx-auto text-center">
          <Button
            className="bg-primary hover:bg-primary/90 text-white"
            onClick={() => window.open("./assets/Khalil_Kadri__FR_.pdf", "_blank")}
          >
            CV (FR) (PDF)
          </Button>
          </div>
        </div>
      </div>
    </section>
  );
};