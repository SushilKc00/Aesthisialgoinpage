import React, { useState } from "react";
import vector from "../assets/Vector.png";
import fb from "../assets/fb.png";
import insta from "../assets/insta.png";
import linkedin from "../assets/linkedin.svg";
import eye from "../assets/eye.svg";
import { Input } from "antd";

interface Istate {
  email: string;
  password: string;
}

export const Login: React.FC = () => {
  const [formdata, setFormData] = useState<Istate>({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("form submit..");
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formdata,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <>
      <div className="relative w-[1280px] h-[609px]">
        {/* left section  */}
        <div className=" hidden md:block absolute w-[620px] h-[555px] left-5 top-[27px] border-spacing-5 rectangle">
          <div className="absolute w-16 h-[22px] left-10 top-[54px] exo-logo"></div>
          <p className="absolute w-[475px] h-[112px] left-[40px] top-[307px] font-semibold text-[38px] leading-[57px] tracking-[0.03em] text-white flex items-center">
            100% Uptime😎 Zero Infrastructure Management
          </p>
          <div>
            <div className="absolute w-5 h-[6px] left-[60px] top-[459px] bg-[#ffffff]  rounded-[74.42px] transform rotate-180"></div>

            <div className="absolute w-[4.87px] h-[5.49px] left-[85.23px] top-[460px] bg-[#ffffff4f]  rounded-[74.42px] transform rotate-180"></div>

            <div className="absolute w-[4.87px] h-[5.49px] left-[95.23px] top-[460px] bg-[#ffffff4f] rounded-[74.42px] transform rotate-180"></div>
          </div>

          <div className="flex flex-row items-start p-0 gap-[10px] absolute w-[119px] h-[17px] left-[40px] top-[500px]">
            <div className="flex p-0 gap-[2px] w-[101px] h-[18px] ">
              <figure className="w-[15px] h-[15px] flex  flex-grow-0 ">
                <img
                  src={vector}
                  alt="logo"
                  className="absolute left-[1.18%] top-[15.13%] bottom-[3.31%] w-[14.05px] h-[14.03px] "
                />
              </figure>
              <p className="flex flex-row  p-0 gap-[10px] w-[84px] h-[18px] font-normal text-xs leading-[18px] order-1 grow-0 text-white">
                aesthisia.com
              </p>
            </div>
          </div>

          <div className="flex flex-row items-start p-0 gap-[6px] absolute w-[56px] h-[15px] left-[549px] top-[500px]">
            <div className="w-[15px] h-[15px] flex flex-none flex-grow-0">
              <img
                src={linkedin}
                alt="linkedinlogo"
                className="absolute left-[0%] right-[0%] top-[0%] bottom-[0%]"
              />
            </div>
            <div className="w-[12.5px] h-[6.5px] flex flex-none flex-grow-0 order-1">
              <img
                src={fb}
                alt="facebooklogo"
                className="absolute left-[42.54%] right-[29.17%] top-[8.33%] bottom-[8.33%]"
              />
            </div>
            <div className="w-[12.5px] h-[12.5px] flex flex-none flex-grow-0 order-2">
              <img
                src={insta}
                alt="facebooklogo"
                className="absolute left-[70.34%] right-[8.4%] top-[22.32%] bottom-[8.33%]"
              />
            </div>
          </div>
        </div>

        {/* right section */}
        <div>
          <div className=" absolute left-[25%] top-[10%] md:left-[930px] md:top-[78px] w-[61px] h-[49px] petal-logo"></div>
          <h1 className="absolute left-[19%] top-[20%] md:left-[827px] md:top-[127px] font-medium w-[266px] h-[44px] text-[34px] capitalize leading-[130%] text-[#020100">
            Welcome <span className="text-[#08a593]">back!</span>
          </h1>
          <p className="absolute left-[22%] top-[28%] md:left-[884px] md:top-[171px] font-medium w-[360px] h-[49px] text-[#667085]">
            Glad to see you, Again!
          </p>

          <form onSubmit={handleSubmit}>
            <div>
              <Input
                placeholder="enter your email"
                className="absolute left-[15%] top-[35%] md:left-[780px] md:top-[219px] w-[360px] h-[49px] box-border rounded-[10px] border-3 border-[#464660] opacity-[0.45]"
                type="email"
                value={formdata.email}
                name="email"
                required
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <div>
              <Input
                placeholder="enter your password"
                className="absolute left-[15%] top-[45%] md:left-[780px] md:top-[290px] w-[360px] h-[49px] box-border rounded-[10px] opacity-[0.45] border-3 border-[#464660]"
                type="password"
                required
                value={formdata.password}
                name="password"
                min={3}
                max={20}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
              <img
                src={eye}
                alt=""
                className="absolute right-[58%] top-[48.65%] md:right-[12%] md:top-[51.13%] md:bottom-[24.13%]"
              />
            </div>
            <p className="absolute left-[35%] top-[56%] md:left-[1038px] md:top-[345px] w-[102px] h-[15px] text-xs leading-[15px] text-center text-[#667085] opacity-[0.5]">
              Forgot Password?
            </p>
            <div className="flex justify-center items-center p-5 gap-[10px] absolute left-[15%] top-[65%] md:left-[780px] md:top-[398px] bg-[#020100] w-[360px] h-[53px] shadow-[0px 20px 32px rgba(2, 1, 0, 0.42] rounded-[10px]">
              <button className="w-[53px] h-[24px] font-semibold text-lg flex items-center text-white tracking-[0.14px]">
                Login
              </button>
            </div>

            <p className="absolute left-[20%] top-[80%] md:left-[842px] md:top-[521px] w-[236px] h-[19px] text-sm text-[#667085] text-center">
              Don’t have an account yet?{" "}
              <span className="text-[#08A593]">Sign Up</span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
