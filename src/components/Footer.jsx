import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">

      <div className="max-w-6xl mx-auto px-8">

        <h2 className="text-4xl font-bold">
          PRABHAT KUMAR CHAURASIA
        </h2>


        <p className="text-gray-400 mt-3">
          Software Developer • DevOps Engineer
        </p>



        <div className="mt-10 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">



          <p className="text-gray-500">
            © 2026 All Rights Reserved
          </p>





          <div className="flex gap-6 text-2xl">


            <a

              href="https://linkedin.com/in/mrprabhat22/"

              target="_blank"

              rel="noreferrer"

              className="
              text-gray-400
              hover:text-white
              hover:scale-110
              transition
              "

            >

              <FaLinkedin />

            </a>





            <a

              href="https://github.com/Pprabhatc"

              target="_blank"

              rel="noreferrer"

              className="
              text-gray-400
              hover:text-white
              hover:scale-110
              transition
              "

            >

              <FaGithub />

            </a>





            <a

              href="mailto:chaurasiaprabhat42@gmail.com"

              className="
              text-gray-400
              hover:text-white
              hover:scale-110
              transition
              "

            >

              <FaEnvelope />

            </a>



          </div>




        </div>



      </div>


    </footer>
  );
}