const OnAnyDevice = () => {
  return (
    <div className="p-8 bg-white w-full sm:w-[60%] rounded-xl">
      <p className="text-yellow-300 uppercase font-bold text-2xl">You'll See</p>
      <h1 className="font-bold text-5xl mb-4 uppercase">Top Leagues</h1>
      <div className="bg-gray-500/50 h-[1px] my-4"></div>
      <p className="my-6 text-lg font-semibold">
        Choose your country to see available content
      </p>

      <div className="flex justify-center items-center">
        <img
          src="https://setantasports.com/wp-content/uploads/2022/11/device-1-768x446.webp"
          alt="anydevice"
          className="max-h-[20rem] w-auto object-contain mx-auto"
        />
      </div>
    </div>
  );
};

export default OnAnyDevice;