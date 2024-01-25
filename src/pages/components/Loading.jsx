import React from "react";
import { GeldIcon } from "./Icon/GeldIcon";
import { LoadingIcon } from "./Icon/LoadingIcon";
import "@fontsource/roboto"; // Defaults to weight 400
import "@fontsource/roboto/400.css"; // Specify weight
import "@fontsource/roboto/400-italic.css"; // Specify weight and style

export const Loading = () => {
  return (
    <div className="w-[2050px] h-[1000px] flex flex-col justify-center items-center gap-12">
      <div className="flex gap-2">
        <GeldIcon />
      </div>
      <div className="flex flex-col items-center gap-3">
        <div>
          {" "}
          <LoadingIcon />
        </div>
        <p className=" font-semibold text-base Roboto leading-6">
          Түр хүлээнэ үү...
        </p>
      </div>
    </div>
  );
};
