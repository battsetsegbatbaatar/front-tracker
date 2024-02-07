import React from "react";
import "@fontsource/roboto"; // Defaults to weight 400
import "@fontsource/roboto/400.css"; // Specify weight
import "@fontsource/roboto/400-italic.css"; // Specify weight and style
const Category = [
  { category: "Foot & Drinks" },
  { category: "Shopping" },
  { category: "Housing" },
  { category: "Transportation" },
  { category: "Vehicle" },
  { category: "Life & Entertainment" },
  { category: "Communication, PC" },
  { category: "Financial expenses" },
  { category: "Investments" },
  { category: "Income" },
  { category: "Others" },
];

export const RecordNavbar = (props) => {
  return (
    <div className="overflow-x-auto card card-side py-6 px-4 bg-base-100 flex flex-col gap-6">
      <h5 className="Roboto text-2xl font-bold text-slate-900">Records</h5>
      <button
        onClick={props.onclick}
        className="btn btn-square w-[100%] justify-center bg-[#0166FF] rounded-full text-white Roboto text-lg text-center"
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
        Add
      </button>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs bg-[#F9FAFB]"
      />
      <div className="flex flex-col gap-4">
        <h5 className="Roboto text-lg font-bold text-slate-900">Types</h5>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 pl-2">
            <input type="radio" name="radio-1" className="radio w-5 h-5" />
            All
          </div>
          <div className="flex items-center gap-2 pl-2">
            <input type="radio" name="radio-1" className="radio w-5 h-5" />
            Income
          </div>
          <div className="flex items-center gap-2 pl-2">
            <input type="radio" name="radio-1" className="radio w-5 h-5" />
            Expense
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center">
          <h5 className="Roboto text-lg font-bold text-slate-900">Category</h5>
          <button className="Roboto btn bg-white text-base font-bold text-[#1F2937]">
            Clear
          </button>
        </div>
        <ul className="menu w-56 rounded-box flex flex-col gap-2">
          {Category.map((category, index) => (
            <List key={index} category={category.category} />
          ))}
          <button className="flex items-center Roboto text-lg font-normal text-slate-900 gap-4 pl-4">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.8125 8C15.8125 8.24864 15.7137 8.4871 15.5379 8.66291C15.3621 8.83873 15.1236 8.9375 14.875 8.9375H8.9375V14.875C8.9375 15.1236 8.83873 15.3621 8.66291 15.5379C8.4871 15.7137 8.24864 15.8125 8 15.8125C7.75136 15.8125 7.5129 15.7137 7.33709 15.5379C7.16127 15.3621 7.0625 15.1236 7.0625 14.875V8.9375H1.125C0.87636 8.9375 0.637903 8.83873 0.462087 8.66291C0.286272 8.4871 0.1875 8.24864 0.1875 8C0.1875 7.75136 0.286272 7.5129 0.462087 7.33709C0.637903 7.16127 0.87636 7.0625 1.125 7.0625H7.0625V1.125C7.0625 0.87636 7.16127 0.637903 7.33709 0.462087C7.5129 0.286272 7.75136 0.1875 8 0.1875C8.24864 0.1875 8.4871 0.286272 8.66291 0.462087C8.83873 0.637903 8.9375 0.87636 8.9375 1.125V7.0625H14.875C15.1236 7.0625 15.3621 7.16127 15.5379 7.33709C15.7137 7.5129 15.8125 7.75136 15.8125 8Z"
                fill="#0166FF"
              />
            </svg>
            Add Category
          </button>
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <h5 className="Roboto text-2xl font-bold text-slate-900">
          Amount Range
        </h5>
        <div className="flex gap-4">
          <input
            type="text"
            className="input input-bordered w-[150px] max-w-xs bg-[#F9FAFB]"
          />
          <input
            type="text"
            className="input input-bordered w-[150px] max-w-xs bg-[#F9FAFB]"
          />
        </div>
        <div>
          <input
            type="range"
            min={0}
            max="100"
            value="40"
            className="range w-[80%]"
          />
          <div className="flex justify-between w-[85%]">
            <p>0</p>
            <p>1000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const List = (props) => {
  return (
    <li className="flex justify-between">
      <div>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
            fill="#94A3B8"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.664255 10.5904C0.517392 10.2087 0.517518 9.78563 0.66461 9.40408C2.10878 5.65788 5.7433 3 9.99859 3C14.256 3 17.892 5.66051 19.3347 9.40962C19.4816 9.79127 19.4814 10.2144 19.3344 10.5959C17.8902 14.3421 14.2557 17 10.0004 17C5.74298 17 2.10698 14.3395 0.664255 10.5904ZM14.0004 10C14.0004 12.2091 12.2095 14 10.0004 14C7.79123 14 6.00037 12.2091 6.00037 10C6.00037 7.79086 7.79123 6 10.0004 6C12.2095 6 14.0004 7.79086 14.0004 10Z"
            fill="#94A3B8"
          />
        </svg>
        <a className="Roboto text-base font-normal text-slate-900">
          {props.category}
        </a>
      </div>
    </li>
  );
};
