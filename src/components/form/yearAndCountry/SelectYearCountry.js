import React from "react";

const SelectYearCountry = () => {
  return (
    <div className="flex gap-4 p-4">
      <div className="flex sm:flex-row flex-col gap-2">
        <p className="text-[#0F1629] text-xs  flex items-center justify-center">
          Financial Year
        </p>
        <div>
          <div className="bg-[#EFF2F5] rounded-md">
            <select
              id="countries"
              class="bg-[#EFF2F5]  text-gray-900 text-xs  block w-full  p-2.5 sm:px-8 sm:py-2.5 cursor-pointer"
            >
              <option selected>FY 2023-24</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col gap-2 ">
        <p className="text-[#0F1629] text-xs  flex items-center justify-center">
          Country
        </p>
        <div>
          <div className="bg-[#EFF2F5] rounded-md ">
            <select
              id="countries"
              class="bg-[#EFF2F5]  text-gray-900 text-xs  block w-full  p-2.5 sm:px-8 sm:py-2.5 cursor-pointer"
            >
              <option selected>
                <span>Australia</span>
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectYearCountry;
