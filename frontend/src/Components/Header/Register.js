import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../redux/Slices/registerslice";

const Register = () => {
  const [user, setuser] = useState({});
  const dispatch = useDispatch();

  const getUserData = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    dispatch(register(user));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-800 via-indigo-600 to-teal-500">
      <div className="bg-white p-8 rounded-md shadow-md w-full sm:w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="exampleInputName" className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={getUserData}
              id="exampleInputName"
              placeholder="John Doe"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="exampleInputEmail" className="block text-gray-700 text-sm font-bold mb-2">
              Email address
            </label>
            <input
              type="email"
              name="email"
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={getUserData}
              id="exampleInputEmail"
              placeholder="john.doe@example.com"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="exampleInputPassword1" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              name="password"
              type="password"
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="exampleInputPassword1"
              onChange={getUserData}
              placeholder="********"
            />
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
