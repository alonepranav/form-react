import React, { useState } from "react";

export default function Form13() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen w-screen bg-blue-500">
        <div className="px-10 py-5 m-2 w-[400px] bg-white rounded">
          <form onSubmit={handleSubmit} className="w-full">
            <h4 className="font-semibold text-3xl mb-4 text-center">Sign Up</h4>
            <div className="my-2">
              <label className="font-bold text-sm">First name</label>
              <input
                type="text"
                className="py-1 mt-1 w-full border-2 outline-none rounded-sm px-2 placeholder:text-gray-500"
                required
                placeholder="First name"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
              />
            </div>
            <div className="my-2">
              <label className="font-bold text-sm">Last name</label>
              <input
                type="text"
                className="py-1 mt-1 w-full border-2 outline-none rounded-sm px-2 placeholder:text-gray-500"
                required
                placeholder="Last name"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
              />
            </div>
            <div className="my-2">
              <label className="font-bold text-sm">Email address</label>
              <input
                type="email"
                className="py-1 mt-1 w-full border-2 outline-none rounded-sm px-2 placeholder:text-gray-500"
                required
                placeholder="Email address"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="my-2">
              <label className="font-bold text-sm">Password</label>
              <input
                type="password"
                className="py-1 mt-1 w-full border-2 outline-none rounded-sm px-2 placeholder:text-gray-500"
                required
                placeholder="Password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>

            <div className="my-2 mt-4">
              <button
                type="submit"
                className="py-1 px-6 w-full rounded  bg-blue-500 text-white font-semibold"
              >
                Sign Up
              </button>
            </div>
            <div className="my-2 mt-4">
              <p className="text-sm font-semibold text-center">
                Already registered ?{" "}
                <a href="#" className="text-blue-700">
                  sign in
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
