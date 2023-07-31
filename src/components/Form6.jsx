import React, { useState } from "react";

export default function Form6() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    password: "",
    phone: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="w-screen min-h-screen py-10 bg-cyan-400 flex items-center justify-center">
        <div className="bg-white rounded-xl overflow-hidden shadow-lg shadow-gray-500">
          <h2 className="font-semibold text-3xl text-center bg-gray-200 p-3">
            Create Account
          </h2>

          <form className="p-5" onSubmit={handleSubmit}>
            <div className="">
              <label htmlFor="Nname">Name</label>
              <input
                type="text"
                id="Nname"
                className="mt-1 w-full border border-slate-400 p-1 rounded mb-3"
                required
                placeholder="Enter Your First Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="field">
              <label htmlFor="userEmail">Email</label>
              <input
                type="text"
                id="userEmail"
                placeholder="name@gmail.com"
                className="mt-1 w-full border border-slate-400 p-1 rounded mb-3"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="block  mt-0 mb-3">
              <label htmlFor="userGender">Gender:</label>
              <div id="userGender">
                <input
                  type="radio"
                  name="gender"
                  onChange={(e) => setFormData({ ...formData, gender: "male" })}
                  checked
                />
                <span className="mr-3 inline-block">Male</span>{" "}
                <input
                  type="radio"
                  name="gender"
                  onChange={(e) =>
                    setFormData({ ...formData, gender: "female" })
                  }
                />{" "}
                <span className="mr-3 inline-block">Female</span>
                <input
                  type="radio"
                  name="gender"
                  onChange={(e) =>
                    setFormData({ ...formData, gender: "other" })
                  }
                />{" "}
                <span className="mr-3 inline-block">Other</span>
              </div>
            </div>
            <div className="field">
              <label htmlFor="userPassword">Password</label>
              <input
                type="password"
                id="userPassword"
                placeholder="Enter Password"
                className="mt-1 w-full border border-slate-400 p-1 rounded mb-3"
                required
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>
            <div className="field">
              <label htmlFor="userPhone">Phone Number</label>
              <input
                type="text"
                id="userPhone"
                placeholder="Enter Your Number"
                className="mt-1 w-full border border-slate-400 p-1 rounded mb-3"
                required
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>
            <input
              type="submit"
              value="Submit"
              className="bg-indigo-600 px-5 py-1.5 rounded text-white font-semibold my-2"
            />
          </form>
        </div>
      </div>
    </>
  );
}
