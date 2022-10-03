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
    } else {
      if (bookmarked) bookmarked = bookmarked.filter((l) => l !== title);
      setBookmarked(bookmarked);
    }
  };

  const handleAddBookmark = () => {
    bookmarked.push(title);
    setBookmarked(bookmarked);
    Cookies.set("Bookmarked", bookmarked);
    handleDelete();
  };

  return (
    <div class="flex justify-center">
      <div class="rounded-lg shadow-lg bg-white max-w-sm">
        <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
          <img
            class="rounded-t-lg"
            src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
            alt=""
          />
        </a>
        <div class="p-6">
          <h5 class="text-gray-900 text-xl font-medium mb-5">{title}</h5>
          <div className="flex gap-5">
            {router.asPath === "/" && (
              <button
                onClick={() => handleAddBookmark()}
                type="button"
                class="flex justify-center items-center px-6 py-2.5 bg-orange-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-cyan-900 hover:shadow-lg focus:bg-cyan-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-800 active:shadow-lg transition duration-150 ease-in-out"
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
              class="flex justify-center items-center px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-cyan-900 hover:shadow-lg focus:bg-cyan-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-800 active:shadow-lg transition duration-150 ease-in-out"
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
