import React, { useState } from "react";

export default function Form2() {
  const [formType, setFormType] = useState("signin");
  const [signin, setSignin] = useState({
    email: "",
    password: "",
  });
  const [signup, setSignup] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    console.log(signin);
  };
  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    console.log(signup);
  };

  return (
    <>
      <div className="min-h-screen h-fit w-screen bg-blue-950 flex justify-center items-center py-10 md:py-1">
        <div className="flex justify-center items-center flex-col md:flex-row w-fit md:w-4/5 h-5/6 bg-white rounded shadow-md shadow-white p-2 md:p-10 ">
          <div className="flex h-full md:w-1/2 p-5">
            {formType === "signin" ? (
              <div className="w-full mt-10 md:mt-1">
                <h3 className="text-2xl text-sky-600 font-semibold">SIGN IN</h3>
                <form className="my-5" onSubmit={handleSignInSubmit}>
                  <input
                    type="email"
                    className="p-1 px-2 rounded-sm border focus:ring-0 focus:outline-none border-gray-600 text-black border-solid w-full placeholder:text-slate-700 placeholder:text-sm mb-8"
                    placeholder="Email"
                    value={signin.email}
                    onChange={(e) =>
                      setSignin({ ...signin, email: e.target.value })
                    }
                    required
                  />
                  <input
                    type="password"
                    className="p-1 px-2 rounded-sm border focus:ring-1 focus:outline-none border-gray-600 text-black border-solid w-full placeholder:text-slate-700 placeholder:text-sm mb-4"
                    placeholder="Password"
                    value={signin.password}
                    onChange={(e) =>
                      setSignin({ ...signin, password: e.target.value })
                    }
                    required
                  />

                  <p className="text-sky-700 text-sm font-semibold mb-4">
                    Forgot Password
                  </p>

                  <input
                    type="submit"
                    value={"SIGN IN"}
                    className="p-1.5 bg-sky-600 rounded-sm  text-white border-solid w-full text-sm font-semibold mb-3 shadow-md shadow-sky-700"
                  />

                  <p className="text-sky-700 text-sm font-semibold mb-4 mt-2">
                    <span className="text-black">Not a member ? </span>
                    <span onClick={() => setFormType("signup")}>
                      Sign in now
                    </span>
                  </p>
                </form>
              </div>
            ) : (
              <div className="w-full mt-10 md:mt-1">
                <h3 className="text-2xl text-sky-600 font-semibold">SIGN UP</h3>
                <form className="my-5" onSubmit={handleSignUpSubmit}>
                  <input
                    type="text"
                    className="p-1 px-2 rounded-sm border focus:ring-0 focus:outline-none border-gray-600 text-black border-solid w-full placeholder:text-slate-700 placeholder:text-sm mb-5"
                    placeholder="Name"
                    value={signup.name}
                    onChange={(e) =>
                      setSignup({ ...signup, name: e.target.value })
                    }
                    required
                  />
                  <input
                    type="email"
                    className="p-1 px-2 rounded-sm border focus:ring-0 focus:outline-none border-gray-600 text-black border-solid w-full placeholder:text-slate-700 placeholder:text-sm mb-5"
                    placeholder="Email"
                    value={signup.email}
                    onChange={(e) =>
                      setSignup({ ...signup, email: e.target.value })
                    }
                    required
                  />
                  <input
                    type="password"
                    className="p-1 px-2 rounded-sm border focus:ring-0 focus:outline-none border-gray-600 text-black border-solid w-full placeholder:text-slate-700 placeholder:text-sm mb-4"
                    placeholder="Password"
                    value={signup.password}
                    onChange={(e) =>
                      setSignup({ ...signup, password: e.target.value })
                    }
                    required
                  />

                  <input
                    type="submit"
                    value={"SIGN UP"}
                    className="p-1.5 bg-sky-600 rounded-sm  text-white border-solid w-full text-sm font-semibold mb-3 shadow-md shadow-sky-700"
                  />

                  <p className="text-sky-700 text-sm font-semibold mb-4 mt-2">
                    <span className="text-black">
                      Already have an account ?{" "}
                    </span>
                    <span onClick={() => setFormType("signin")}>
                      Sign up now
                    </span>
                  </p>
                </form>
              </div>
            )}
          </div>
          <div className="flex justify-center items-center h-full md:w-1/2 w-5/6 p-3">
            <img
              src={`${formType === "signin" ? "/nextjs.png" : "/reactjs.png"}`}
              alt=""
              className="h-full w-full md:h-4/5 md:w-4/5"
            />
          </div>
        </div>
      </div>
    </>
  );
}
