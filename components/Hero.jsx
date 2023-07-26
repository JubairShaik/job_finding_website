import { FaSearch, FaMapMarkerAlt ,FaSave } from "react-icons/fa";
import Jobs from "./Jobs"

 
const Hero = () => {
  // const {user} = useContext(UserContext);

  return (
    <section className="flex lg:flex-row pb-14  flex-col px-[1rem] md:px-[5rem]  ">
      {/* -------LeftSidePArt------------ */}
      <div
        className={`flex-1 flex justify-center items-start flex-col    mt-[6rem]  bg-re-500 `}
      >
        <div
          className="flex w-full mt-5 flex-row 
            justify-between gap-10  "
        ></div>
        <h1
          className="  w-full
              ss:leading-[100px] leading-[75px]
              text-[42px]   font-medium  font-poppins ss:text-[70px]"
        >
          Get most exciting <br className="sm:block hidden "  />
          job from all around <br /> the world here
        </h1>

        <p className={` font-poppins    text-slate-400  text-[17px] leading-[30.8px]
         text-justify te max-w-[650px]  font-semibold mt-5`}>
          Work with the largest Network of independent professionals and get
          Things done -from quick turnarounds to big ransformations{" "}
        </p>

        <div className="bg-slate-0 bg-white  p-5 rounded-xl   my-5 w-full ">
          <div className="flex justify-between  ">
            <h2 className="text-xl font-semibold  font-poppins md:text-[1.4rem] p-2"> Search Job </h2>
            <div className="flex items-center gap-2">
            <FaSave className="text-cyan-500 font-poppins"  /> 
            <p className="text-[#3FCAE8] font-poppins" >   Save Search </p>
            </div>
          </div>

          <div className="flex md:flex-row flex-col py-3 my-2 justify-center gap-4 items-center">

            <div className="flex justify-center items-center  rounded-lg w-full py-3  p-4 bg-slate-100">
            <FaSearch />
              <input
                required
                type="email"
                name="email"
                placeholder="eg . UI Designer"
                className="  px-2 w-full placeholder:text-secondary 
                 outline-none
                 bg-slate-100 text-red-500 border-none font-medium"
              />
              
            </div>

            <div className="flex justify-center items-center p-4 w-full  py-3 rounded-lg bg-slate-100 ">
              <FaMapMarkerAlt />
              <input
                required
                type="loaction"
                name="location"
                placeholder="Location "
                className=" px-2 w-full  placeholder:text-secondary bg-slate-100 text-red-500 outline-none border-none   font-medium"
              />
              
            </div>
          </div>


          <button className="py-3 px-6 md:py-4  text-white font-poppins bg-red-400  text-[14px] text-primary bg-blue-gradient rounded-[9px]  w-full outline-none ">
            {" "}
            Search Job
          </button>

        </div>
      </div>

      {/* ----------RightSidePart-------------*/}
       <Jobs/>
      
    </section>
  );
};

export default Hero;

