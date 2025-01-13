import React from "react";
import Image from "next/image";

function Contact() {
  return (
    <div className="flex flex-col font-monumentExtended space-y-4 w-full bg-red-400 px-20 py-10 h-screen sm:px-10 sm:py-5">
      <h1 className="text-white text-4xl sm:text-2xl">Contact</h1>
      <p className="text-white text-sm sm:text-xs">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
  );
}

export default Contact;
