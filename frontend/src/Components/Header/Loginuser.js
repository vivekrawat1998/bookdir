import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/Slices/loginslice";
import { useNavigate,Link } from "react-router-dom";


const Loginuser = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.login.loading);
  const error = useSelector((state) => state.login.error);

  const handleInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(userData))
      .then((result) => {
        if (result.payload && result.payload.token) {
          navigate("/home");
          console.log("Login successful!");
        } else {
          console.log("Login failed. Invalid credentials or server response.");
        }
      })
      .catch((error) => {
        console.error("Login failed:", error);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md p-6 bg-white rounded-md shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={userData.password}
              onChange={handleInputChange}
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
            
          </button>
          <Link to={"/register"} className="">Sign up</Link>
        </form>
      </div>
    </div>
  );
};

export default Loginuser;
