import { useState } from "react";

export default function SignInModal({ onClose }) {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-96 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-400 hover:text-gray-600 text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold text-center text-green-700 mb-6">
          {isSignup ? "Create Account" : "Sign In"}
        </h2>

        <form className="space-y-4">
          {isSignup && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-green-600"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-green-600"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-green-600"
          />

          <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
            {isSignup ? "Create Account" : "Sign In"}
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4 text-sm">
          {isSignup ? (
            <>
              Already have an account?{" "}
              <button
                onClick={() => setIsSignup(false)}
                className="text-green-600 font-medium"
              >
                Sign In
              </button>
            </>
          ) : (
            <>
              Don’t have an account?{" "}
              <button
                onClick={() => setIsSignup(true)}
                className="text-green-600 font-medium"
              >
                Create one
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
