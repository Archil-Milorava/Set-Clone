import Button from "../components/Button";
import OutlineButton from "../components/OutlineButton";
import NavbarMan from "../features/navbar/NavbarMan";
import bgMain from "/bg-main.jpg";

const FirstSection = () => {
  return (
    <section
      className="w-full h-screen relative"
      style={{
        backgroundImage: `url(${bgMain})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <NavbarMan />
      <div className=" bottom-0 absolute w-full h-auto flex flex-col justify-center px-11 gap-2 text-white py-4 sm:left-0 sm:w-1/2 sm:h-full sm:pl-[10rem] sm:gap-8 lg:pl-[10rem]">
        <h1 className="text-5xl font-bold text-center sm:text-start sm:text-8xl">
          STAY IN THE GAME.
        </h1>
        <p className="font-bold text-xl sm:text-4xl text-center sm:text-start">
          The world of live sports <br /> on any screen
        </p>
        <div className=" flex justify-between sm:justify-start sm:gap-2">
          <Button>subscribe</Button>
          <OutlineButton>Watch now</OutlineButton>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;

{
  /* <div className="w-full h-[20rem] sm:w-[37rem] sm:h-[35rem] absolute top-[65%] flex flex-col items-center justify-center gap-5 sm:top-[25%] sm:left-[22rem] sm:flex sm:flex-col sm:gap-4 sm:items-start">
        <div className="text-white space-y-4 ">
          <h1 className="font-bold text-4xl sm:text-8xl">STAY IN THE GAME.</h1>
          <p className="font-bold text-2xl sm:text-4xl">
            {" "}
            The world of live sports <br /> on any screen
          </p>
        </div>
        <div className="flex gap-3">
          <Button>subscribe</Button>
          <OutlineButton>Watch now</OutlineButton>
        </div>
      </div> */
}
