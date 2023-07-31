import React, { useState } from "react";

export default function Form8() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen w-screen bg-gradient-to-tl from-violet-500 to-violet-700">
        <div className="p-5 bg-white rounded-lg h-fit w-[420px] mx-1">
          <form className="" onSubmit={handleSubmit}>
            <h4 className=" text-2xl md:text-3xl font-bold tracking-wider font-sans mb-7">
              Signup
            </h4>

            <div className="my-3 w-full">
              <label className="font-semibold block mb-1">Name</label>
              <input
                className="border-2 px-3 rounded py-1 border-stone-400 w-full hover:ring-1 outline-none"
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
                required
              />
            </div>
            <div className="my-3 w-full">
              <label className="font-semibold block mb-1">Email</label>
              <input
                className="border-2 px-3 rounded py-1 border-stone-400 w-full hover:ring-1 outline-none"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
                required
              />
            </div>
            <div className="my-3 w-full">
              <label className="font-semibold block mb-1">Password</label>
              <input
                className="border-2 px-3 rounded py-1 border-stone-400 w-full hover:ring-1 outline-none"
                type="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    password: e.target.value,
                  })
                }
                required
              />
            </div>

            <button
              type="submit"
              className="mt-5 bg-violet-700 text-white tracking-widest font-semibold rounded py-1.5 w-full"
            >
              Signup
            </button>

            <p className="font-semibold font-sans my-3">
              Already have an account ?{" "}
              <a href="#">
                <span className="text-violet-800">Login</span>
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
