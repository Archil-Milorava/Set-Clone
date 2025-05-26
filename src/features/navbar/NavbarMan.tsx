import logoYellow from "../../assets/logo-yellow.svg";
import setantaNetflixLogo from "../../assets/setanta-netflix-logo.svg";
import Button from "../../components/Button";

const NavbarMan = () => {
  return (
    <nav className=" bg-[#000000] h-24 w-full text-white flex justify-around items-center">
      <ul className="font-semibold flex items-center gap-6">
        <img
          src={logoYellow}
          alt="logo"
          className="cursor-pointer hover:opacity-80 "
        />
        <li className="hover:text-primary transition-colors cursor-pointer ">
          Home
        </li>
        <li className="hover:text-primary transition-colors cursor-pointer">
          News
        </li>
        <li className="hover:text-primary transition-colors cursor-pointer">
          Scores
        </li>
        <li className="hidden sm:flex hover:text-primary transition-colors cursor-pointer items-center gap-1">
          <img className="h-4" src={setantaNetflixLogo} alt="mini-logo" />
          <span>Fan Pack</span>
        </li>
      </ul>
      <Button>Watch Now</Button>
    </nav>
  );
};

export default NavbarMan;
