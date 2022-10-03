import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { RestaurantProvider } from "../context/restraunts.context";
import { UserContext, UserProvider } from "../context/user.context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [authorized, setAuthorized] = useState(false);
  const router = useRouter();

  const { loggedIn } = useContext(UserContext);
  console.log(loggedIn);

  useEffect(() => {
    authCheck(router.asPath);

    const hideContent = () => setAuthorized(false);
    router.events.on("routeChangeStart", hideContent);

    router.events.on("routeChangeComplete", authCheck);

    return () => {
      router.events.off("routeChangeStart", hideContent);
      router.events.off("routeChangeComplete", authCheck);
    };
  }, []);

  const authCheck = (url) => {
    const publicPaths = ["/auth/login"];
    const path = url.split("?")[0];

    if (!loggedIn && !publicPaths.includes(path)) {
      setAuthorized(false);
      router.push({
        pathname: "/auth/login",
        query: { returnUrl: router.asPath },
      });
    } else {
      setAuthorized(true);
    }
  };

  return (
    <UserProvider>
      <RestaurantProvider>
        {authorized && <Component {...pageProps} />}
      </RestaurantProvider>
    </UserProvider>
  );
}

export default MyApp;
