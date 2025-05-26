import Button from "../components/Button";

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="p-8 bg-white rounded-xl lg:mx-[10rem] my-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8">
        {/* Text content on left */}
        <div className="lg:w-1/2 p-8 h-full flex flex-col gap-3 justify-center">
          <p className="text-yellow-300 uppercase font-bold text-2xl">
            YOU'LL SEE
          </p>
          <h1 className="text-4xl sm:text-6xl font-bold">
            Live Sports. <br /> Here. Now.
          </h1>
          <div className="flex gap-8">
            <Button>Stream Now</Button>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-gray-600/50 cursor-pointer hover:text-gray-900 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              BACK TO TOP
            </button>
          </div>
        </div>

        {/* Image on right */}
        <div className="w-1/2 h-full overflow-hidden">
          <img
            src="https://setantasports.com/wp-content/uploads/2022/11/HOME-Hovering-visuals-_BOTTOM-CTA_-_1_-1-1024x578.webp"
            alt="Live sports streaming"
            className="rounded-lg object-cover w-full max-h-[400px] shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ScrollToTop;
