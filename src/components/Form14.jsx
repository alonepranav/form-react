import React, { useState } from "react";

export default function Form14() {
  const [formData, setFormData] = useState({
    userName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { userName, phone, email, password, confirmPassword } = formData;

    if (userName && phone && email && password && confirmPassword)
      console.log(formData);
    else {
      setError(true);
    }
  };

  const fileds = [
    {
      label: "Username",
      key: "userName",
      type: "text",
    },
    {
      label: "Phone Number",
      key: "phone",
      type: "number",
    },
    {
      label: "Email",
      key: "email",
      type: "email",
    },
    {
      label: "Password",
      key: "password",
      type: "password",
    },
    {
      label: "Confirm Password",
      key: "confirmPassword",
      type: "password",
    },
  ];

  return (
    <>
      <div className="flex justify-center items-center h-screen w-screen bg-gradient-to-tl from-yellow-300 via-orange-400 to-rose-500">
        <div className="px-5 md:px-10 py-5 w-[400px] m-2 bg-white rounded">
          <form className="w-full">
            <h4 className="font-semibold text-3xl mb-4 text-center">Sign Up</h4>

            {fileds.map((field, i) => {
              return (
                <div key={i} className="my-4">
                  <label className="font-semibold text-base">
                    {field.label}:
                  </label>
                  <input
                    type={field.type}
                    className="bg-gray-100 py-1 mt-1 w-full outline-none px-2"
                    required
                    value={formData[field.key]}
                    onChange={(e) =>
                      setFormData({ ...formData, [field.key]: e.target.value })
                    }
                  />
                  <p className="text-xs mt-1 font-semibold text-red-600">
                    {error
                      ? error && !formData[field.key]
                        ? field.label + " is required!"
                        : ""
                      : ""}
                  </p>
                </div>
              );
            })}

            <div className="my-2 mt-4">
              <button
                type="submit"
                onClick={handleSubmit}
                className="py-1 px-6 rounded-sm tracking-widest bg-gradient-to-r from-yellow-300 via-orange-400 to-rose-500 text-white font-semibold"
              >
                SIGN UP
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
