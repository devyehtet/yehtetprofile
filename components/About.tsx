import React from 'react';
import SectionTitle from './SectionTitle';
import { AiFillThunderbolt } from 'react-icons/ai';
import Image from 'next/image';
import { profileImg } from '@/public';

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" />

      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            Hello! My name is Ye Htet, and I have been working in Digital Advertising since 2014. With over 9 years of experience in agency settings, I have honed my ability to handle work pressure and thrive in dynamic environments.
          </p>
          
          <p>
            My passion for digital advertising drives me to create and manage impactful ad campaigns across various platforms. I am particularly interested in working with <span className="text-textGreen">Demand Side Platforms (DSP)</span> and <span className="text-textGreen">Supply Side Platforms (SSP)</span>. Additionally, I am a publisher with Google AdSense and Google AdManager.
          </p>
          
          <p>
            My extensive background has equipped me with the skills to navigate challenges and deliver effective solutions, making me adept at meeting both client needs and industry demands.
          </p>

          <p>
            Here are a few technologies I have been working with recently:
          </p>
          
          <ul className="text-sm font-titleFont grid grid-cols-2 gap-4 mt-6">
            <li className="flex items-center gap-2">
              <AiFillThunderbolt className="text-textGreen" />
              DV360 (Display & Video 360)
            </li>
            <li className="flex items-center gap-2">
              <AiFillThunderbolt className="text-textGreen" />
              Google AdWords
            </li>
            <li className="flex items-center gap-2">
              <AiFillThunderbolt className="text-textGreen" />
              Google AdManager
            </li>
            <li className="flex items-center gap-2">
              <AiFillThunderbolt className="text-textGreen" />
              Facebook Ads Manager
            </li>
            <li className="flex items-center gap-2">
              <AiFillThunderbolt className="text-textGreen" />
              LinkedIn Ads Manager
            </li>
            <li className="flex items-center gap-2">
              <AiFillThunderbolt className="text-textGreen" />
              Ad Exchange Network
            </li>
            <li className="flex items-center gap-2">
              <AiFillThunderbolt className="text-textGreen" />
              NexD (Creative)
            </li>
            <li className="flex items-center gap-2">
              <AiFillThunderbolt className="text-textGreen" />
              Epom (AdServer)
            </li>
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group"> 
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg"> 
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image 
                className="rounded-lg h-full object-cover"
                src={profileImg}
                alt="Profile Image"
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300">
              </div>
              </div>
              </div>
                <div
                  className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"
                ></div>
              
            
          
        </div>
      </div>
    </section>
  );
}

export default About;
