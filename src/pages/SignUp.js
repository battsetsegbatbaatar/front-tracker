import React, { useEffect, useState } from "react";
import { Geld } from "./components/Icon/Geld";
import "@fontsource/roboto"; // Defaults to weight 400
import "@fontsource/roboto/400.css"; // Specify weight
import "@fontsource/roboto/400-italic.css"; // Specify weight and style
import { useRouter } from "next/router";

const SignUp = () => {
  const [users, setUsers] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const [error, setError] = useState("false");
  const router = useRouter();

  const BASE_URL = "http://localhost:8080";

  const fetchData = async () => {
    try {
      const res = await fetch(BASE_URL + "/signup");
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      // alert(error.massege);
    }
  };

  const createUsers = async () => {
    if (!name || !email || !password) {
      setError(true);
      return;
    }
    const newInput = {
      name: name,
      email: email,
      password: password,
    };

    try {
      const res = await fetch(BASE_URL + "/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newInput),
      });
      console.log("first");

      if (res.ok) alert("Suceessfully created");
      router.push("/components/SignUpStep");
      setUsers(data);
    } catch (error) {
      alert(error.message + " aldaa");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getInputClassName = () => {
    return `w-[348px] border-[1px] p-4 rounded-lg h-[48px] bg-[#F3F4F6] Roboto ${
      error ? "border-red-500" : "border-[#D1D5DB]"
    }`;
  };
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
            onChange={(e) => {
              setName(e.target.value);
              setError(false);
            }}
            value={name}
            className={getInputClassName()}
          ></input>
          <input
            type="text"
            placeholder="E-mail"
            onChange={(e) => {
              setEmail(e.target.value);
              setError(false);
            }}
            value={email}
            className={getInputClassName()}
          ></input>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
              setError(false);
            }}
            value={password}
            className={getInputClassName()}
          ></input>
          <input
            type="password"
            placeholder="Re-password"
            onChange={(e) => {
              setRePassword(e.target.value);
              setError(false);
            }}
            value={rePassword}
            className={getInputClassName()}
          ></input>
          <a
            onClick={() => createUsers()}
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
