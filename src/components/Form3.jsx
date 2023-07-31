import React, { useState } from "react";
import {
  AiOutlineAmazon,
  AiFillPhone,
  AiOutlineGlobal,
  AiOutlineMail,
} from "react-icons/ai";

export default function Form3() {
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
      <div className="min-h-screen w-screen flex justify-center items-center py-36">
        <div className="w-11/12 md:w-9/12 lg:w-7/12 h-fit flex flex-col md:flex-row shadow-lg shadow-slate-400 rounded">
          <div className="w-full md:w-1/2 bg-gradient-to-r from-indigo-800 to-purple-700 p-10">
            <form method="POST" onSubmit={handleSubmit}>
              <h2 className="mb-5 text-2xl text-white">Send us a message</h2>

              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-transparent border-b-2 border-slate-400 pb-1 pt-2 text-gray-300 focus:outline-none"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-transparent border-b-2 border-slate-400 pb-1 pt-2 text-gray-300 focus:outline-none"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full bg-transparent border-b-2 border-slate-400 pb-1 pt-2 text-gray-300 focus:outline-none"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-4">
                <textarea
                  rows={3}
                  placeholder="Message"
                  className="w-full bg-transparent border-b-2 border-slate-400 pb-1 pt-2 text-gray-300 focus:outline-none"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="py-2 px-3 mt-4 bg-[magenta] rounded text-white text-sm font-semibold"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="w-full md:w-1/2 p-10 border">
            <h2 className="mb-3 text-2xl text-black font-semibold">
              Contact us
            </h2>
            <p className="text-sm font-semibold">
              We're open for any suggestion or open to have chat.
            </p>
            <br />
            <div className="inline-flex justify-start items-center gap-3 mt-5">
              <AiOutlineAmazon />
              <p className="text-sm font-semibold">Address : Earth</p>
            </div>
            <br />
            <br />
            <div className="inline-flex justify-start items-center gap-3 mt-5">
              <AiFillPhone />
              <p className="text-sm font-semibold">
                Phone : <span className="text-slate-400">1234567890</span>
              </p>
            </div>
            <br />
            <br />
            <div className="inline-flex justify-start items-center gap-3 mt-5">
              <AiOutlineMail />
              <p className="text-sm font-semibold">
                Email : <span className="text-slate-400">abc@gmail.com</span>
              </p>
            </div>
            <br />
            <br />
            <div className="inline-flex justify-start items-center gap-3 mt-5">
              <AiOutlineGlobal />
              <p className="text-sm font-semibold">
                Website : <span className="text-slate-400">www.abc.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
