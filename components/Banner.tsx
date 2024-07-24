import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section 
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <motion.h3 
        initial={{ y: 10, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg font-titleFont tracking-wide text-textGreen"
      >
        Hi, my name is 
      </motion.h3>
        
      <motion.h1
        initial={{ y: 10, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col"
      > 
        Ye Htet. 
        <span className="text-textDark mt-2 lgl:mt-4"> 
          Building the Future of Digital Advertising
        </span> 
      </motion.h1>
        
      <motion.p 
        initial={{ y: 10, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base md:max-w-[650px] text-textDark font-medium"
      > 
        With over 9 years of experience in digital advertising, 
        I have excelled in roles as both a Media Buyer and Media Planner. 
        My extensive background in agency life and retail has honed my skills 
        in managing and executing comprehensive strategies in Social Media Marketing, 
        Social Media Advertising, Programmatic Advertising, 
        and Digital Marketing Strategic Planning.
      </motion.p>

      <motion.a 
        href="https://google.com" 
        target="_blank"
        initial={{ y: 10, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.5, delay: 0.9 }}
        className="text-textGreen  relative cursor-pointer h-7 group"
      > 
        Learn More
      </motion.a>

      <motion.button
        initial={{ y: 10, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.5, delay: 1.0 }}
        className="w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300"
      >
        Check out my Project!
      </motion.button>
    </section>
  );
};

export default Banner;
