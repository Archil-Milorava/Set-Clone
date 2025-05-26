const LatestNews = () => {
  return (
    <div className=" bg-white rounded-xl lg:mx-[10rem] lg:h-[25rem] flex flex-col sm:flex-row  my-8">
      {/* Text content on left */}
      <div className="lg:w-1/2 p-8 h-full flex flex-col gap-3 justify-center">
      <img src="https://setantasports.com/wp-content/uploads/2022/11/logo_unboxed_black.png" alt="logo-gray" className="h-[3rem] w-[10rem] object-cover" />
        <h2 className="lg:text-6xl text-4xl font-bold uppercase mb-4">Read latest news</h2>
        <div className="bg-gray-500/50  h-[1px] my-4"></div>

        <p className="text-lg text-gray-700 font-bold">
          Working 24/7 to share with you all the latest facts, scores, transfers
          and craziest sport moments
        </p>
      </div>

      {/* Image on right */}
      <div className=" w-1/2 h-full overflow-hidden">
        <img
          src="https://setantasports.com/wp-content/uploads/2022/11/11.webp"
          alt="Latest sports news"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default LatestNews;
