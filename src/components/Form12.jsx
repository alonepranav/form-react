import React, { useState } from "react";

export default function Form12() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen w-screen bg-gradient-to-br from-blue-500 via-purple-400 to-pink-500">
        <div className="flex mx-2 px-10 py-5 w-[400px] bg-white rounded">
          <form onSubmit={handleSubmit} className="w-full">
            <h4 className="font-semibold text-3xl mb-4 text-center">
              Say Hello!
            </h4>
            <div className="my-2">
              <label className="font-semibold text-xs">Your Name</label>
              <input
                type="text"
                className="border-b-2 border-gray-300 py-1  w-full outline-none placeholder:text-gray-400 placeholder:text-sm"
                placeholder="Enter your name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="my-2 mt-4">
              <label className="font-semibold text-xs">Your Email</label>
              <input
                type="email"
                className="border-b-2 border-gray-300 py-1  w-full outline-none placeholder:text-gray-400 placeholder:text-sm"
                placeholder="Enter your email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="my-2 mt-4">
              <label className="font-semibold text-xs">Subject</label>
              <input
                type="text"
                className="border-b-2 border-gray-300 py-1  w-full outline-none placeholder:text-gray-400 placeholder:text-sm"
                placeholder="Subject"
                required
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
              />
            </div>
            <div className="my-2 mt-4">
              <label className="font-semibold text-xs">Message</label>
              <textarea
                rows={3}
                className="border-b-2 border-gray-300 py-1  w-full outline-none placeholder:text-gray-400 placeholder:text-sm"
                placeholder="Your message"
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              ></textarea>
            </div>
            <div className="my-2 mt-4">
              <button
                type="submit"
                className="py-1 w-full rounded-full bg-gradient-to-r from-blue-500 via-purple-400 to-pink-500 text-white font-semibold inline-flex justify-center items-center gap-2"
              >
                Submit <span className="text-2xl">&rarr;</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
