const Multiview = () => {
  return (
    <div className="p-8 bg-white rounded-xl mx-[10rem] my-[2rem]">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Text content on left */}
        <div className="lg:w-1/2">
          <p className="text-yellow-300 uppercase font-bold text-2xl mb-2">
            YOU'LL SEE
          </p>
          <h2 className="text-5xl font-bold uppercase mb-6">In Multiview</h2>
          <div className="bg-gray-500/50 h-[1px] my-4"></div>
          <p className="text-lg font-bold">
            The opportunity for the die-hard fans not to miss any stream and
            watch several matches at one time
          </p>
        </div>

        {/* Image on right */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="https://setantasports.com/wp-content/uploads/2022/11/multiview-_1_-1.webp"
            alt="Multiview feature"
            className="rounded-lg object-cover max-h-[400px] w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Multiview;
