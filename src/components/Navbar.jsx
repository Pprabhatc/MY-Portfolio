export default function Navbar() {
  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50">

      <div className="
      backdrop-blur-md
      bg-white/60
      border
      border-gray-200
      px-8
      py-4
      rounded-full
      shadow-lg
      ">

        <ul className="flex gap-8">


          <li>
            <a href="#home">
              Home
            </a>
          </li>


          <li>
            <a href="#about">
              About
            </a>
          </li>


          <li>
            <a href="#skills">
              Skills
            </a>
          </li>


          <li>
            <a href="#projects">
              Projects
            </a>
          </li>


          <li>
            <a href="#contact">
              Contact
            </a>
          </li>


        </ul>


      </div>

    </nav>
  );
}