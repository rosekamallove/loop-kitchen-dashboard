import {
  ArrowTopRightOnSquareIcon,
  HomeIcon,
  InboxIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Layout({ children }) {
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
      <div className="flex flex-col md:flex-row flex-1">
        <aside className="bg-white w-full md:w-60">
          <nav>
            <ul>
              <li>
                <div className="flex justify-center items-center">
                  <img
                    className="h-20"
                    src="https://loopkitchen.xyz/static/media/logo.82da03003282fdccf660.avif"
                  />
                </div>
              </li>
              {menuItems.map((n) => (
                <li className="m-2" key={n.title}>
                  <Link href={n.href}>
                    <a
                      className={`group flex hover:bg-gray-100 items-center px-2 py-2 text-base font-medium rounded-md transition-all ${
                        router.asPath === n.href
                          ? "font-bold text-cyan-900 bg-gray-100 shadow"
                          : "text-gray-400"
                      }`}
                    >
                      <n.icon
                        className={`mr-4 flex-shrink-0 h-6 w-6 transition-all ${
                          router.asPath === n.href
                            ? "text-cyan-900"
                            : "text-gray-300 group-hover:text-gray-300"
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
