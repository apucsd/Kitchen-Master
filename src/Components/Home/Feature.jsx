import React from "react";

const Feature = () => {
  return (
    <div>
      <div className="p-8">
        <div className="flex flex-col items-center justify-center">
          <span className="rounded-full bg-indigo-500 px-2 py-1 text-white uppercase text-sm">
            FEATURES
          </span>
        </div>
        <h1 className="text-4xl font-medium text-gray-700 text-center mt-6">
          Get a many of interesting features.
        </h1>
        <p className="text-center mt-6 text-lg font-light text-gray-500">
          Cooking together with the expert.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="text-center ">
          <div className="w-full  px-10 pt-10">
            <div className="relative mt-16  mb-32 max-w-sm mx-auto">
              <div className="rounded overflow-hidden  bg-slate-50 ">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="">
                    <img
                      src="/featureOne.svg"
                      className="rounded-full object-cover h-full w-full"
                    />
                  </div>
                </div>
                <div className="px-6 mt-16 space-y-4 py-10">
                  <h1 className="font-bold uppercase text-3xl text-center mb-1">
                    Menu variations
                  </h1>

                  <p className="font-light text-sm text-gray-500 mb-3">
                    Mastering the Art of Culinary Excellence
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center ">
          <div className="w-full  px-10 pt-10">
            <div className="relative mt-16  mb-32 max-w-sm mx-auto">
              <div className="rounded overflow-hidden  bg-slate-50 ">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="">
                    <img
                      src="/featureTwo.svg"
                      className="rounded-full object-cover h-full w-full"
                    />
                  </div>
                </div>
                <div className="px-6 mt-16 space-y-4 py-10">
                  <h1 className="font-bold uppercase text-3xl text-center mb-1">
                    Best Cooking
                  </h1>

                  <p className="font-light text-sm text-gray-500 mb-3">
                    Mastering the Art of Culinary Excellence
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center ">
          <div className="w-full  px-10 pt-10">
            <div className="relative mt-16  mb-32 max-w-sm mx-auto">
              <div className="rounded overflow-hidden  bg-slate-50 ">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="">
                    <img
                      src="/featureOne.svg"
                      className="rounded-full object-cover h-full w-full"
                    />
                  </div>
                </div>
                <div className="px-6 mt-16 space-y-4 py-10">
                  <h1 className="font-bold uppercase text-3xl text-center mb-1">
                    Best Expert
                  </h1>

                  <p className="font-light text-sm text-gray-500 mb-3">
                    Mastering the Art of Culinary Excellence
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
