import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Logout() {
  const router = useRouter();

  useEffect(() => {
    Cookies.set("loggedIn", "false");
    router.push("/auth/login");
  }, []);

  return <div />;
}
