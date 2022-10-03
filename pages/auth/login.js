import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);

  const validateUsers = (users) => {
    let loggedIn = false;
    if (users)
      users.map((user) => {
        if (
          user.fields.username === username &&
          user.fields.password === password
        )
          loggedIn = true;
      });

    return loggedIn;
  };

  const getUsers = async () => {
    const data = await axios.get(
      "https://api.airtable.com/v0/appjWdL7YgpxIxCKA/credenitals",
      {
        params: {
          maxRecords: "3",
          view: "Grid view",
        },
        headers: {
          Authorization: "Bearer keyfXgn8PL6pB3x32",
        },
      }
    );
    const users = data.data.records;
    return users;
  };

  const updateLoggedIn = () => {
    setError(null);
    localStorage.setItem("Authenticated", true);
    router.push("/");
  };

  const onSubmit = async () => {
    const users = await getUsers();
    validateUsers(users) ? updateLoggedIn() : setError("Invalid Credentials");
  };

  return (
    <>
      <Head>
        <title>Login - Loop Kitchen</title>
      </Head>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-32 w-auto"
              src="https://loopkitchen.xyz/static/media/logo.82da03003282fdccf660.avif"
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-2xl font-medium text-gray-600">
              Sign in to your account
            </h2>
          </div>
          <p className="text-center text-red-600 opacity-70 text-lg">{error}</p>
          <form
            className="mt-8 space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit();
            }}
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-600 placeholder-gray-500 focus:z-10 focus:border-cyan-600 focus:outline-none focus:ring-cyan-600 sm:text-sm transition-all"
                  placeholder="Email address"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-600 placeholder-gray-500 focus:z-10 focus:border-cyan-600 focus:outline-none focus:ring-cyan-600 sm:text-sm transition-all"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-orange-600 py-2 px-4 text-sm font-medium text-white hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-offset-2 transition-all"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
