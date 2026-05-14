import { useState } from 'react';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="flex flex-col gap-6">
      <div className="mb-2">
        <h2 className="text-2xl font-bold text-white mb-1">Welcome</h2>
      </div>
      <div>
        <label className="block text-sm font-medium text-zinc-300 mb-1" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          required
          className="w-full px-4 py-3 rounded-xl bg-zinc-900 text-white border border-zinc-800 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-shadow placeholder-zinc-500"
          placeholder="Enter your email"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-zinc-300 mb-1" htmlFor="password">
          Password
        </label>
        <div className="relative">
          <input
            id="password"
            type={showPassword ? 'text' : 'password'}
            autoComplete="current-password"
            required
            className="w-full px-4 py-3 rounded-xl bg-zinc-900 text-white border border-zinc-800 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-shadow placeholder-zinc-500 pr-12"
            placeholder="Enter your password"
          />
          <button
            type="button"
            tabIndex={-1}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-yellow-400 transition-colors"
            onClick={() => setShowPassword((v) => !v)}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? (
              // Eye-off icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-5 0-9-4-9-7s4-7 9-7c1.657 0 3.216.41 4.563 1.125M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3l18 18" />
              </svg>
            ) : (
              // Eye icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <a href="#" className="text-sm text-yellow-400 hover:underline transition-colors">Forgot Password?</a>
      </div>
      <button
        type="submit"
        className="w-full py-3 rounded-xl bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 text-zinc-900 font-bold text-lg shadow-lg hover:scale-105 hover:shadow-yellow-400/40 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      >
        Login
      </button>
      <div className="flex flex-col items-center gap-2 mt-2">
        <div className="flex items-center text-sm text-zinc-400">
          Don&apos;t have an account?
          <a href="#" className="ml-1 text-yellow-400 font-semibold hover:underline transition-colors">Create one</a>
        </div>
        <div className="text-xs text-zinc-500 text-center mt-2">
          By logging in you accept the <a href="#" className="underline hover:text-yellow-400 transition-colors">Terms &amp; Conditions</a>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
