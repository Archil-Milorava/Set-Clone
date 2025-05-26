const Devices = () => {
  return (
    <div className="p-6 md:p-8 bg-white w-full sm:w-[40%] rounded-xl ">
      <div className="space-y-6">
        {/* Mobile App */}
        <div className="flex items-start gap-4">
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12  font-bold text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-800">Mobile App</h3>
            <p className="text-gray-600 mt-1">
              Download Setanta Sports App from Google Play or App Store,
              register and start streaming your favorite sport right now.
            </p>
          </div>
        </div>

        {/* Desktop */}
        <div className="flex items-start gap-4">
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-11 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-800">Desktop</h3>
            <p className="text-gray-600 mt-1">
              Simply visit our streaming web-page. Register and start watching
              endless sports on your computer.
            </p>
          </div>
        </div>

        {/* Smart TV */}
        <div className="flex items-start gap-4">
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-11 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-800">Smart TV</h3>
            <p className="text-gray-600 mt-1">
              Sign up on setantasports.com, download Setanta Sports App from
              Application Store on your Android, LG or Samsung Smart TV.{" "}
              <a href="#" className="text-primary hover:underline">
                For detailed instructions click here
              </a>
            </p>
          </div>
        </div>

        {/* Cast */}
        <div className="flex items-start gap-4">
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-11 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
              />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-800">Cast</h3>
            <p className="text-gray-600 mt-1">
              Easily share your screen from any device to your TV with a
              screencast feature. Both devices should be connected to the same
              Wi-Fi network.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Devices;
