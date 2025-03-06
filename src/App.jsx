import { useState } from "react";
import { Card, Typography } from "@material-tailwind/react";
import { Button } from "@headlessui/react";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-200">
      <Card className="w-full max-w-md p-8 rounded-xl shadow-lg">
        <Typography variant="h4" color="blue-gray" className="text-center font-bold mb-4">
          {isLogin ? "Login" : "Register"}
        </Typography>

        <form className="flex flex-col gap-4">
          {!isLogin && (
            <div>
              <label className="block">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                  Full Name
                </span>
                <input
                  type="text"
                  name="fullName"
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder="Full Name"
                />
              </label>
            </div>
          )}

          <div>
            <label className="block">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Email
              </span>
              <input
                type="email"
                name="email"
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="@example.com"
              />
            </label>
          </div>

          <div>
            <label className="block">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Password
              </span>
              <input
                type="password"
                name="password"
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="Password"
              />
            </label>
            {isLogin && (
              <a href="#" className="text-sm text-sky-500 hover:underline mt-2 inline-block">
                Forgot Password?
              </a>
            )}
          </div>

          <Button className="rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700">
            {isLogin ? "Login" : "Register"}
          </Button>
        </form>

        <div className="flex justify-center items-center mt-4">
          <Typography className="text-gray-600">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </Typography>
          <Button
            variant="text"
            color="blue"
            onClick={() => setIsLogin(!isLogin)}
            className="ml-2 text-sm font-medium"
          >
            {isLogin ? "Sign up" : "Login"}
          </Button>
        </div>
      </Card>
    </div>
  );
}
