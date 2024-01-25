import React, { useEffect, useState } from "react";
import { Geld } from "./components/Icon/Geld";
import "@fontsource/roboto"; // Defaults to weight 400
import "@fontsource/roboto/400.css"; // Specify weight
import "@fontsource/roboto/400-italic.css"; // Specify weight and style

const SignUp = () => {
  const [users, setUsers] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const BASE_URL = "http://localhost:8080";

  const newInput = {
    name,
    email,
    password,
  };

  const fetchData = async () => {
    try {
      const res = await fetch(BASE_URL + "/signup");
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      // alert(error.massege);
    }
  };

  const createNode = async () => {
    if (!name || !email || !password || !rePassword) {
      return;
    }
    if (password === rePassword) {
      return;
    }
    try {
      const res = await fetch(BASE_URL + "/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newInput),
      });
      console.log(newInput + "data");

      if (res.ok) alert("Suceessfully created");
      setUsers(data);
    } catch (error) {
      alert(error.message + " aldaa");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <container className="w-[2050px] h-[1080px] flex justify-center">
      <div className="w-[50%] h-[100%] flex flex-col items-center justify-center gap-10">
        <div className="flex gap-2 items-center">
          <Geld />
        </div>
        <div className="flex flex-col items-center">
          <h5 className="font-semibold text-2xl leading-8 Roboto">
            Create Geld account
          </h5>
          <p className="text-slate-700 text-base Roboto">
            Sign up below to create your Wallet account
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="w-[348px] border-[1px]  p-4 rounded-lg h-[48px] bg-[#F3F4F6] border-[#D1D5DB]  Roboto"
          ></input>
          <input
            type="text"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="w-[348px] border-[1px]  p-4 rounded-lg h-[48px] bg-[#F3F4F6] border-[#D1D5DB] Roboto"
          ></input>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="w-[348px] border-[1px]  p-4 rounded-lg h-[48px] bg-[#F3F4F6] border-[#D1D5DB] Roboto"
          ></input>
          <input
            type="password"
            placeholder="Re-password"
            onChange={(e) => setRePassword(e.target.value)}
            value={rePassword}
            className="w-[348px] border-[1px]  p-4 rounded-lg h-[48px] bg-[#F3F4F6] border-[#D1D5DB] Roboto"
          ></input>
          <a
            href="./components/SignUpStep"
            className=" btn w-[348px] rounded-full bg-[#0166FF] text-white flex items-center justify-center"
          >
            Sign up
          </a>
        </div>
        <div className="flex gap-2">
          <p className="text-base Roboto">Already have account?</p>
          <a href="/" className="text-blue-600 text-base Roboto">
            Log in
          </a>
        </div>
      </div>
      <div className="w-[50%] h-[100%] bg-blue-600"></div>
    </container>
  );
};

export default SignUp;
