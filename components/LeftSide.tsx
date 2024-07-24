import React from 'react';
import { TbBrandGithub } from "react-icons/tb";
import { SlSocialYoutube, SlSocialLinkedin, SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";

const LeftSide = () => {
  return (
    <div className="fixed left-0 bottom-0 flex flex-col items-center gap-4 text-textLight p-4">
      <div className="flex flex-col items-center gap-4">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <TbBrandGithub />
          </span>
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <SlSocialYoutube />
          </span>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <SlSocialLinkedin />
          </span>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <SlSocialFacebook />
          </span>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <SlSocialInstagram />
          </span>
        </a>
      </div>
      <div className="w-[2px] h-32 bg-textLight mt-6"></div>
    </div>
  );
};

export default LeftSide;
