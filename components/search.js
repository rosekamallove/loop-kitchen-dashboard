import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Search() {
  const [query, setQuery] = useState();

  const updateRestraunts = () => {};
  return (
    <div className="flex justify-center w-4/5 ">
      <div className="w-full">
        <div className="relative flex gap-2 items-stretch w-full mb-4">
          <input
            type="search"
            className="form-control relative flex-auto min-w-0 block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition-all m-0 focus:text-gray-700 focus:bg-white focus:border-cyan-600 focus:outline-none"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon3"
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            onClick={() => updateRestraunts()}
            className="btn flex items-center justify-center px-6 py-2 bg-orange-600 hover:bg-cyan-900 text-white font-medium text-xs leading-tight uppercase rounded-md focus:outline-none focus:ring-0 transition-all"
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
