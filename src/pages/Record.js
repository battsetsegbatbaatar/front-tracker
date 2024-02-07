import React, { useEffect, useState } from "react";
import { GeldLogo } from "./components/Icon/GeldLogo";
import { RecordsCheck } from "./components/RecordsCheck";
import { RecordNavbar } from "./components/RecordNavbar";
import axios from "axios";

import "@fontsource/roboto"; // Defaults to weight 400
import "@fontsource/roboto/400.css"; // Specify weight
import "@fontsource/roboto/400-italic.css"; // Specify weight and style

const Record = () => {
  const [records, setRecords] = useState([]);
  const [activeTab, setActiveTab] = useState("Expense");
  const [error, setError] = useState("false");

  const [name, setName] = useState("");
  const [createdat, setCreatedat] = useState("");
  const [total, setTotal] = useState("");
  const [type, setType] = useState("");

  const BASE_URL = "http://localhost:8080";

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("authToken");
      const res = await axios.get(BASE_URL + "/records", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setRecords(res.data);
      console.log(res.data);
      console.log(res);
    } catch (error) {
      console.log(error);
      alert("recordoo awj chadsangvi ee gj");
    }
  };

  const handleTabClick = (type) => {
    setActiveTab(type);
    setType(type);
  };

  const createRecord = async () => {
    if (!total || !name || !type) {
      setError(true);
      return;
    }
    try {
      const token = localStorage.getItem("authToken");
      const res = await axios.post(
        BASE_URL + "records",
        {
          name,
          createdat,
          total,
          type,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log(res.data, "res");
      alert("Success created");
    } catch (error) {
      alert("bolku bnoo hogshoon owgoon");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col w-[2050px] bg-[#F3F4F6] relative">
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
            className="Roboto text-base font-bold text-center text-slate-900"
          >
            Records
          </a>
        </div>
        <div className="flex items-center gap-6">
          <button
            onClick={() => document.getElementById("my_modal_3").showModal()}
            className="btn btn-square w-[200px] bg-[#0166FF] rounded-full text-white Roboto text-sm text-center"
          >
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
          <RecordNavbar
            onclick={() => document.getElementById("my_modal_3").showModal()}
          />
        </div>

        <div className=" w-[70%] flex flex-col gap-4 mt-6">
          <div className="flex justify-between">
            <div className="flex gap-4 items-center">
              <button className="btn bg-[#F9FAFB]">
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
              <button className="btn bg-[#F9FAFB]">
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
                  <summary className="Roboto text-base">Newest First</summary>
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
            {/* <div className="flex flex-col gap-3">
              <h5 className="Roboto text-lg font-bold text-slate-900">Today</h5>
              {records.map((record) => (
                <RecordsCheck
                  key={record.id}
                  name={record.name}
                  date={record.createdat}
                  total={record.total}
                  svg={
                    record.categoryimage === "" ||
                    "https://png.pngtree.com/png-clipart/20230920/ourlarge/pngtree-cute-anime-fluffy-cat-sticker-png-image_10143548.png"
                  }
                />
              ))}
            </div> */}
          </div>
        </div>
      </div>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box w-9/12 max-w-3xl flex flex-col gap-5">
          <form
            method="dialog"
            className="flex justify-between px-6 pt-5 items-center"
          >
            <h5 className="absolute left-7 top-5 Roboto font-bold text-lg">
              {" "}
              Add Record
            </h5>
            <button className="btn btn-sm btn-circle btn-ghost absolute right-6 top-5">
              ✕
            </button>
          </form>
          <hr></hr>
          <form method="dialog" className="w-[100%] flex gap-10">
            <div className="w-[50%] flex flex-col gap-5 justify-center items-center">
              <div
                role="tablist"
                className="tabs tabs-boxed w-[100%] border-[#F3F4F6]"
              >
                <a
                  role="tab"
                  onClick={() => handleTabClick("expense")}
                  className={`tab  tab-rounded-full ${
                    activeTab === "expense" &&
                    `${("tab-active", "bg-blue-600")}`
                  }`}
                >
                  Expense
                </a>
                <a
                  role="tab"
                  onClick={() => handleTabClick("income")}
                  className={`tab  ${
                    activeTab === "income" &&
                    `${("tab-active", "bg-green-600")}`
                  }`}
                >
                  Income
                </a>
              </div>
              <label className="w-[100%] flex flex-col gap-2">
                <legend>Amount</legend>
                <input
                  onChange={(e) => {
                    setTotal(e.target.value);
                    setError(false);
                  }}
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-[100%] border-[#D1D5DB] bg-[#F9FAFB]"
                />
              </label>
              <div className="w-[100%] flex flex-col gap-2">
                <h5 className="">Category</h5>

                <select
                  onChange={(e) => {
                    setName(e.target.value);
                    setError(false);
                  }}
                  className="select rounded-md border border-[#D1D5DB] p-2 bg-[#F9FAFB]"
                >
                  <option disabled selected>
                    {activeTab === "expense"
                      ? "Choose"
                      : "Find or Choose category"}
                  </option>
                  <option>Foot & Drinks</option>
                  <option>Shopping</option>
                  <option>Housing</option>
                  <option>Transportation</option>
                  <option>Vehicle</option>
                  <option>Life & Entertainment</option>
                  <option>Communication, PC</option>
                  <option>Financial expenses</option>
                </select>
              </div>
              <div className="flex w-[100%] justify-between">
                <div>
                  <p>Date</p>
                  <input
                    onChange={(e) => {
                      setCreatedat(e.target.value);
                    }}
                    type="date"
                    className="border w-[170px] rounded-md border-[#D1D5DB] p-2 bg-[#F9FAFB]"
                  ></input>
                </div>
                <div>
                  <p>Time</p>
                  <input
                    onChange={(e) => {
                      setCreatedat(e.target.value);
                    }}
                    type="time"
                    className="border w-[170px] rounded-md border-[#D1D5DB] p-2 bg-[#F9FAFB]"
                  ></input>
                </div>
              </div>
              <button
                onClick={createRecord}
                className={`btn btn-square rounded-full w-[100%] ${
                  activeTab === "expense" ? "bg-blue-600" : "bg-green-600"
                }`}
              >
                Add Record
              </button>
            </div>
            <div className="w-[50%] flex flex-col gap-5">
              <div className="w-[100%] flex flex-col gap-2">
                <h5 className="">Payee</h5>
                <ul className="menu rounded-md border border-[#D1D5DB] p-1 bg-[#F9FAFB]">
                  <li>
                    <details open>
                      <summary className="Roboto text-base">Write here</summary>
                    </details>
                  </li>
                </ul>
              </div>
              <div className="w-[100%] flex flex-col gap-2">
                <h5>Note</h5>
                <textarea
                  placeholder="Write here"
                  className="w-[100%] border border-[#D1D5DB] bg-[#F9FAFB] p-4 rounded-md h-[265px]"
                  rows="4"
                  cols="50"
                ></textarea>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Record;
