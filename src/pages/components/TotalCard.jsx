import React from "react";
import "@fontsource/roboto"; // Defaults to weight 400
import "@fontsource/roboto/400.css"; // Specify weight
import "@fontsource/roboto/400-italic.css"; // Specify weight and style

export const TotalCard = (props) => {
  return (
    <div className="card card-side bg-base-100 shadow-xl flex flex-col w-[420px]">
      <div className="flex h-[20%] items-center px-6 gap-2 ">
        {props.svg}
        <h5 className="text-base font-bold text-slate-900">{props.title}</h5>
      </div>
      <hr></hr>
      <div className="flex flex-col gap-8 px-6 py-5">
        <div className="">
          <h1 className="Roboto text-4xl font-bold text-slate-900">
            {props.total}
          </h1>
          <p className="text-lg Roboto text-[#64748B]">Your Income Amount</p>
        </div>
        <div className="flex gap-2">
          {props.arrowSvg}
          <p>32% from last month</p>
        </div>
      </div>
    </div>
  );
};
