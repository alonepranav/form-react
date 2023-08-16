import React, { useState } from "react";

export default function Form13() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen w-screen bg-[url(/forest.jpg)] bg-no-repeat bg-cover">
        <div className="p-10 w-[22rem] rounded-lg bg-transparent backdrop-blur-lg border-2 border-slate-400 text-white">
          <form onSubmit={handleSubmit} className="w-full">
            <h4 className="font-semibold text-3xl mb-4 text-center">Login</h4>
            <div className="my-2">
              <label className="font-semibold ml-1">Email</label>
              <input
                type="email"
                className="bg-transparent border-b-2 rounded py-1 pl-1 mt-1 w-full outline-none placeholder:text-xs placeholder:text-slate-200"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="Enter email"
                required
              />
            </div>

            <br />

            <div className="my-2">
              <label className="font-semibold ml-1">Password</label>
              <input
                type="password"
                className="bg-transparent border-b-2 rounded py-1 pl-1 mt-1 w-full outline-none placeholder:text-xs placeholder:text-slate-200"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                placeholder="Enter password"
                required
              />
            </div>

            <div className="mt-6">
              <input type="checkbox" required className="" />
              &nbsp; Remember me
            </div>

            <div className="my-2 mt-7">
              <button
                type="submit"
                className="rounded-full py-1 tracking-widest text-black font-semibold bg-white w-full"
              >
                LOGIN
              </button>
            </div>

            <p className="text-center text-sm mt-5">
              Don't have an account{" "}
              <a href="#" className="font-semibold text-blue-600">
                Register
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
