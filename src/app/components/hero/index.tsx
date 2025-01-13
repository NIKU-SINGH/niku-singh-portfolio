import React from "react";
import ScheduleButton from "../button/Schedule";
import { FaGithub, FaGitlab, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { BsGitlab } from "react-icons/bs";
import { TbBrandGithubFilled } from "react-icons/tb";
import Image from "next/image";

function Index() {
  return (
    <div
      className="flex items-center justify-center w-full h-screen bg-cover bg-center bg-no-repeat sm:px-10 sm:py-5"
      style={{ backgroundImage: "url(/images/bg.svg)" }}
    >
      {/* Container for the text and image */}
      <div className="relative">
        {/* Image behind the text */}
        <div className="absolute inset-0 flex justify-center items-center">
          <Image src="/images/rock.png" width={500} height={500} alt="Logo" />
        </div>

        {/* Text over the image */}
        <div className="flex items-center space-x-4 text-[8rem] relative z-10 sm:text-2xl">
          <h1 className="font-bold font-monumentExtended text-white">NIKU</h1>
          <h1 className="font-bold font-monumentExtended text-transparent text-stroke-2 text-stroke-white">
            SINGH
          </h1>
        </div>
      </div>

      <div className="h-full flex items-center flex-col gap-4">
        {/* Social Icons */}
        <div className="flex flex-col gap-4 fixed right-10 bottom-32 sm:right-5 sm:bottom-16">
          <div className="bg-white rounded-full p-2">
            <FaTwitter className="text-black" size={24} />
          </div>
          <div className="bg-white rounded-full p-2">
            <BsGitlab className="text-black" size={24} />
          </div>
          <div className="bg-white rounded-full p-2">
            <TbBrandGithubFilled className="text-black" size={24} />
          </div>
          <div className="bg-white rounded-full p-2">
            <FaLinkedinIn className="text-black" size={24} />
          </div>
        </div>
      </div>

      <ScheduleButton />
    </div>
  );
}

export default Index;
