import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { Sectionwrapper } from '../hoc/index.js';
import { styles } from "../style.js";
import { services } from "../Constants/index.js";
import { fadeIn, textVariant } from "../Utils/Motion.js";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='w-[250px]'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='dark-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-dark-secondary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-light text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  console.log("services:", services); // Debugging line to check if services are correctly imported and have data

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-light-secondary text-[17px] max-w-3xl leading-[30px]'
      >
       I am a web developer with a deep understanding of data structures and a keen interest in quantitative analysis and mathematics. With extensive experience in web development and teaching, I have successfully completed multiple projects, including a startup recognized by New Gen IEDC. My strong conversational skills have also led me to secure the CRCDC Titan by the CRCDC Manav Rachna. Outside of work, I have a great passion for playing basketball 
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default Sectionwrapper(About, "about");
