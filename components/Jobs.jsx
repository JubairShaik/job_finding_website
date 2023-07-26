import React from "react";
import Jobcard from "./Jobcard";



const feedback = [

  {
     id: "job01",
     role : "Senior Website Developer",
     company: "facebook",
     NoOfpeopleApplied:870,
     status:"Opened"
     
  },
  {
    id: "job02",
     role : "Backend Developer",
     company: "Twitter",
     NoOfpeopleApplied:450,
     status:"Shortlisted"
  },
  {
    id: "job03",
     role : " UI/UX Designer",
     company: "Google",
     NoOfpeopleApplied:450,
     status:"Opened"
  },
 
   

];





const Jobs = () => {
  return (
    <div className="flex-1 flex mb-10 md:mb-0 md:mt-[3rem] items-center justify-center">
      <div
        className=" bg-slate-200 flex-1   mt-[4rem] flex-col  flex justify-center items-center 
          h-[36rem] mb-14 max-w-[28rem] w-full rounded-xl">

        <button
          className="  py-5 w-[90%] mt-[5.5rem] md:mt-14 font-poppins text-white  bg-cyan-600
    
        text-[18px] text-primary bg-blue-gradient 
       rounded-[10px]  "
        >
          Popular Job
        </button>

        <div className="flex flex-wrap  gap-6 mt-4 justify-center w-full
       feedback-container relative z-[1]">
      {feedback.map((card) => <Jobcard key={card.id} {...card} />)}
     </div>

      </div>


   



    </div>
  );
};

export default Jobs;
