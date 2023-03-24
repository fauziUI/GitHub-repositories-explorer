import { LogoGithub } from "../assets/LogoGithub";
import { IconArrowDown } from "../assets/IconArrowDown";
import { IconBurger } from "../assets/IconBurger";
import { IconClose } from "../assets/IconClose";
import { IconArrowRight } from "../assets/IconArrowRight";
import { useState } from "react";

export default function Navbar() {
  const [burgerMenu, setBurgerMenu] = useState(false);

  return (
    <nav className="bg-[#24292f] text-white py-5 fixed w-full">
      <div className="flex md:flex-row-reverse justify-between max-w-5xl m-auto items-center">
        <div className="flex items-center">
          <div className="mx-2 cursor-pointer hidden md:flex hover:text-gray-300">
            Sign In
          </div>
          <div className="ml-2 md:mx-2 cursor-pointer border px-2 py-1 rounded-lg hover:text-gray-300">
            Sign Up
          </div>
        </div>
        <div className="cursor-pointer md:hidden">
          <LogoGithub white />
        </div>
        <div
          className="mx-2 cursor-pointer md:hidden"
          onClick={() => setBurgerMenu(!burgerMenu)}
        >
          {burgerMenu ? <IconClose /> : <IconBurger />}
        </div>

        {/* menu view laptop */}
        <div className="md:flex items-center hidden">
          <li className="mx-2 cursor-pointer hidden md:flex ">
            <LogoGithub white />
          </li>
          <li className="mx-2 cursor-pointer flex items-center hover:text-gray-300">
            Product
            <IconArrowDown />
          </li>
          <li className="mx-2 cursor-pointer flex items-center hover:text-gray-300">
            Solutions
            <IconArrowDown />
          </li>
          <li className="mx-2 cursor-pointer flex items-center hover:text-gray-300">
            Open Source
            <IconArrowDown />
          </li>
          <li className="mx-2 cursor-pointer flex items-center hover:text-gray-300 ">
            Pricing
            <IconArrowDown />
          </li>
        </div>

        {/* menu handphone */}
        <div
          className={`absolute top-16 right-0 bg-gray-300 h-screen w-full text-black md:hidden ${
            !burgerMenu && "hidden"
          }`}
        >
          <li className="my-4 px-2 text-2xl cursor-pointer flex items-center justify-between hover:text-gray-300">
              Product
              <IconArrowRight />
            </li>
            <li className="my-4 px-2 text-2xl cursor-pointer flex items-center justify-between hover:text-gray-300">
              Solutions
              <IconArrowRight />
            </li>
            <li className="my-4 px-2 text-2xl cursor-pointer flex items-center justify-between hover:text-gray-300">
              Open Source
              <IconArrowRight />
            </li>
            <li className="my-4 px-2 text-2xl cursor-pointer flex items-center justify-between hover:text-gray-300 ">
              Pricing
              <IconArrowRight />
            </li>
            <div className="flex justify-center px-8 absolute inset-x-0 bottom-40">
              <button className="my-4 text-2xl cursor-pointer hover:text-gray-300 bg-[#24292f] text-white w-full rounded-xl py-2">
                Sign In
              </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
