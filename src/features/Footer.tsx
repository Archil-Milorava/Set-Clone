import logoYellow from "../assets/logo-yellow.svg";
import { AiFillAndroid, AiFillApple } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const sports = ["Football", "MMA", "Basketball", "Racing", "Tennis"];
  const helpLinks = ["Help", "Terms of Use", "Career", "Watch us on Mobile"];

  return (
    <footer className="bg-black text-white py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-12">
          {/* Description */}
          <div className="md:w-1/2 space-y-4">
            <img src={logoYellow} alt="logo" />
            <p className="text-xs sm:text-sm text-white/80 w-[15rem] mb-6">
              Setanta Sports delivers exclusive live events of the most popular
              sports tournaments you will not see anywhere else.
            </p>
          </div>

          {/* Links Grid */}
          <div className="md:w-1/2 grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white/80">Sports</h3>
              <ul className="space-y-2">
                {sports.map((sport, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="hover:text-primary transition-colors"
                    >
                      {sport}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-white/80">Help</h3>
              <ul className="space-y-2">
                {helpLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="hover:text-yellow-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-sm text-gray-400 text-center md:text-left">
            <p>
              © This is Mock Landing page made by{" "}
              <a
                href="https://github.com/Archil-Milorava/Set-Clone"
                className="text-primary"
                target="blank"
              >
                Archil Milorava
              </a>
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-6">
            <a
              href="#"
              className="text-2xl hover:text-yellow-400 transition-colors"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="text-2xl hover:text-yellow-400 transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-2xl hover:text-yellow-400 transition-colors"
            >
              <FaYoutube />
            </a>
            <a
              href="#"
              className="text-2xl hover:text-yellow-400 transition-colors"
            >
              <AiFillApple />
            </a>
            <a
              href="#"
              className="text-2xl hover:text-yellow-400 transition-colors"
            >
              <AiFillAndroid />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
