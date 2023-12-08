import React from 'react';
import IgImg1 from '../public/images/green.jpg';
import IgImg2 from '../public/images/giraffe.jpg';
import IgImg3 from '../public/images/gen.jpg';
import IgImg4 from '../public/images/beads.jpg';
import IgImg5 from '../public/images/gen5.jpg';
import IgImg6 from '../public/images/girl.jpg';
import InstagramImg from './InstagramImg';

const Instagram = () => {
  return (
    <div className="max-w-[1240px] mx-auto text-center py-24">
      <p className="text-2xl font-bold">Follow me on Instagram</p>
      <p className="pb-4">
        <a
          href="https://www.instagram.com/mutharia_jr/"
          target="_blank"
          rel="noreferrer"
        >
          @mutharia_jr
        </a>
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4">
        <a
          href="https://www.instagram.com/mutharia_jr/"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramImg socialImg={IgImg1} />
        </a>
        <a
          href="https://www.instagram.com/mutharia_jr/"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramImg socialImg={IgImg2} />
        </a>
        <a
          href="https://www.instagram.com/mutharia_jr/"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramImg socialImg={IgImg3} />
        </a>
        <a
          href="https://www.instagram.com/mutharia_jr/"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramImg socialImg={IgImg4} />
        </a>
        <a
          href="https://www.instagram.com/mutharia_jr/"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramImg socialImg={IgImg5} />
        </a>
        <a
          href="https://www.instagram.com/mutharia_jr/"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramImg socialImg={IgImg6} />
        </a>
      </div>
    </div>
  );
};

export default Instagram;
