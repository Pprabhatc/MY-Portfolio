export default function Navbar() {
  return (
    <nav
      className="
      fixed
      top-5
      left-1/2
      -translate-x-1/2
      z-50
      w-max
      "
    >
      <div
        className="
        backdrop-blur-md
        bg-white/60
        border
        border-gray-200
        px-4
        py-3
        md:px-8
        md:py-4
        rounded-full
        shadow-lg
        "
      >
        <ul
          className="
          flex
          gap-4
          md:gap-8
          text-sm
          md:text-base
          "
        >
          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#skills">Skills</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#certificates">Certificates</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}