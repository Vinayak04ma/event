// import React,{useState,useEffect} from "react"
// import api from "../api/contacts";
// const Calender=()=>{
//     const [active,setActive]=useState("all");
//     const [category,setCategory]=useState([]);
//     const handleTabClick=(tab)=>{
//         setActive(tab);
//     }
//     const getTabClass=(tab)=>{
//        return( active===tab?"border-b-4 border-gray-600":"border-b-2 border-tranparent");
//     }
//     const fetchCate=async()=>{
//         const response=await api.get("/category");
//         return response.data;
       

//     }
//     useEffect(()=>{
//         const all=async()=>{
//             const allcate=await fetchCate();
//             if(allcate) setCategory(allcate)
//         };
//     all();


    
//     },[])
//     return(
//         <>
//         <div>
//             <h1 className="font-bold text-[30px] text-gray-800 ml-6 mt-[50px]">Popular Events in Bhopal</h1>
//             <div className="flex gap-6 ml-8 mt-[20px] text-gray-700 font-semibold text-[24px]">
//                 <div onClick={()=>handleTabClick("all")} className={`cursor-pointer p-4 ${getTabClass("all")} `}>All</div>
//                 <div onClick={()=>handleTabClick("week")} className={`cursor-pointer p-4 ${getTabClass("week")} `}>This Week</div>
//                 <div onClick={()=>handleTabClick("month")} className={`cursor-pointer p-4 ${getTabClass("month")} `}>This Month </div>
//             </div>
//             <div>
//                 <div>
//                  {
//                     category.map(
//                         (cat,index)=>{
//                             return(
//                                 <div>
//                                     <img src={cat.source} alt="" className="w-[200px] h-[100px]"/>
//                                     <h1>{cat.name}</h1>
//                                     <p>{cat.place}</p>
//                                     <p>{cat.inr}</p>
//                                 </div>

//                             );

//                         }
//                     )
//                  }

//                 </div>

//             </div>
                    
//         </div>
//         </>
//     );
// }
// export default Calender;