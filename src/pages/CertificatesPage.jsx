import { Link } from "react-router-dom";

export default function CertificatesPage() {
  const certificates = [
    {
      title: "AWS ML SageMaker",
      file: "/certificates/aws-ml-sagemaker.pdf"
    },

    {
      title: "Cybersecurity Analyst",
      file: "/certificates/cybersecurity-analyst.pdf"
    },

    {
      title: "GenAI Data Analytics",
      file: "/certificates/genai-data-analytics.pdf"
    },

    {
      title: "Data Analysis",
      file: "/certificates/data-analysis.pdf"
    },

    {
      title: "Robotics & Controls",
      file: "/certificates/robotics-controls.pdf"
    },

    {
      title: "Computational Theory",
      file: "/certificates/computational-theory.pdf"
    },

    {
      title: "C Programming",
      file: "/certificates/c-programming.pdf"
    },

    {
      title: "C# DSA",
      file: "/certificates/csharp-dsa.pdf"
    },

    {
      title: "Engineering Explorer",
      file: "/certificates/engineering-explorer.pdf"
    },

    {
      title: "Engineering Simulation",
      file: "/certificates/engineering-simulation.pdf"
    },

    {
      title: "GDSC",
      file: "/certificates/gdsc.pdf"
    },

    {
      title: "MATLAB Onramp",
      file: "/certificates/matlab-onramp.pdf"
    },

    {
      title: "Research Methodology",
      file: "/certificates/research-methodology.pdf"
    },

    {
      title: "Sales Simulation",
      file: "/certificates/sales-simulation.pdf"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F1EA] py-20 px-8">

      <div className="max-w-7xl mx-auto">

        <Link
          to="/"
          className="
          inline-block
          mb-10
          font-semibold
          "
        >
          ← Back To Portfolio
        </Link>

        <h1 className="text-5xl md:text-7xl font-bold mb-16">
          All Certifications
        </h1>

        <div className="grid md:grid-cols-3 gap-8">

          {certificates.map((cert, index) => (
            <div
              key={index}
              className="
              bg-white
              p-8
              rounded-3xl
              shadow-sm
              hover:shadow-xl
              hover:-translate-y-2
              transition
              "
            >
              <h3 className="text-2xl font-bold">
                {cert.title}
              </h3>

              <a
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="
                inline-block
                mt-6
                px-5
                py-3
                bg-black
                text-white
                rounded-full
                "
              >
                Open Certificate
              </a>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}