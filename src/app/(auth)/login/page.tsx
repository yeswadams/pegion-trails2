import React from "react";
import Link from "next/link";

const Login = () => {
  return (
    <div className="flex flex-col items-center h-screen gap-40 justify-center py-12 px-4 md:px-0">
      {/* <em className='text-6xl font-bold text-[#fff] text-center font-serif'>PegionTrails Digital</em> */}
      <div className="flex flex-col justify-center gap-10 bg-white rounded-lg w-full md:w-1/2 px-4 md:px-12 shadow-lg h-[600px]">
        <div className="flex flex-col gap-4 w-full">
          <h1 className="text-2xl font-normal text-[var(--color-primary)] text-center">
            Log In
          </h1>
          <p className="text-center text-black/50">
            Welcome back! Please enter your details to sign in.
          </p>
          <button className="border border-gray-300 rounded-full p-2 flex flex-row items-center justify-center gap-2 bg-white text-[var(--color-primary)]">
            <GoogleIcon className="w-4 h-4" />
            Login with Google
          </button>
          <button className="border border-gray-300 rounded-full p-2 bg-white text-[var(--color-primary)]">
            Login with SSO
          </button>
        </div>
        <div className="flex flex-row items-center gap-2">
          <div className="w-1/2 h-px bg-gray-300"></div>
          <span className="text-gray-300">or</span>
          <div className="w-1/2 h-px bg-gray-300"></div>
        </div>
        <form action="" className="flex flex-col gap-4">
          <input
            className="border border-gray-400 rounded-lg p-2 text-[var(--color-primary)]"
            type="text"
            placeholder="Username"
          />
          <input
            className="border border-gray-400 rounded-lg p-2 text-[var(--color-primary)]"
            type="password"
            placeholder="Password"
          />
          <button
            className="border border-gray-300 rounded-full p-2 bg-[var(--color-primary)] text-white"
            type="submit"
          >
            Login
          </button>
          <p className="text-center text-xs text-black/50">
            New to PigeonTrails?{" "}
            <Link href="/contact-us" className="text-[var(--color-primary)]">
              Request Access
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

function GoogleIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" fill-rule="evenodd">
        <path
          d="M8 3.093c1.502 0 2.516.65 3.093 1.191l2.258-2.204C11.964.791 10.16 0 8 0A7.994 7.994 0 0 0 .853 4.409L3.44 6.418C4.089 4.488 5.884 3.093 8 3.093z"
          fill="#EA4335"
        ></path>
        <path
          d="M15.68 8.178c0-.658-.053-1.138-.169-1.636H8v2.97h4.409c-.089.737-.569 1.848-1.636 2.595l2.525 1.955c1.51-1.395 2.382-3.449 2.382-5.884z"
          fill="#4285F4"
        ></path>
        <path
          d="M3.449 9.582A4.925 4.925 0 0 1 3.182 8c0-.551.098-1.084.258-1.582L.853 4.408A8.007 8.007 0 0 0 0 8c0 1.289.311 2.507.853 3.591L3.45 9.582z"
          fill="#FBBC05"
        ></path>
        <path
          d="M8 16c2.16 0 3.973-.711 5.298-1.938l-2.525-1.955c-.675.47-1.582.8-2.773.8-2.116 0-3.911-1.396-4.551-3.325l-2.587 2.01C2.178 14.203 4.872 16 8 16z"
          fill="#34A853"
        ></path>
        <path d="M0 0h16v16H0V0z"></path>
      </g>
    </svg>
  );
}
