import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [authorized, setAuthorized] = useState(false);
  const router = useRouter();

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
    const authenticated = localStorage.getItem("Authenticated");

    if (!authenticated && !publicPaths.includes(path)) {
      setAuthorized(false);
      router.push({
        pathname: "/auth/login",
        query: { returnUrl: router.asPath },
      });
    } else {
      setAuthorized(true);
    }
  };

  return <>{authorized && <Component {...pageProps} />}</>;
}

export default MyApp;
