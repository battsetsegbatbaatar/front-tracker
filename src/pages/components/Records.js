import React from "react";
import "@fontsource/roboto"; // Defaults to weight 400
import "@fontsource/roboto/400.css"; // Specify weight
import "@fontsource/roboto/400-italic.css"; // Specify weight and style

export const Records = (props) => {
  return (
    <>
      <div className="flex justify-between items-center py-5">
        <div className="flex gap-4 items-center">
          {props.svg}
          <div className="flex flex-col justify-start">
            <h5 className="text-base Roboto">{props.name}</h5>
            <p className="text-[#6B7280] text-sm">{props.date}</p>
          </div>
        </div>
        <div className="text-green-500">{props.total} ₮</div>
      </div>
      <hr></hr>
    </>
  );
};
