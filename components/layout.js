import Link from "next/link";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  const menuItems = [
    {
      href: "/",
      title: "Homepage",
    },
    {
      href: "/bookmarks",
      title: "Bookmarks",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-col md:flex-row flex-1">
        <aside className="bg-white w-full md:w-60">
          <nav>
            <ul>
              <li>
                <img
                  className="h-20 px-2"
                  src="https://loopkitchen.xyz/static/media/logo.82da03003282fdccf660.avif"
                />
              </li>
              {menuItems.map(({ href, title }) => (
                <li className="m-2" key={title}>
                  <Link href={href}>
                    <a
                      className={`flex p-2 bg-white rounded hover:bg-gray-50 cursor-pointer transition-all ${
                        router.asPath === href && "font-bold shadow"
                      }`}
                    >
                      {title}
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
