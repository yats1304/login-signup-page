import user_icon from "../Assets/person.png";
import email_icom from "../Assets/email.png";
import password_icon from "../Assets/password.png";
import { useState } from "react";

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");

  const inputWrapperClass =
    "flex items-center justify-center m-auto w-[480px] h-20 bg-[#eaeaea] rounded-lg";
  const imgClass = "ml-[30px] mr-[30px]";
  const inputClass = "h-[50px] w-100 bg-transparent text-[#797979] text-[19px]";
  const submitClass =
    "flex justify-center items-center w-[220px] h-[59px] text-[#fff] bg-[#4c00b4] rounded-[50px] text-[19px] font-bold cursor-pointer";

  return (
    <div className="flex flex-col m-auto mt-20 bg-[#fff] pb-[30px] w-[600px]">
      <div className="flex flex-col items-center gap-[9px] w-[100%] mt-[30px]">
        <div className="text-[#3c009d] text-5xl font-bold">{action}</div>
        <div className="w-[61px] h-[6px] bg-[#3c009d] rounded-lg mt-3"></div>
      </div>
      <div className="mt-[55px] flex flex-col gap-6">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className={inputWrapperClass}>
            <img className={imgClass} src={user_icon} alt="" />
            <input className={inputClass} type="text" placeholder="Name" />
          </div>
        )}

        <div className={inputWrapperClass}>
          <img className={imgClass} src={email_icom} alt="" />
          <input className={inputClass} type="email" placeholder="Email id" />
        </div>
        <div className={inputWrapperClass}>
          <img className={imgClass} src={password_icon} alt="" />
          <input
            className={inputClass}
            type="password"
            placeholder="Password"
          />
        </div>
      </div>
      {action === "Sign Up" ? (
        <div></div>
      ) : (
        <div className="pl-[62px] mt-[27px] text-[#797979] text-lg">
          Forgot Password{" "}
          <span className="text-[#4c00b4] cursor-pointer">Click Here!</span>
        </div>
      )}

      <div className="flex gap-[30px] mt-[60px] md-[60px] ml-auto mr-auto">
        <button
          className={`${submitClass} ${
            action === "Login" ? "bg-gray-400 cursor-not-allowed" : ""
          }`}
          onClick={() => setAction("Sign Up")}
        >
          Sign Up
        </button>
        <button
          className={`${submitClass} ${
            action === "Sign Up" ? "bg-gray-400 cursor-not-allowed" : ""
          }`}
          onClick={() => setAction("Login")}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginSignup;
