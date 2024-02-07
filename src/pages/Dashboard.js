import React, { useEffect, useState } from "react";
import { TotalCard } from "./components/TotalCard";
import { GeldLogo } from "./components/Icon/GeldLogo";
import { MiniLogo } from "./components/Icon/MiniLogo";
import { ChipLogo } from "./components/Icon/ChipLogo";
import { UpArrow } from "./components/Icon/UpArrow";
import { DownArrow } from "./components/Icon/DownArrow";
import { Records } from "./components/Records";
import "@fontsource/roboto"; // Defaults to weight 400
import "@fontsource/roboto/400.css"; // Specify weight
import "@fontsource/roboto/400-italic.css"; // Specify weight and style
import axios from "axios";

const Dashboard = () => {
  const [records, setRecords] = useState([]);
  const BASE_URL = "http://localhost:8080";

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("authToken");
      const res = await axios.get(BASE_URL + "/records", {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(res.data);
    } catch (error) {
      alert("recordoo awj chadsangvi ee gj");
    }
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
            href="/"
            className="Roboto text-base font-bold text-center text-slate-900"
          >
            Dashboard
          </a>
          <a
            href="./Record"
            className="Roboto text-center text-slate-900 text-sm"
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
      <div className="flex flex-col gap-5 w-[100%] px-[350px] py-8 bg-[#F3F4F6]">
        <div className="flex w-[100%] justify-between">
          <div className="w-96 h-56 bg-blue-600 rounded-xl p-9 place-content-between flex flex-col">
            <div className="flex items-center gap-2">
              <MiniLogo width="21" height="21" />
            </div>
            <div className="place-content-between flex">
              <div>
                <h1 className="opacity-50 text-white">Cash</h1>
                <h2 className="text-white text-2xl">100,000,00</h2>
              </div>
              <ChipLogo />
            </div>
          </div>
          <TotalCard
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
              >
                <circle cx="4" cy="4" r="4" fill="#84CC16" />
              </svg>
            }
            arrowSvg={<UpArrow />}
            title={"Your Income"}
            total={"1,200,000 ₮"}
          />
          <TotalCard
            title={"Total Expenses"}
            total={"-1,200,000 ₮"}
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
              >
                <circle cx="4" cy="4" r="4" fill="#0166FF" />
              </svg>
            }
            arrowSvg={<DownArrow />}
          />
        </div>
        <div className="flex justify-between">
          <div className="card w-[650px] bg-base-100 shadow-xl">
            <div className="flex h-[20%] items-center px-6 gap-2 ">
              <h2 className="text-base font-bold text-slate-900">
                Income - Expense
              </h2>
            </div>
            <hr></hr>
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
          </div>
          <div className="card w-[650px] bg-base-100 shadow-xl">
            <div className="flex h-[20%] items-center justify-between px-6 gap-2 ">
              <h2 className="text-base font-bold text-slate-900">
                Income - Expense
              </h2>
              <p className="text-base Roboto text-[#64748B]">Jun 1 - Nov 30</p>
            </div>
            <hr></hr>
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
          </div>
        </div>
        <div className="overflow-x-auto card card-side flex flex-col justify-between bg-white">
          <div className="text-base font-bold text-slate-900 px-6 py-4 ">
            Last Records
          </div>
          <hr></hr>
          <div className="px-6">
            {records.map((record) => (
              <Records
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
  );
};

export default Dashboard;
