import { useState } from "react";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8F5F2] flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white rounded-[30px] shadow-xl p-10">
<div className="text-center mb-8">

  <h1 className="text-5xl font-serif text-[#3B2F2F]">
    GestMat
  </h1>

  <p className="text-sm text-gray-400 mt-2">
    Gestion de matières, avenir organisé
  </p>

</div>
        {/* Form */}
        <form className="mt-10 space-y-6">

          {/* Email */}
          <div>

            <label className="block mb-2 text-sm font-medium text-gray-700">
              Email
            </label>

            <div className="relative">

              <FiMail
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full h-14 rounded-2xl border border-gray-300 pl-12 pr-4 text-sm focus:border-pink-300 focus:ring-2 focus:ring-pink-200 transition"
              />

            </div>

          </div>

          {/* Password */}
          <div>

            <label className="block mb-2 text-sm font-medium text-gray-700">
              Password
            </label>

            <div className="relative">

              <FiLock
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full h-14 rounded-2xl border border-gray-300 pl-12 pr-12 text-sm focus:border-pink-300 focus:ring-2 focus:ring-pink-200 transition"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </button>

            </div>

          </div>

          {/* Remember */}
          <div className="flex justify-between items-center text-sm">

            <label className="flex items-center gap-2 text-gray-600">

              <input
                type="checkbox"
                className="accent-pink-300"
              />

              Remember me

            </label>

            <button
              type="button"
              className="text-pink-300 hover:underline"
            >
              Forgot Password?
            </button>

          </div>

          {/* Button */}

          <button
            type="submit"
            className="w-full h-14 rounded-2xl bg-[#E9A8B6] hover:bg-[#de97a7] text-white text-lg font-medium transition duration-300"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;