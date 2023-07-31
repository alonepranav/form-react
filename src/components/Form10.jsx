import React, { useState } from "react";

export default function Form10() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen w-screen bg-slate-300">
        <div className="mx-2 w-full md:w-1/2 bg-white p-5 rounded">
          <form onSubmit={handleSubmit}>
            <h4 className="font-semibold text-3xl mb-5">
              Contact <span className="text-sky-500">Here</span>
            </h4>
            <input
              type="text"
              className="bg-gray-200 py-1.5 px-2 my-2.5 w-full  outline-1 outline-sky-500 placeholder:text-gray-600 placeholder:text-sm"
              placeholder="Enter name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />

            <input
              type="email"
              className="bg-gray-200 py-1.5 px-2 my-2.5 w-full  outline-1 outline-sky-500 placeholder:text-gray-600 placeholder:text-sm"
              placeholder="Enter email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <input
              type="number"
              className="bg-gray-200 py-1.5 px-2 my-2.5 w-full  outline-1 outline-sky-500 placeholder:text-gray-600 placeholder:text-sm"
              placeholder="Enter phone number"
              required
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
            <textarea
              rows={5}
              className="bg-gray-200 py-1.5 px-2 my-2.5 w-full  outline-1 outline-sky-500 placeholder:text-gray-600 placeholder:text-sm resize-none"
              placeholder="Enter message"
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            ></textarea>

            <input
              type="submit"
              className="bg-sky-500 text-white py-1.5 px-5 rounded-sm my-2.5"
              value="Send"
            />
          </form>
        </div>
      </div>
    </>
  );
}
