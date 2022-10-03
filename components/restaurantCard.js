import {
  ArchiveBoxArrowDownIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useContext } from "react";
import { RestaurantsContext } from "../context/restraunts.context";

export const RestaurantCard = ({ title, url }) => {
  const { liked, bookmarked, setBookmarked, setLiked } =
    useContext(RestaurantsContext);

  const router = useRouter();

  const handleDelete = () => {
    if (router.asPath === "/") {
      if (liked) liked = liked.filter((l) => l !== title);
      setLiked(liked);
      Cookies.set("Liked", liked);
    } else {
      if (bookmarked) bookmarked = bookmarked.filter((l) => l !== title);
      setBookmarked(bookmarked);
      Cookies.set("Bookmarked", liked);
    }
  };

  const handleAddBookmark = () => {
    bookmarked.push(title);
    setBookmarked(bookmarked);
    Cookies.set("Bookmarked", bookmarked);
    handleDelete();
  };

  return (
    <div className="flex justify-center w-full">
      <div className="rounded-lg shadow-lg bg-white w-4/5 h-auto">
        <iframe
          src={`https://datastudio.google.com/embed/reporting/430242fa-4162-4950-a984-824b3b355b3c/page/dQMwC?params={"ds2.name2":"${title}"}`}
          className="w-full"
          allowFullScreen
        />
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-5">{title}</h5>
          <div className="flex gap-5">
            {router.asPath === "/" && (
              <button
                onClick={() => handleAddBookmark()}
                type="button"
                className="flex justify-center items-center px-6 py-2.5 bg-orange-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-cyan-900 hover:shadow-lg focus:bg-cyan-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                <PlusCircleIcon
                  className={`mr-1 flex-shrink-0 h-5 w-5 transition-all `}
                ></PlusCircleIcon>
                Add to Bookmark
              </button>
            )}
            <button
              type="button"
              onClick={() => handleDelete()}
              className="flex justify-center items-center px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-cyan-900 hover:shadow-lg focus:bg-cyan-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              <ArchiveBoxArrowDownIcon
                className={`mr-1 flex-shrink-0 h-5 w-5 transition-all `}
              ></ArchiveBoxArrowDownIcon>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
