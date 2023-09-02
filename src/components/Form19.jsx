import React, { useState } from "react";

export default function Form13() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen w-screen">
        <div className="flex justify-center items-center flex-wrap h-full w-full bg-[#2b1052] text-white md:px-36">
          <div className="h-fit w-full lg:w-1/2 my-10 flex justify-center items-center">
            <div>
              <p className="text-2xl mb-4 text-purple-700">Get in touch</p>
              <p className="text-4xl md:text-7xl">
                Let's work <br className="hidden md:block" />
                together
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center md:justify-start items-center xl:pr-60">
            <div className="border-2 border-slate-500 px-5 py-9 w-full rounded-2xl mx-5 md:mx-1">
              <form>
                <div className="mb-10">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full pb-3 outline-none border-b border-slate-400 bg-transparent placeholder:text-slate-300 placeholder:text-sm"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div className="mb-10">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full pb-3 outline-none border-b border-slate-400 bg-transparent placeholder:text-slate-300 placeholder:text-sm"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <div className="mb-10">
                  <textarea
                    rows={"4"}
                    placeholder="Your Message"
                    className="w-full pb-3 outline-none border-b border-slate-400 bg-transparent placeholder:text-slate-300 placeholder:text-sm"
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="px-5 md:px-7 py-2 md:py-3 text-sm font-semibold tracking-wide  rounded-full bg-gradient-to-r from-pink-400 via-purple-600 to-cyan-400"
                    style={{
                      boxShadow: "0px 0px 230px 0px pink",
                    }}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
