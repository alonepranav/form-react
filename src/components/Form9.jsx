import React, { useState } from "react";

export default function Form9() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen w-screen bg-gradient-to-tl from-rose-500 to-purple-500">
        <div className="bg-white p-5 rounded w-full md:w-1/2 mx-2">
          <h4 className="font-semibold text-2xl text-center">React JS Form</h4>

          <form onSubmit={handleSubmit}>
            <div className="my-4">
              <label htmlFor="nameN" className="">
                Your Name
              </label>
              <input
                type="text"
                id="nameN"
                className="border-2 border-stone-300 py-1 px-2 mt-1.5 w-full rounded outline-sky-500"
                placeholder="Name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="my-4">
              <label htmlFor="email" className="">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="border-2 border-stone-300 py-1 px-2 mt-1.5 w-full rounded outline-sky-500"
                placeholder="Email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="my-4">
              <label htmlFor="phone" className="">
                Your Phone
              </label>
              <input
                type="tel"
                id="phone"
                className="border-2 border-stone-300 py-1 px-2 mt-1.5 w-full rounded outline-sky-500"
                placeholder="Phone"
                required
                value={formData.mobile}
                onChange={(e) =>
                  setFormData({ ...formData, mobile: e.target.value })
                }
              />
            </div>
            <p className="text-center my-3 text-sm">
              <input type="checkbox" required className="mr-1" /> I agree all
              statements in{" "}
              <a href="#" className="underline">
                Terms of service
              </a>
            </p>
            <div className="my-7 text-center">
              <input
                type="submit"
                value="Register"
                className="bg-gradient-to-l from-blue-500 to-purple-500 text-white tracking-wide font-semibold py-1.5 px-7 rounded"
              />
            </div>
            <p className="text-center my-3 text-sm">
              Already have an account?{" "}
              <a href="#" className="underline font-bold">
                Login here
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
