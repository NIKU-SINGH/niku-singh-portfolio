import React from "react";

function Hero2() {
  return (
    <div className="px-20 flex items-center justify-center h-screen sm:px-10 sm:py-5">
      <div className="flex items-center space-x-4 text-[8rem] relative z-10 flex-col">
        <h1 className="font-monumentExtended text-white text-[4.2vw] font-normal sm:text-2xl">
          XYZ ABCD
        </h1>
        <p className="text-white text-lg font-normal font-generalSans sm:text-xs">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
}

export default Hero2;
