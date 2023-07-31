import React from "react";
import { useState } from "react";

export default function Form17() {
  const [formData, setData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleSumit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center bg-gray-200">
        <form
          onSubmit={handleSumit}
          className="flex flex-col container w-[400px] h-auto bg-white rounded-md py-10 px-8"
        >
          <h2 className="my-0 mb-10 text-3xl text-center">Sign Up</h2>
          <input
            type="text"
            className="mb-2 mt-3 px-3 py-1.5 w-full border-2 rounded"
            placeholder="Username"
            value={formData.name}
            onChange={(e) => setData({ ...formData, name: e.target.value })}
            required
          />

          <input
            type="email"
            className="my-2 px-3 py-1.5 w-full border-2 rounded"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setData({ ...formData, email: e.target.value })}
            required
          />

          <input
            type="password"
            className="my-2 px-3 py-1.5 w-full border-2 rounded"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setData({ ...formData, password: e.target.value })}
            required
          />

          <input
            type="number"
            className="my-2 px-3 py-1.5 w-full border-2 rounded"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => setData({ ...formData, phone: e.target.value })}
            required
          />

          <input
            type="submit"
            className="my-2 px-3 py-1.5 w-full border-2 rounded bg-sky-400 text-white tracking-widest font-bold"
            value="Submit"
            onChange={(e) => setData({ ...formData, name: e.target.value })}
          />
        </form>
      </div>
    </>
  );
}
