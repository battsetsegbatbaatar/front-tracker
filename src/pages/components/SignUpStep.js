import React, { useState } from "react";
import { Geld } from "./Icon/Geld";
import { Money } from "./Icon/Money";
import { CoinsIcon } from "./Icon/CoinsIcon";
import { GoodJob } from "./Icon/GoodJob";
import "@fontsource/roboto"; // Defaults to weight 400
import "@fontsource/roboto/400.css"; // Specify weight
import "@fontsource/roboto/400-italic.css"; // Specify weight and style
import { handleClientScriptLoad } from "next/script";
import { useRouter } from "next/router";

const SignUpStep = () => {
  const [step, setStep] = useState(1);

  const handleStepChange = (newStep) => {
    setStep(step + 1);
  };
  const router = useRouter("");
  return (
    <div>
      {step == 1 && (
        <div className="flex flex-col items-center w-[2050px] h-[1080px] pt-10 pb-[400px] gap-[141px]">
          <div className="flex flex-col gap-12 items-center">
            <Geld />
            <div>
              <ul className="steps min-w-[300px]">
                <li className={`step ${step === 1 && "step-primary"}`}>
                  Currency
                </li>
                <li className={`step ${step === 2 && "step-primary"}`}>
                  Balance
                </li>
                <li className={`step ${step === 3 && "step-primary"}`}>
                  Finish
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col w-[400px]">
            <div className="flex flex-col items-center gap-12">
              <div className="flex flex-col items-center">
                <Money />
                <h5 className="font-semibold text-2xl leading-8 Roboto">
                  Select base currency
                </h5>
              </div>
              <div className="flex flex-col gap-3">
                <select className="select select-bordered  w-full max-w-[100%] bg-[#F3F4F6]">
                  <option
                    className="font-semibold text-xl leading-8 Roboto"
                    disabled
                    selected
                  >
                    MNT - Mongolia Tugrik
                  </option>
                  <option>Han Solo</option>
                  <option>Greedo</option>
                </select>
                <p className=" text-slate-700 text-xs Roboto">
                  Your base currency should be the one you use most often. All
                  transaction in other currencies will be calculated based on
                  this one
                </p>
              </div>
              <a
                onClick={handleStepChange}
                className=" btn w-[100%] rounded-full bg-[#0166FF] text-white flex items-center justify-center"
              >
                Confirm
              </a>
            </div>
          </div>
        </div>
      )}
      {step == 2 && (
        <div className="flex flex-col items-center w-[2050px] h-[1080px] pt-10 pb-[400px] gap-[141px]">
          <div className="flex flex-col gap-12 items-center">
            <Geld />
            <div>
              <ul className="steps min-w-[300px]">
                <li className="step step-primary">Currency</li>
                <li className={`step ${step === 2 && "step-primary"}`}>
                  Balance
                </li>
                <li className={`step ${step === 3 && "step-primary"}`}>
                  Finish
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col w-[400px]">
            <div className="flex flex-col items-center gap-12">
              <div className="flex flex-col items-center gap-4">
                <CoinsIcon />
                <h5 className="font-semibold text-2xl leading-8 Roboto">
                  Set up your cash Balance
                </h5>
              </div>
              <div className="flex flex-col gap-3 w-[100%]">
                <input
                  type="text"
                  placeholder="Email"
                  className="input input-bordered w-[100%]"
                />
                <p className=" text-slate-700 text-xs Roboto">
                  How much cash do you have in your wallet?
                </p>
              </div>
              <a
                onClick={handleStepChange}
                className=" btn w-[100%] rounded-full bg-[#0166FF] text-white flex items-center justify-center"
              >
                Confirm
              </a>
            </div>
          </div>
        </div>
      )}
      {step == 3 && (
        <div className="flex flex-col w-[2050px] h-[1080px] pt-10 pb-[400px] gap-[141px]">
          <div className="flex flex-col gap-12 items-center">
            <Geld />
            <div>
              <ul className="steps min-w-[300px]">
                <li className="step step-primary">Currency</li>
                <li className="step step-primary">Balance</li>
                <li className={`step ${step === 3 && "step-primary"}`}>
                  Finish
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col items-center justify-center gap-12">
              <div className="flex flex-col items-center">
                <GoodJob />
                <h5 className="font-semibold text-2xl leading-8 Roboto">
                  Good Job!
                </h5>
              </div>
              <div className="flex flex-col gap-3">
                <p className="w-[384px] text-slate-700 text-xs Roboto">
                  Your very first account has been created. Now continue to
                  dashboard and start tracking
                </p>
              </div>
              <a
                onClick={router.push("/")}
                className=" btn w-[348px] rounded-full bg-[#0166FF] text-white flex items-center justify-center"
              >
                Go to Dashboard
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default SignUpStep;
