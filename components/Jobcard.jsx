import {  FaListAlt  } from 'react-icons/fa';


const Jobcard = ({ id, company, role, NoOfpeopleApplied, status }) => {

 
    // Check if the status is "Closed" and update the background color class

    const bgColor = status === 'Opened' ? 'bg-green-200' : 'bg-red-200';
    const textColor = status === 'Opened' ? 'text-green-500' : 'text-red-500';

  return (
    <div className="flex   justify-center items-center max-w-[430px]   w-full  p-3 flex-col    ">
      <div className=" flex w-full pt-2 rounded-tr-lg  rounded-tl-lg bg-slate-100 gap-10 px-5 items-  ">
        <div className="  flex items-center  text-center  ">
          <span className=" h-12 w-12   flex items-center roundede-2xl  bg-slate-500 justify-center ">
            J
          </span>
        </div>

        <div className="flex  flex-col">
          <h4 className="font-poppins md:font-semibold font-medium  text-[18px] md:text-[20px] leading-[32px]  ">
            {role}
          </h4>
          <p className="font-poppins font-normal text-[16px] leading-[24px]  ">
            {company}
          </p>
        </div>
      </div>

      <div  className="flex w-full p-3 bg-slate-100 rounded-br-lg  rounded-bl-lg justify-between  " >

        <p 
          className="text-[17px]   gap-2 flex font-normal items-center  font-poppins p-2"
        >
          {" "}
         <span className="text-orange-400" > <FaListAlt/> </span>
          
          {NoOfpeopleApplied} People Applied
        </p>

        <div className="flex items-center gap-2">
          <p
           className={`flex w-full px-3 py-1 rounded-md ${textColor} justify-between ${bgColor}`}
          >
            {" "}
            {status}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Jobcard;
