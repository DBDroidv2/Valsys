import React, { useState, useEffect } from "react";

const Auth = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-800 to-black">
        {showLogin ? (
          <div className="max-w-md w-full text-white border bg-gradient-to-b from-gray-800 to-black shadow-lg rounded-lg p-8 space-y-6 transform transition-transform hover:scale-105">
            <div className="text-center">
              <img
                src="../../../public/logo.png"
                alt="Valkyrie Logo"
                className="mx-auto w-32 mb-4 shadow-lg rounded-full border"
              />
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                Welcome to Valkyrie
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400">
                Please login to your account
              </p>
            </div>
            <form className="space-y-4">
              <div>
                <label
                  for="email"
                  className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                >
                  Username
                </label>
                <input
                  id="email"
                  name="email"
                  type="text"
                  required
                  className="text-black mt-1 block w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-zinc-700 dark:text-white"
                />
              </div>
              <div>
                <label
                  for="password"
                  className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="text-black mt-1 block w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-zinc-700 dark:text-white"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember_me"
                    name="remember_me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-zinc-300 rounded dark:bg-zinc-700 dark:border-zinc-600"
                  />
                  <label
                    for="remember_me"
                    className="ml-2 block text-sm text-zinc-900 dark:text-zinc-300"
                  >
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div class="max-w-md w-full text-white border bg-gradient-to-b from-gray-800 to-black shadow-lg rounded-lg p-8 space-y-6 transform transition-transform hover:scale-105 flex">
            <div class="w-full">
              <div class="text-center">
                <img
                  src="../../../public/logo.png"
                  alt="Valkyrie Logo"
                  class="mx-auto mb-4 w-32 border shadow-lg rounded-full"
                />
                <h2 class="text-2xl font-bold text-zinc-900 dark:text-white">
                  Join Valkyrie
                </h2>
                <p class="text-zinc-600 dark:text-zinc-400">
                  Create your account
                </p>
              </div>
              <form class="space-y-4">
                <div>
                  <label
                    for="email"
                    class="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                  >
                    Name
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    class="text-black mt-1 block w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-zinc-700 dark:text-white"
                  />
                </div>
                <div>
                  <label
                    for="email"
                    class="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    class="text-black mt-1 block w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-zinc-700 dark:text-white"
                  />
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      required
                      class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-zinc-300 rounded dark:bg-zinc-700 dark:border-zinc-600"
                    />
                    <label
                      for="terms"
                      class="ml-2 block text-sm text-zinc-900 dark:text-zinc-300"
                    >
                      I agree to the
                      <a
                        href="#"
                        class="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400"
                      >
                        &nbsp;terms and conditions
                      </a>
                    </label>
                  </div>
                </div>
                <div>
                  <a
                    href="/dash"
                    class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Register
                  </a>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Auth;
