import React, { useState, useEffect,useRef} from "react";
import { useInView } from "react-intersection-observer"; 
import events from "../data/event.json"; 
import {motion,useAnimation} from "framer-motion"; 
import eventWeek from "../data/eventw.json";
import eventMonth from "../data/eventm.json";

const C = () => {
  const [active, setActive] = useState("all");
  const [category, setCategory] = useState([]);
  const controls = useAnimation(); 
  const [ref, inView] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 }); // Start animation when in view
    } else {
      controls.start({ opacity: 0, y: 100 }); // Reset when out of view (optional)
    }
  }, [controls, inView]);


  const handleTabClick = (tab) => {
    setActive(tab);
  };

  const getTabClass = (tab) =>
    active === tab ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-700";

  useEffect(() => {
    const fetchData = () => {
      switch (active) {
        case "week":
          setCategory(eventWeek);
          break;
        case "month":
          setCategory(eventMonth);
          break;
        default:
          setCategory(events);
          break;
      }
    };

    fetchData();
  }, [active]);
  


  return (
    <>
      <div >
        <h1 className="font-bold text-[30px] text-gray-800 ml-6 mt-[50px]">Popular Events in INDIA</h1>
        <div className="flex gap-6 ml-8 mt-[20px] text-gray-700 font-semibold text-[24px]">
          <div onClick={() => handleTabClick("all")} className={`cursor-pointer p-4 ${getTabClass("all")}`}>All</div>
          <div onClick={() => handleTabClick("week")} className={`cursor-pointer p-4 ${getTabClass("week")}`}>This Week</div>
          <div onClick={() => handleTabClick("month")} className={`cursor-pointer p-4 ${getTabClass("month")}`}>This Month</div>
        </div>
      </div>

      <div  ref={ref}  className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.map((event, index) => (
            <motion.div
            initial={{opacity:0,y:100}}
            animate={controls}
            transition={{
              delay:0.1,
              duration:0.4
            }}
             key={index} className="bg-white cursor-pointer rounded-lg shadow-md overflow-hidden hover:border-red-500 transition-all">
              <img src={event.image_url} alt={event.event_name} className="w-full h-48 object-cover image-hover-effect" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-700">{event.event_name}</h3>
                <p className="text-gray-600">Location: {event.location}</p>
                <p className="text-gray-600">Fee: ₹{event.fee}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default C;