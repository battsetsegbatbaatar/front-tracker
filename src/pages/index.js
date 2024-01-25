import Image from "next/image";
import { Inter } from "next/font/google";
import { Geld } from "./components/Icon/Geld";
import "@fontsource/roboto"; // Defaults to weight 400
import "@fontsource/roboto/400.css"; // Specify weight
import "@fontsource/roboto/400-italic.css"; // Specify weight and style
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [users, setUsers] = useState([]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const BASE_URL = "http://localhost:8080";

  const fetchData = async () => {
    try {
      const res = await fetch(BASE_URL + "signin");
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      alert(error.message);
    }
  };
  const newInput = {
    email,
    password,
  };
  const signin = async () => {
    try {
      const res = await fetch(BASE_URL + "signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newInput),
      });
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchData;
  }, []);
  return (
    <header className="w-[2050px] h-[1080px] flex justify-center">
      <div className="w-[50%] h-[100%] flex flex-col items-center justify-center gap-10">
        <div className="flex gap-2 items-center">
          <Geld />
        </div>
        <div className="flex flex-col items-center">
          <h5 className="font-semibold text-2xl leading-8 Roboto">
            Welcome Back
          </h5>
          <p className="text-slate-700 text-base Roboto">
            Welcome back, Please enter your details
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            className="w-[348px] border-[1px] p-4 rounded-lg h-[48px] bg-[#F3F4F6] border-[#D1D5DB]  Roboto"
          ></input>
          <input
            type="text"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            className="w-[348px] border-[1px]  p-4 rounded-lg h-[48px] bg-[#F3F4F6] border-[#D1D5DB] Roboto"
          ></input>
          <button className=" btn w-[348px] rounded-full bg-[#0166FF] text-white flex items-center justify-center">
            Log in
          </button>
        </div>
        <div className="flex gap-2">
          <p className="text-base Roboto">Don’t have account?</p>
          <a href="../SignUp" className="text-blue-600 text-base Roboto">
            Sign up
          </a>
        </div>
      </div>
      <div className="w-[50%] h-[100%] bg-blue-600"></div>
    </header>
  );
}
