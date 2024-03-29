import Image from "next/image";
import { Inter } from "next/font/google";
import { Geld } from "./components/Icon/Geld";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Loading } from "./components/Loading";
import axios from "axios";

import "@fontsource/roboto"; // Defaults to weight 400
import "@fontsource/roboto/400.css"; // Specify weight
import "@fontsource/roboto/400-italic.css"; // Specify weight and style

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("false");
  const [loading, setLoading] = useState("false");

  const BASE_URL = "http://localhost:8080";
  const router = useRouter();

  const fetchUsers = async () => {
    try {
      const res = await axios.get(BASE_URL + "/signin");
      console.log(res.data);
    } catch (error) {
      alert(error.message);
    }
  };

  const signin = async () => {
    setLoading(true);
    try {
      if (!email || !password) {
        setError(true);
        return;
      }

      try {
        const res = await axios.post(BASE_URL + "/signin", {
          email,
          password,
        });

        const { token } = res.data;
        localStorage.setItem("authToken", token);
        

        router.push("/Dashboard");
        alert("Success enter");
      } catch (error) {
        console.log(error);
        alert(error.message);
        router.push("/");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <header className="w-[2050px] h-[1080px] flex justify-center">
      {loading === false ? (
        <Loading />
      ) : (
        <div className="w-[2050px] h-[1080px] flex justify-center">
          {" "}
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
                  setError(false);
                }}
                value={email}
                className={`w-[348px] border-[1px]  p-4 rounded-lg h-[48px] bg-[#F3F4F6]  Roboto ${
                  error === true ? "border-red-500" : "border-[#D1D5DB]"
                }`}
              ></input>
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
                value={password}
                className={`w-[348px] border-[1px]  p-4 rounded-lg h-[48px] bg-[#F3F4F6]  Roboto ${
                  error === true ? "border-red-500" : "border-[#D1D5DB]"
                }`}
              ></input>
              <a
                onClick={signin}
                className=" btn w-[348px] rounded-full bg-[#0166FF] text-white flex items-center justify-center"
              >
                Log in
              </a>
            </div>
            <div className="flex gap-2">
              <p className="text-base Roboto">Don’t have account?</p>
              <a href="../SignUp" className="text-blue-600 text-base Roboto">
                Sign up
              </a>
            </div>
          </div>
          <div className="w-[50%] h-[100%] bg-blue-600"></div>
        </div>
      )}
    </header>
  );
}
