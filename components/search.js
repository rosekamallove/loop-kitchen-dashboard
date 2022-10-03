import { PlusCircleIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Search() {
  const [query, setQuery] = useState(null);
  const [restaurants, setRestaurants] = useState(null);

  useEffect(async () => {
    const rest = await getRestaurants();
    setRestaurants(rest);
    console.log(restaurants);
  }, [query]);

  const getRestaurants = async () => {
    //https://community.airtable.com/t/view-url-filter-operator-contains/32659
    const data = await axios.get(
      "https://api.airtable.com/v0/appjWdL7YgpxIxCKA/restaurants",
      {
        params: {
          maxRecords: "9999",
          view: "Grid view",
          filter_Name: "Sub",
        },
        headers: {
          Authorization: "Bearer keyfXgn8PL6pB3x32",
        },
      }
    );
    return data.data.records;
  };

  const updateRestraunts = () => {
    setQuery("");
  };

  return (
    <div className="flex justify-center w-4/5 ">
      <div className="w-full">
        <div className="relative flex gap-2  w-full mb-4">
          <div className="min-w-0 block w-full">
            <input
              type="search"
              className="form-control relative flex-auto min-w-0 block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition-all m-0 focus:text-gray-700 focus:bg-white focus:border-cyan-600 focus:outline-none"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon3"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            {query && (
              <div className="bg-white rounded-lg border border-gray-200 w-full my-1 text-gray-900">
                {restaurants &&
                  restaurants
                    .filter((restaurants) => {
                      const searchTerm = query.toLowerCase();
                      const fullName = restaurants.fields.Name.toLowerCase();

                      return (
                        searchTerm &&
                        fullName.startsWith(searchTerm) &&
                        fullName !== searchTerm
                      );
                    })
                    .slice(0, 10)
                    .map((restaurant) => (
                      <div
                        onClick={() => setQuery(restaurant.fields.Name)}
                        className="block px-6 py-2 border-b border-gray-200 hover:bg-gray-200 w-full  cursor-pointer"
                        key={restaurant.fields.Name}
                      >
                        {restaurant.fields.Name}
                      </div>
                    ))}
              </div>
            )}
          </div>
          <button
            onClick={() => updateRestraunts()}
            className="btn flex items-center justify-center px-6 py-2 bg-orange-600 hover:bg-cyan-900 text-white font-medium text-xs leading-tight uppercase rounded-md focus:outline-none focus:ring-0 transition-all h-10"
            type="button"
            id="button-addon3"
          >
            <PlusCircleIcon
              className={`mr-1 flex-shrink-0 h-5 w-5 transition-all `}
            ></PlusCircleIcon>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
