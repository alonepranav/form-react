import React, { useState } from "react";

export default function Form7() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
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
      <div className="flex justify-center items-center h-screen w-screen bg-gradient-to-tl from-gray-100 to-gray-900">
        <div className="p-5 py-10 bg-white rounded h-fit w-[420px] mx-1">
          <form className="px-0 md:px-5" onSubmit={handleSubmit}>
            <h4 className="text-center text-2xl md:text-3xl mb-10 font-semibold tracking-wider">
              Registration
            </h4>
            <div className="my-3 flex justify-between items-center w-full">
              <label className="text-gray-500 text-sm font-semibold">
                First Name
              </label>
              <input
                className="border px-1 rounded p-0.5 border-gray-400 placeholder:text-gray-500 hover:ring-1 outline-none"
                type="text"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    firstName: e.target.value,
                  })
                }
                placeholder="First name"
                required
              />
            </div>
            <div className="my-3 flex justify-between items-center w-full">
              <label className="text-gray-500 text-sm font-semibold">
                Last Name
              </label>
              <input
                className="border px-1 rounded p-0.5 border-gray-400 placeholder:text-gray-500 hover:ring-1 outline-none"
                type="text"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    lastName: e.target.value,
                  })
                }
                placeholder="Last name"
                required
              />
            </div>
            <div className="my-3 flex justify-between items-center w-full">
              <label className="text-gray-500 text-sm font-semibold">
                Email
              </label>
              <input
                className="border px-1 rounded p-0.5 border-gray-400 placeholder:text-gray-500 hover:ring-1 outline-none"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
                placeholder="Email"
                required
              />
            </div>
            <div className="my-3 flex justify-between items-center w-full">
              <label className="text-gray-500 text-sm font-semibold">
                Password
              </label>
              <input
                className="border px-1 rounded p-0.5 border-gray-400 placeholder:text-gray-500 hover:ring-1 outline-none"
                type="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    password: e.target.value,
                  })
                }
                placeholder="Password"
                required
              />
            </div>
            <div className="my-3 flex justify-between items-center w-full">
              <label className="text-gray-500 text-sm font-semibold">
                Confirm Password
              </label>
              <input
                className="border px-1 rounded p-0.5 border-gray-400 placeholder:text-gray-500 hover:ring-1 outline-none"
                type="password"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    confirmPassword: e.target.value,
                  })
                }
                placeholder="Confirm Password"
                required
              />
            </div>

            <div className="flex justify-center mt-10">
              <button type="submit" className="bg-gray-200 rounded px-5 py-1.5">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
