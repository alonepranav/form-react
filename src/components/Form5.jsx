import React, { useState } from "react";

export default function Form5() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    gender: "",
    phone: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="w-screen min-h-screen py-10 bg-purple-500 flex items-center justify-center">
        <div className="bg-white p-5 rounded-md shadow-lg shadow-gray-700 font-mono font-semibold">
          <h2 className="text-2xl text-center">REGISTRATION FORM</h2>
          <form onSubmit={handleSubmit} className="my-7">
            <table>
              <tbody>
                <tr>
                  <td>
                    <label htmlFor="lastName">Full Name</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      className="border border-slate-600 rounded w-full p-1 px-2 my-2"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="userGender">Gender</label>
                  </td>
                  <td>
                    <select
                      required
                      className="w-full my-2 border border-slate-600 py-1 px-1"
                      value={formData.gender}
                      onChange={(e) =>
                        setFormData({ ...formData, gender: e.target.value })
                      }
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="userEmail">Email</label>
                  </td>
                  <td>
                    <input
                      type="email"
                      required
                      className="border border-slate-600 rounded w-full p-1 px-2 my-2"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="userPhone">Phone Number</label>
                  </td>
                  <td>
                    <input
                      type="tel"
                      className="border border-slate-600 rounded w-full p-1 px-2 my-2"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="userAddress">Address</label>
                  </td>
                  <td>
                    <textarea
                      rows="3"
                      className="border border-slate-600 rounded w-full p-1 px-2 my-2"
                      required
                      value={formData.address}
                      onChange={(e) =>
                        setFormData({ ...formData, address: e.target.value })
                      }
                    ></textarea>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="text">
              <input type="checkbox" required />
              &nbsp;Agree to terms and conditions
            </div>
            <br />
            <input
              type="submit"
              value="Submit"
              className="bg-purple-600 text-white px-5 py-1.5 rounded"
            />
          </form>
        </div>
      </div>
    </>
  );
}
