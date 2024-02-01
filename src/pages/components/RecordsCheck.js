import React from "react";
import "@fontsource/roboto"; // Defaults to weight 400
import "@fontsource/roboto/400.css"; // Specify weight
import "@fontsource/roboto/400-italic.css"; // Specify weight and style

export const RecordsCheck = (props) => {
  return (
    <div className="text-base card card-side overflow-x-auto justify-between items-center font-bold bg-white text-slate-900 px-6 py-4">
      <div className="flex gap-4 items-center">
        <input type="checkbox" checked="checked" className="checkbox" />
        {props.svg}
        <div className="flex flex-col justify-start">
          <h5 className="text-base Roboto">{props.name}</h5>
          <p className="text-[#6B7280] text-sm">{props.date}</p>
        </div>
      </div>
      <div className="text-green-500">{props.total} ₮</div>
    </div>
  );
};
