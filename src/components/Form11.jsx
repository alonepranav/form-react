import React, { useState } from "react";

export default function Form11() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen w-screen bg-blue-950">
        <div className="flex mx-2 md:w-3/5 h-fit bg-white rounded">
          <div className="w-full md:w-1/2 bg-white p-10">
            <form onSubmit={handleSubmit}>
              <div className="text-center mb-6">
                <h4 className="font-semibold text-3xl mb-1">Sign in</h4>
                <p className="text-sm text-slate-400 font-semibold tracking-wide">
                  Register and enjoy the service
                </p>
              </div>
              <input
                type="text"
                className="border-2 border-gray-200 py-1 px-2 my-2 w-full placeholder:text-gray-600 placeholder:text-sm"
                placeholder="Name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <input
                type="email"
                className="border-2 border-gray-200 py-1 px-2 my-2 w-full placeholder:text-gray-600 placeholder:text-sm"
                placeholder="Email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <input
                type="password"
                className="border-2 border-gray-200 py-1 px-2 my-2 w-full placeholder:text-gray-600 placeholder:text-sm"
                placeholder="Password"
                required
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              <input
                type="password"
                className="border-2 border-gray-200 py-1 px-2 my-2 w-full placeholder:text-gray-600 placeholder:text-sm"
                placeholder="Confirm Password"
                required
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
              />
              <input
                type="submit"
                className="py-1.5 px-2 mt-4 w-full bg-zinc-800 text-white"
                value="Sign in"
              />
            </form>
          </div>
          <div className="hidden sm:block md:w-1/2 bg-[url(/water-hole.jpg)] bg-center bg-cover min-h-full"></div>
        </div>
      </div>
    </>
  );
}
