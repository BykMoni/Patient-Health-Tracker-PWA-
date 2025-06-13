import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-500">
      <div className="bg-white bg-opacity-10 p-10 rounded-md shadow-lg w-full max-w-md text-white">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
            <FaUser size={40} />
          </div>
        </div>
        <form>
          <div className="flex items-center bg-white bg-opacity-20 p-2 mb-4 rounded">
            <FaUser className="mr-2" />
            <input
              type="text"
              placeholder="Username"
              className="bg-transparent w-full outline-none text-white placeholder-white"
            />
          </div>
          <div className="flex items-center bg-white bg-opacity-20 p-2 mb-4 rounded">
            <FaLock className="mr-2" />
            <input
              type="password"
              placeholder="Password"
              className="bg-transparent w-full outline-none text-white placeholder-white"
            />
          </div>
          <div className="flex justify-between items-center text-sm mb-6">
            <label className="flex items-center">
              <input type="checkbox" className="mr-1" />
              Remember me
            </label>
            <Link to="/forgot-password" className="hover:underline text-sm">Forgot Password?</Link>
          </div>
          <button
            type="submit"
            className="w-full bg-white text-indigo-900 font-bold py-2 rounded hover:bg-opacity-90">
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
