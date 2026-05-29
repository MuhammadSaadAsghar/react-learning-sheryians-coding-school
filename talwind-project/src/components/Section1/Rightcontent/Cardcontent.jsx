import React from "react";

const Cardcontent = (props) => {
  return (
    <div className="h-full w-full  absolute top-0 left-0 flex flex-col justify-between p-8 ">
      <h2 className="text-2xl bg-white rounded-full h-12 w-12 flex justify-center items-center font-semibold">
        {props.id+1}
      </h2>
      <div>
        <p className="text-lg leading-normal text-white mb-10 text-shadow-2xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sint
          eaque ullam repellat, eveniet placeat.
        </p>
        <div className="flex justify-between">
          <button style={{backgroundColor:props.color}} className=" rounded-full text-lg font-medium px-7 py-2 text-white">
            {props.tag}
          </button>
          <button style={{backgroundColor:props.color}}
            className=" rounded-full text-lg font-medium px-4
        py-2 text-white"
          >
            <i class="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cardcontent;
