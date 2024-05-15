import React, { useState } from "react";
import toast from "react-hot-toast";
import { IoIosEyeOff, IoMdEye } from "react-icons/io";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";

const Register = () => {
  const axiosSecure = useAxiosSecure();
  const { emailPasswordRegister, updateUser, logOut, setUser } = useAuth();
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  const handleEmailPasswordRegister = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\|\-]).{6,}$/;

    const user = { name, photo, email, role: "student" };

    if (password.length < 6) {
      toast.error("Password must be 6 characters long!");
      return;
    }

    if (!passwordRegex.test(password)) {
      toast.error("Password Must Be Strong!");
      return;
    }

    try {
      const res = await emailPasswordRegister(email, password);
      await updateUser(name, photo);
      setUser({ ...res?.user, photoURL: photo, displayName: name });
      const { data } = await axiosSecure.post("/users", user);
      if (data.insertedId) {
          toast.success("Successfully Logged In!");
        e.target.reset();
        setTimeout(() => {
          navigate(from, { replace: true });
        }, 1000);
      } else {
        await logOut();
        toast.error("Something Went Wrong");
      }
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        toast.error("User already exist!");
        return;
      }
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="w-full grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 row-auto items-center py-20 lg:px-10 px-5 font-inter">
      <div className=" w-full relative lg:inline-block hidden md:hidden">
        <div className="w-[50%] bg-white bottom-0 right-0 rounded-lg shadow-md px-5 py-5 flex flex-col items-start gap-2 absolute">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="34"
            viewBox="0 0 42 34"
            fill="none"
          >
            <path
              d="M0 34V22.625C0 18.375 0.752239 14.4583 2.25672 10.875C3.76119 7.29167 6.31045 3.66667 9.90448 0L16.4239 5.125C14.3343 7.20834 12.7463 9.16667 11.6597 11C10.5731 12.8333 9.86269 14.7083 9.52836 16.625H17.5522V34H0ZM24.4478 34V22.625C24.4478 18.375 25.2 14.4583 26.7045 10.875C28.209 7.29167 30.7582 3.66667 34.3522 0L40.8716 5.125C38.7821 7.20834 37.194 9.16667 36.1075 11C35.0209 12.8333 34.3104 14.7083 33.9761 16.625H42V34H24.4478Z"
              fill="#F5F5F5"
            />
          </svg>
          <span className="font-medium text-gray-800">Adam Sandler</span>
          <p className="text-xs text-gra-700">Head Teacher at BIAM</p>
          <p className="text-sm text-black">
            “Great platform for manage school library and control the access of
            books"
          </p>
        </div>
        <img
          src="https://i.ibb.co/Nygqjgc/paper-cut-people-of-different-ages-reading-1.webp"
          alt=""
        />
      </div>
      <div className="lg:w-[70%] w-full px-5 mx-auto flex flex-col items-center gap-5">
        <div className="flex items-center gap-5 w-full justify-center">
          <NavLink
            className={({ isActive }) =>
              isActive ? "bg-[#4169E133] text-primary" : "no-underline"
            }
            to={"/login"}
          >
            <button className="font-medium text-base cursor-pointer px-4 py-2 rounded-md text-primary">
              Login
            </button>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "bg-[#4169E133] text-primary" : "no-underline"
            }
            to={"/register"}
          >
            <button className="font-medium text-base cursor-pointer text-primary px-4 py-2 rounded-md">
              Register
            </button>
          </NavLink>
        </div>
        <h1 className="text-2xl font-bold text-center">Manage library with Bookify</h1>
        <p className="text-center text-gray-600">
          Register to Bookify and find your library management solution
        </p>
        <form className="w-full" onSubmit={handleEmailPasswordRegister}>
          <div className="mt-5">
            <label class="block mb-2 text-sm text-gray-600  ">Your Name</label>
            <input
              type="text"
              required
              name="name"
              placeholder="Enter Name"
              class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="w-full mt-6">
            <label for="email" class="block text-sm text-gray-800 ">
              Email Address
            </label>
            <input
              type="email"
              required
              name="email"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg   focus:border-blue-400 focus:ring-blue-300  focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Enter Email Address"
            />
          </div>
          <div className="mt-6">
            <label class="block mb-2 text-sm text-gray-600  ">Password</label>
            <div className="flex items-center justify-between w-full px-5 py-3 mt-2 bg-white border rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:ring focus:ring-opacity-40">
              <input
                name="password"
                required
                type={show ? "text" : "password"}
                placeholder="Enter your password"
                class="block w-full  text-gray-700 placeholder-gray-400 focus:outline-none "
              />
              {show ? (
                <IoIosEyeOff
                  onClick={() => setShow(!show)}
                  className="text-gray-500 cursor-pointer"
                />
              ) : (
                <IoMdEye
                  onClick={() => setShow(!show)}
                  className="text-gray-500 cursor-pointer"
                />
              )}
            </div>
          </div>
          <div className="mt-6">
            <label class="block mb-2 text-sm text-gray-600  ">Photo URL</label>
            <input
              type="text"
              required
              name="photo"
              placeholder="Photo URL"
              class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="flex items-center gap-3 mt-6">
            <input
              name="terms"
              type="checkbox"
              className="focus:outline-[#9DC1EB] w-5 h-5 accent-primary rounded-lg text-white"
            />
            <p className="text-[#767F8C]">
              I've read and agree with your{" "}
              <span className="text-primary font-medium hover:underline underline-offset-2">
                Terms of Services
              </span>
            </p>
          </div>
          <div class="mt-6">
            <button
              type="submit"
              class="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
            >
              Sign In
            </button>
          </div>
        </form>
        <p></p>
      </div>
    </div>
  );
};

export default Register;
