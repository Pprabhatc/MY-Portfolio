import { Link } from "react-router-dom";

export default function Cert() {
  const certificates = [
     {
    title: "GDSC",
    issuer: "Google Developer Student Clubs",
    year: "2023",
    desc: "Developer community participation, technical workshops and collaborative projects."
    },

    {
    title: "C# DSA",
    issuer: "Infosys Springboard",
    year: "2024",
    desc: "Data Structures and Algorithms using C#."
  },

  {
    title: "MATLAB Onramp",
    issuer: "MathWorks",
    year: "2025",
    desc: "MATLAB fundamentals, numerical computing and visualization."
  },
    
  {
    title: "AWS ML SageMaker",
    issuer: "Infosys Springboard",
    year: "2026",
    desc: "Machine Learning in SageMaker and AWS ML workflows."
  },

  {
    title: "Cybersecurity Analyst",
    issuer: "Tata Group x Forage",
    year: "2026",
    desc: "IAM fundamentals and security strategy assessment."
  },

  {
    title: "GenAI Data Analytics",
    issuer: "Tata Group x Forage",
    year: "2026",
    desc: "AI-powered analytics and business reporting."
  }
  ];

  return (
    <section
      id="certificates"
      className="py-40 bg-white"
    >
      <div className="max-w-6xl mx-auto px-8">

        <p className="text-gray-400 text-sm tracking-widest mb-4">
          CERTIFICATES
        </p>

        <h2 className="text-4xl md:text-7xl font-bold mb-20">
          My Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="
              bg-[#F5F1EA]
              p-8
              rounded-3xl
              shadow-sm
              hover:shadow-2xl
              hover:-translate-y-2
              transition-all
              duration-500
              "
            >
              <h3 className="text-2xl font-bold">
                {cert.title}
              </h3>

              <p className="text-gray-500 mt-3">
                {cert.issuer} • {cert.year}
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                {cert.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/certificates"
            className="
            inline-block
            px-8
            py-4
            bg-black
            text-white
            rounded-full
            hover:scale-105
            transition
            "
          >
            View All Certificates →
          </Link>
        </div>

      </div>
    </section>
  );
}