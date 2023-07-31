import React from "react";

import { AiFillGithub, AiFillInstagram, AiOutlineGithub } from "react-icons/ai";

export default function Home() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="text-center px-2">
        <h1 className="text-3xl font-semibold">Forms with React</h1>
        <br />
        <h3 className="text-[1.2rem]">
          This website is a collection of forms made with ReactJS and Tailwind
          CSS.
        </h3>
        <p className="text-xl">
          <span className="inline-flex justify-center items-center gap-3">
            Github Link
            <AiOutlineGithub />
          </span>
          &nbsp;&nbsp;👉&nbsp;&nbsp;
          <a
            href="https://github.com/alonepranav/form-react/"
            target="_blank"
            className="text-blue-700 font-semibold underline underline-offset-4"
          >
            React Form
          </a>
        </p>

        <div>
          <br />
          <p>Follow me here</p>
          <div className="flex justify-center gap-3">
            <a href="https://github.com/pranavshilavane" target="_blank">
              <button className="py-1 px-12 rounded bg-black text-white">
                <AiFillGithub className="text-2xl" />
              </button>
            </a>
            <a href="https://instagram.com/pranavshilavane" target="_blank">
              <button className="py-1 px-12 rounded text-white instagram">
                <AiFillInstagram className="text-2xl" />
              </button>
            </a>
          </div>
        </div>

        <p>
          <span className="text-base my-6 block font-semibold">
            Packages used :
          </span>
          <br />
        </p>
        <div className="flex flex-col gap-1 justify-center items-center">
          <span>react" : ^18.2.0",</span>
          <span>react-icons : "^4.10.1"</span>
          <span>autoprefixer : "^10.4.14",</span>
          <span>tailwindcss : ":.3.2",</span>
          <span>postcss : "^8.4.24",</span>
          <span>vite : "^4.3.9"</span>
        </div>
        <p className="text-2xl font-semibold">
          <br />
          <br />
          Continue here 👇
        </p>
      </div>
    </div>
  );
}
