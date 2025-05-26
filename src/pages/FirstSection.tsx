import Button from "../components/Button";
import OutlineButton from "../components/OutlineButton";
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
