import React,{useState} from "react";
import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from 'react-icons/bs';



const Carousel=({data})=>{
    console.log(typeof data);
    const [slide,setSlide]=useState(0);
    const nextSlide=()=>{
        setSlide(slide===data.length-1?0:slide+1);

    }
    const prevSlide=()=>{
        setSlide(slide===0?data.length-1:slide-1);

    }
    
       return (
        <>
        <div className="flex justify-center items-center  h-[480px] relative z-10 ">
            <BsArrowLeftCircleFill onClick={prevSlide} className="absolute w-[2rem] h-[2rem] color left-[1rem] cursor-pointer"/> 
             {
         data.map((item,idx)=>{
            return <img src={item.src} alt={item.alt} key={idx} className={slide===idx?"boxShadow w-full h-full":"hidden"}/>
         }
       
    )
     } <BsArrowRightCircleFill onClick={nextSlide} className="absolute w-[2rem] h-[2rem] color right-[1rem] cursor-pointer"/>
    
     </div> 
     <div classname="flex justify-center items-center pl-[400px] ">
        {data.map((_,idx)=>{
            return <button key={idx} onClick={()=>{setSlide(idx)}} className={slide===idx ?" bg-black h-[0.5rem] w-[0.5rem] rounded-full border-none outline-none cursor-pointer mx-1 my-1":"  bg-gray-500 h-[0.5rem] w-[0.5rem] rounded-full border-none outline-none mx-1 my-1 cursor-pointer"} ></button>
        }
        )}
     </div>
     </>


       );

}
export default Carousel;