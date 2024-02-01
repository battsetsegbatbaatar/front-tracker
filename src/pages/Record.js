import React, { useEffect, useState } from "react";
import { GeldLogo } from "./components/Icon/GeldLogo";
import { RecordsCheck } from "./components/RecordsCheck";
import { RecordNavbar } from "./components/RecordNavbar";
import "@fontsource/roboto"; // Defaults to weight 400
import "@fontsource/roboto/400.css"; // Specify weight
import "@fontsource/roboto/400-italic.css"; // Specify weight and style

const Record = () => {
  const [records, setRecords] = useState([]);
  const [visible, setVisible] = useState(false);
  const BASE_URL = "http://localhost:8080";

  const fetchData = async () => {
    try {
      const res = await fetch(BASE_URL + "/records");
      const data = await res.json();
      setRecords(data);
      console.log(records);
    } catch (error) {
      alert("recordoo awj chadsangvi ee gj");
    }
  };
  const openModal = (action, product) => {
    if (action === "create") setVisible(true);
    console.log(product);
  };
  const closeMadal = () => {
    setVisible(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex flex-col w-[2050px] bg-[#F3F4F6] ">
      <div className="flex w-[100%] px-[350px] py-4 bg-white justify-between items-center">
        <div className="flex gap-6 items-center">
          <GeldLogo />
          <a
            href="./Dashboard"
            className="Roboto text-center text-slate-900 text-sm"
          >
            Dashboard
          </a>
          <a
            href="#"
            onClick={() => openModal("update")}
            className="Roboto text-base font-bold text-center text-slate-900"
          >
            Records
          </a>
        </div>
        <div className="flex items-center gap-6">
          <button className="btn btn-square w-[200px] bg-[#0166FF] rounded-full text-white Roboto text-sm text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M17.5 10C17.5 10.1658 17.4342 10.3247 17.3169 10.4419C17.1997 10.5592 17.0408 10.625 16.875 10.625H10.625V16.875C10.625 17.0408 10.5592 17.1997 10.4419 17.3169C10.3247 17.4342 10.1658 17.5 10 17.5C9.83424 17.5 9.67527 17.4342 9.55806 17.3169C9.44085 17.1997 9.375 17.0408 9.375 16.875V10.625H3.125C2.95924 10.625 2.80027 10.5592 2.68306 10.4419C2.56585 10.3247 2.5 10.1658 2.5 10C2.5 9.83424 2.56585 9.67527 2.68306 9.55806C2.80027 9.44085 2.95924 9.375 3.125 9.375H9.375V3.125C9.375 2.95924 9.44085 2.80027 9.55806 2.68306C9.67527 2.56585 9.83424 2.5 10 2.5C10.1658 2.5 10.3247 2.56585 10.4419 2.68306C10.5592 2.80027 10.625 2.95924 10.625 3.125V9.375H16.875C17.0408 9.375 17.1997 9.44085 17.3169 9.55806C17.4342 9.67527 17.5 9.83424 17.5 10Z"
                fill="white"
              />
            </svg>
            Record
          </button>
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-[100%] px-[350px] py-8 gap-5">
        <div className="w-[30%]">
          <RecordNavbar />
        </div>

        <div className=" w-[70%] flex flex-col gap-4 mt-6">
          <div className="flex justify-between">
            <div className="flex gap-4 items-center">
              <button className="btn bg-[#E5E7EB]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.7906 5.23017C13.0777 5.52875 13.0684 6.00353 12.7698 6.29063L8.83208 10L12.7698 13.7094C13.0684 13.9965 13.0777 14.4713 12.7906 14.7698C12.5035 15.0684 12.0287 15.0777 11.7302 14.7906L7.23017 10.5406C7.08311 10.3992 7 10.204 7 10C7 9.79599 7.08311 9.60078 7.23017 9.45938L11.7302 5.20938C12.0287 4.92228 12.5035 4.93159 12.7906 5.23017Z"
                    fill="#0F172A"
                  />
                </svg>
              </button>
              <p className="Roboto text-base font-bold text-slate-900">
                Last 30 Days
              </p>
              <button className="btn bg-[#E5E7EB]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.20938 14.7698C6.92228 14.4713 6.93159 13.9965 7.23017 13.7094L11.1679 10L7.23017 6.29062C6.93159 6.00353 6.92228 5.52875 7.20938 5.23017C7.49647 4.93159 7.97125 4.92228 8.26983 5.20937L12.7698 9.45937C12.9169 9.60078 13 9.79599 13 10C13 10.204 12.9169 10.3992 12.7698 10.5406L8.26983 14.7906C7.97125 15.0777 7.49647 15.0684 7.20938 14.7698Z"
                    fill="#0F172A"
                  />
                </svg>
              </button>
            </div>
            <ul className="menu bg-[#F9FAFB] w-56 rounded-box">
              <li>
                <details open>
                  <summary className="Roboto text-base">My Files</summary>
                </details>
              </li>
            </ul>
          </div>
          <div className="text-base card card-side overflow-x-auto justify-between font-bold bg-white text-slate-900 px-6 py-4">
            <div className="flex gap-4 items-center">
              <input type="checkbox" checked="checked" className="checkbox" />
              <h5 className="text-base Roboto">Select All</h5>
            </div>
            <div className="text-[#94A3B8] text-base Roboto">-35500 ₮</div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h5 className="Roboto text-lg font-bold text-slate-900">Today</h5>
              {records.map((record) => (
                <RecordsCheck
                  key={record.id}
                  name={record.name}
                  date={record.createdat}
                  total={record.total}
                  // svg={record.categoryimage}
                />
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <h5 className="Roboto text-lg font-bold text-slate-900">
                Yesterday
              </h5>
              {records.map((record) => (
                <RecordsCheck
                  key={record.id}
                  name={record.name}
                  date={record.createdat}
                  total={record.total}
                  // svg={record.categoryimage}
                />
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <h5 className="Roboto text-lg font-bold text-slate-900">
                2024.01.31
              </h5>
              {records.map((record) => (
                <RecordsCheck
                  key={record.id}
                  name={record.name}
                  date={record.createdat}
                  total={record.total}
                  // svg={record.categoryimage}
                />
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <h5 className="Roboto text-lg font-bold text-slate-900">
                2024.01.30
              </h5>
              {records.map((record) => (
                <RecordsCheck
                  key={record.id}
                  name={record.name}
                  date={record.createdat}
                  total={record.total}
                  // svg={record.categoryimage}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {visible && <div></div>}
    </div>
  );
};

export default Record;
