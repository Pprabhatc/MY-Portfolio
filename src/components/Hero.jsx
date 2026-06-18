import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  const roles = [
    "Software Developer",
    "DevOps Engineer",
  ];

  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        const updated = currentRole.substring(0, text.length + 1);
        setText(updated);

        if (updated === currentRole) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        const updated = currentRole.substring(0, text.length - 1);
        setText(updated);

        if (updated === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="
      min-h-screen
      bg-[#F5F1EA]
      flex
      items-center
      pt-28
      pb-16
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-8
        w-full
        grid
        xl:grid-cols-2
        items-center
        gap-10
        "
      >
        {/* LEFT CONTENT */}
        <div
          className="
          order-2
          xl:order-1
          "
        >
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
            text-7xl
            md:text-[8rem]
            font-black
            tracking-[-6px]
            leading-none
            "
          >
            PRABHAT
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="
            text-5xl
            md:text-[6rem]
            font-black
            tracking-[-4px]
            text-gray-400
            leading-none
            "
          >
            KUMAR CHAURASIA
          </motion.h1>

          <p
            className="
            mt-10
            text-xl
            text-gray-700
            font-semibold
            h-8
            "
          >
            {text}
            <span className="animate-pulse">|</span>
          </p>

          <p
            className="
            mt-4
            max-w-2xl
            text-lg
            text-gray-500
            "
          >
            Building scalable applications and automating deployments with
            modern technologies.
          </p>

          <div
            className="
            mt-10
            flex
            gap-4
            "
          >
            <a
              href="#projects"
              className="
              px-6
              py-3
              bg-black
              text-white
              rounded-full
              hover:scale-105
              transition
              "
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="
              px-6
              py-3
              border
              border-black
              rounded-full
              hover:bg-black
              hover:text-white
              transition
              "
            >
              Resume
            </a>
          </div>
        </div>

        {/* RIGHT PHOTO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
          order-1
          xl:order-2
          flex
          justify-center
          "
        >
          <img
            src="/profile.png"
            alt="Prabhat"
            className="
            w-72
            h-72
            md:w-[420px]
            md:h-[420px]
            object-cover
            rounded-3xl
            shadow-2xl
            block
            "
          />
        </motion.div>
      </div>
    </section>
  );
}