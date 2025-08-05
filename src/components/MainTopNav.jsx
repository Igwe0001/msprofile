import { assets } from "../assets/assets";

function MainTopNav() {
  return (
    <div>
      <div className="w-full flex justify-end pt-5">
        <button className="bg-[#E7E6ED] py-2 px-3 rounded-full gap-2 flex border items-center">
          <div className="rotate-[180deg] p-1 flex">
            <img className="w-[7px] pt-1 " src={assets.arrow} alt="arrow" />
          </div>
          <h1 className="font-bold">Back to planning</h1>
        </button>
      </div>
      <div className="w-full bg-white p-5 flex justify-between mt-5 rounded-full">
        <button className="flex items-center justify-center gap-30 bg-[#E7E6ED] py-2 px-3 rounded-full">
          Experience
          <div className="p-1 flex">
            <img className="w-[7px] pt-1 " src={assets.arrow} alt="arrow" />
          </div>
        </button>
        <button className="flex items-center justify-center gap-30 bg-[#E7E6ED] py-2 px-3 rounded-full">
          Rank
          <div className="p-1 flex">
            <img className="w-[7px] pt-1 " src={assets.arrow} alt="arrow" />
          </div>
        </button>
        <button className="flex items-center justify-center gap-30 bg-[#E7E6ED] py-2 px-3 rounded-full">
          External
          <div className="p-1 flex">
            <img className="w-[7px] pt-1 " src={assets.arrow} alt="arrow" />
          </div>
        </button>
        <button className="flex items-center justify-center gap-30 bg-[#210d8e] p-2 rounded-full text-white w-[200px]">
          Apply Filter
        </button>
      </div>
    </div>
  );
}

export default MainTopNav;
