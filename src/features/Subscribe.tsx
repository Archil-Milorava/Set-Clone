import Button from "../components/Button";

const Subscribe = () => {
  return (
    <div className="bg-[#424242] min-h-[10rem] h-auto lg:mx-[10rem] rounded-xl my-8 flex flex-col items-start justify-center gap-3 p-1 pl-8">
      <h1 className=" font-bold text-xl text-primary">Experience our platform!</h1>
      <p className="text-white font-semibold">Try a variety of sport content and cheer for your favorite athletes</p>
      <Button>Subscribe</Button>
    </div>
  );
};

export default Subscribe;
