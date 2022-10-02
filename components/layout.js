import {
  ArrowTopRightOnSquareIcon,
  HomeIcon,
  InboxIcon,
} from "@heroicons/react/24/outline";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Layout({ children, title }) {
  const router = useRouter();
  const menuItems = [
    {
      href: "/",
      title: "Homepage",
      icon: HomeIcon,
    },
    {
      href: "/bookmarks",
      title: "Bookmarks",
      icon: InboxIcon,
    },
    {
      href: "/auth/logout",
      title: "Log Out",
      icon: ArrowTopRightOnSquareIcon,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{title}</title>
      </Head>
      <div className="flex flex-col md:flex-row flex-1">
        <aside className="bg-cyan-800 w-full md:w-72">
          <nav>
            <ul>
              <li className="my-10">
                <div className="flex justify-center items-center">
                  <img
                    className="h-16"
                    src="https://loopkitchen.xyz/static/media/logo2.3f751c55d1af917b16d4.avif"
                  />
                </div>
              </li>
              {menuItems.map((n) => (
                <li className="m-2 mx-5" key={n.title}>
                  <Link href={n.href}>
                    <a
                      className={`group flex hover:bg-gray-100 hover:text-cyan-900 items-center px-2 py-2 text-base rounded-md transition-all ${
                        router.asPath === n.href
                          ? "text-cyan-900 bg-gray-100 shadow font-bold"
                          : "text-gray-300"
                      }`}
                    >
                      <n.icon
                        className={`mr-4 flex-shrink-0 h-6 w-6 transition-all ${
                          router.asPath === n.href
                            ? "text-cyan-900"
                            : "text-gray-300 group-hover:text-cyan-900"
                        }`}
                      ></n.icon>
                      {n.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
