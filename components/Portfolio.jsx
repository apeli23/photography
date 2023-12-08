import Image from 'next/image';
import React from 'react';
import Img1 from '/public/images/brideshower.jpg';
import Img2 from '/public/images/cam.jpg';

const Portfolio = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 text-center">
      <h1 className="font-bold text-2xl p-4">Photos</h1>
      <div className="grid grid-rows-none md:grid-cols-5 p-4 gap-4">
        <div className="w-full h-full col-span-2 md:col-span-3 row-span-2">
          <Image
            src='https://res.cloudinary.com/dy8nc5qlb/image/upload/v1702017136/photoshoot/ftsofpvmwxhsw0dcfe7w.jpg'
            alt="/"
            layout="responsive"
            width="677"
            height="451"
            className="cursor-pointer"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src='https://res.cloudinary.com/dy8nc5qlb/image/upload/v1702017137/photoshoot/gvxg8yy5ivjbrv7zx2j4.jpg'
            alt="/"
            width="215"
            height="217"
            layout="responsive"
            objectFit="cover"
            className="cursor-pointer"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src="https://res.cloudinary.com/dy8nc5qlb/image/upload/v1702010446/photoshoot/holyueddoiugpiou4o82.jpg"
            alt="/"
            width="215"
            height="217"
            layout="responsive"
            objectFit="cover"
            className="cursor-pointer"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src="https://res.cloudinary.com/dy8nc5qlb/image/upload/v1702010341/photoshoot/leejdqmrxjj7aywnezk4.jpg"
            alt="/"
            width="215"
            height="217"
            layout="responsive"
            objectFit="cover"
            className="cursor-pointer"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src="https://res.cloudinary.com/dy8nc5qlb/image/upload/v1702016169/hv9hmj2inzwvteellk9l.jpg"
            alt="/"
            width="215"
            height="217"
            layout="responsive"
            objectFit="cover"
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
