
import React from "react";
import { motion } from "framer-motion";
import Foot from "../Foot";

const About = () => {
  return (
    <>
      {/* Desktop Layout */}
      <section 
       
        className="hidden md:flex bg-[#04152d] text-white h-[520px] px-20 py-8 items-center gap-[250px]"
      >
        <div className="flex flex-col max-w-md space-y-6 pl-10 pr-8">
          <motion.h1 initial={{opacity:0,y:100}}
       animate={{opacity:1,y:0}}
       transition={{
        delay:0.5,
        duration:0.7
      }} className="font-bold text-4xl">Hi, Event Enthusiasts!</motion.h1>
          <motion.p initial={{opacity:0,y:100}}
       animate={{opacity:1,y:0}}
       transition={{
        delay:0.5,
        duration:0.7
      }} className="text-lg leading-relaxed">
           
             Welcome to <strong>Eventify</strong>, your go-to platform for all things events! 
            Plan, promote, and attend unforgettable events with ease using our powerful tools 
            and smart recommendations.
          </motion.p>
          <motion.a 
          initial={{opacity:0,y:100}}
          animate={{opacity:1,y:0}}
          transition={{
           delay:0.5,
           duration:0.7
         }}
            href="mailto:vinayakmaheshwari57@gmail.com" 
            className="inline-block px-4 py-2 w-[140px] text-center font-bold bg-[#576CBC] text-white rounded-lg"
          >
            Contact Me
          </motion.a>
        </div>

        <motion.img
        initial={{opacity:0,y:100}}
        animate={{opacity:1,y:0}}
        transition={{
         delay:0.5,
         duration:0.7
       }}
          src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRlY2glMjBtZWV0aW5nfGVufDB8fDB8fHww"
          alt="Eventify Experience"
          className="h-[70%] w-[35%] rounded-lg object-cover"
        />
      </section>

      {/* Mobile Layout */}
      <motion.section 
        className="md:hidden flex flex-col-reverse bg-[#04152d] text-white items-center py-6 space-y-6"
      >
        <div className="flex flex-col items-center text-center space-y-4 px-6">
          <motion.h1 initial={{opacity:0,y:100}}
       animate={{opacity:1,y:0}}
       transition={{
        delay:0.3,
        duration:0.7
      }} className="font-bold text-3xl">Hi, Event Enthusiasts!</motion.h1>
          <motion.p initial={{opacity:0,y:100}}
       animate={{opacity:1,y:0}}
       transition={{
        delay:0.3,
        duration:0.7
      }} className="text-base leading-relaxed">
            Welcome to <strong>Eventify</strong>, your go-to platform for all things events! 
            Plan, promote, and attend unforgettable events with ease using our powerful tools 
            and smart recommendations.
          </motion.p>
          <motion.a initial={{opacity:0,y:100}}
       animate={{opacity:1,y:0}}
       transition={{
        delay:0.3,
        duration:0.7
      }}
            href="mailto:vinayakmaheshwari57@gmail.com" 
            className="inline-block px-4 py-2 w-[140px] text-center font-bold bg-[#576CBC] text-white rounded-lg"
          >
            Contact Me
          </motion.a>
        </div>

        <div className="w-full flex justify-center">
          <motion.img
          initial={{opacity:0,y:100}}
          animate={{opacity:1,y:0}}
          transition={{
           delay:0.3,
           duration:0.7
         }}
            src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRlY2glMjBtZWV0aW5nfGVufDB8fDB8fHww"
            alt="Eventify Experience"
            className="w-[80%] max-w-xs rounded-lg object-cover"
          />
        </div>
      </motion.section>

      <Foot />
    </>
  );
};

export default About;
