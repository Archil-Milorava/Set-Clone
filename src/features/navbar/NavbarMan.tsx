import logoYellow from "../../assets/logo-yellow.svg";
import setantaNetflixLogo from "../../assets/setanta-netflix-logo.svg";
import Button from "../../components/Button";

const NavbarMan = () => {
  return (
    <nav className=" hidden bg-[#000000] h-24 w-full text-white sm:flex justify-around items-center">
      <ul className=" font-semibold flex items-center gap-6">
        <img src={logoYellow} alt="logo" />
        <li className="hover:opacity-80 cursor-pointer">Home</li>
        <li className="hover:opacity-80 cursor-pointer">News</li>
        <li className="hover:opacity-80 cursor-pointer">Scores</li>
        <div className="hidden sm:flex hover:opacity-80 cursor-pointer items-center gap-1">
          <img className="h-4" src={setantaNetflixLogo} alt="mini-logo" />
          <li>Fan Pack</li>
        </div>
      </ul>
      <Button>Watch Now</Button>
    </nav>
  );
};

export default NavbarMan;
