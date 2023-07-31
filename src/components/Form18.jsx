import React, { useState } from "react";

export default function Form13() {
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
      <div className="flex justify-center items-center h-screen w-screen bg-neutral-900">
        <div className="flex justify-center items-center m-2 p-2 bg-gradient-to-br from-yellow-300 via-orange-400 to-red-600 rounded">
          <div className="px-10 py-5 w-[400px] bg-white rounded">
            <form onSubmit={handleSubmit} className="w-full">
              <h4 className="font-semibold text-3xl mb-4 text-center">Login</h4>
              <div className="my-2">
                <label className="font-semibold text-sm">Name:</label>
                <input
                  type="text"
                  className="bg-gray-100 py-1 mt-1 w-full outline-none px-2"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div className="my-2 mt-4">
                <label className="font-semibold text-sm">Email:</label>
                <input
                  type="email"
                  className="bg-gray-100 py-1 mt-1 w-full outline-none px-2"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div className="my-2 mt-4">
                <label className="font-semibold text-sm">Password:</label>
                <input
                  type="password"
                  className="bg-gray-100 py-1 mt-1 w-full outline-none px-2"
                  required
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
              </div>

              <div className="my-2 mt-4">
                <button
                  type="submit"
                  className="py-1 px-6 rounded-sm tracking-widest bg-gradient-to-r from-yellow-300 via-orange-400 to-rose-500 text-white font-semibold"
                >
                  LOGIN
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
