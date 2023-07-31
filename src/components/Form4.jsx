import React, { useState } from "react";

export default function Form4() {
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
      <div className="w-screen h-screen bg-[url(/image1.jpg)] bg-cover flex items-center justify-center">
        <div className="border-2 backdrop-blur-md border-gray-400 rounded text-white w-5/6 sm:w-3/4 md:w-2/5 lg:w-4/12 p-8">
          <h2 className="text-4xl text-center mb-5">Login</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="w-full border-b-[3px] bg-transparent my-4 placeholder:text-white outline-none py-1 px-1 mb-7"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
            <input
              type="password"
              className="w-full border-b-[3px] bg-transparent my-4 placeholder:text-white outline-none py-1 px-1 mb-7"
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
            />
            <p className="inline-flex justify-between w-full text-sm my-5">
              <span>
                Remember Me <input type="checkbox" className="ml-2" required />
              </span>
              <span>Forgot Password</span>
            </p>

            <input
              type="submit"
              className="text-center rounded-full bg-sky-600 px-2 py-1.5 my-5 w-full"
              value="Log in"
            />

            <p className="text-sm text-center">
              Dont have an account ? <span>Create an Account</span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
