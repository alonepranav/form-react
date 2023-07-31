import React, { useState } from "react";

export default function Form1() {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="min-h-screen h-fit py-10 w-screen bg-sky-500 flex items-center justify-center px-2">
      {/* Form Div */}
      <div className="">
        <form
          className="bg-white shadow-lg shadow-slate-900 rounded h-[450px] w-[330px] p-4"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl py-3 font-semibold">
            Form with Tailwind css
          </h2>

          <label
            className="text-sm font-semibold mb-1 mt-2 block"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="border-2 border-slate-300 block p-2 w-[100%] rounded"
            type="text"
            id="name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            placeholder="Name"
            required
          />

          <label
            className="text-sm font-semibold mb-1 mt-4 block"
            htmlFor="EmailL"
          >
            Email
          </label>
          <input
            className="border-2 border-slate-300 block p-2 w-[100%] rounded"
            type="email"
            id="emailL"
            placeholder="Email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            required
          />

          <label
            className="text-sm font-semibold mb-1  mt-4 block"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="border-2 p-2 border-slate-300 w-[100%] h-[90px]"
            placeholder="Message"
            id="message"
            value={data.message}
            onChange={(e) => setData({ ...data, message: e.target.value })}
            required
          ></textarea>

          <input
            className="block p-2 w-[100%] rounded mt-4 bg-blue-950 text-white font-semibold tracking-widest"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
}
