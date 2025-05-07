import React from "react";
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="flex h-screen font-sans">
      {/* Left Illustration */}
      <div className="w-1/2 bg-cover bg-center relative hidden md:block" style={{ backgroundImage: 'url("/display.png")' }}>
        {/* You can place overlay or logo if needed */}
      </div>

      {/* Right Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-blue-300 p-10">
        <div className="w-full max-w-lg">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Registration</h2>
          <form className="space-y-4">
            <div className="flex gap-4">
              <input type="text" placeholder="Full Name" className="w-1/2 p-3 border border-gray-300 rounded" />
              <input type="text" placeholder="Position you are applying for" className="w-1/2 p-3 border border-gray-300 rounded" />
            </div>

            <div className="flex gap-4">
              <input type="email" placeholder="Email" className="w-1/2 p-3 border border-gray-300 rounded" />
              <input type="tel" placeholder="Phone number" className="w-1/2 p-3 border border-gray-300 rounded" />
            </div>

            <div className="flex gap-4">
              <input type="text" placeholder="Country" className="w-1/2 p-3 border border-gray-300 rounded" />
              <input type="text" placeholder="City" className="w-1/2 p-3 border border-gray-300 rounded" />
            </div>

            <div className="flex gap-4">
              <input type="password" placeholder="Password" className="w-1/2 p-3 border border-gray-300 rounded" />
              <input type="password" placeholder="Confirm password" className="w-1/2 p-3 border border-gray-300 rounded" />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Gender</label>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2">
                  <input type="radio" name="gender" value="male" /> Male
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="gender" value="female" /> Female
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="gender" value="other" /> Other
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="gender" value="prefer-not-to-say" /> Prefer not to say
                </label>
              </div>
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition">
              Next Step
            </button>

            <p className="mt-4 text-sm text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 hover:underline"> Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
