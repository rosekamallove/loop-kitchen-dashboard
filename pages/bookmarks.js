import { useContext } from "react";
import Layout from "../components/layout";
import { RestaurantCard } from "../components/restaurantCard";
import { RestaurantsContext } from "../context/restraunts.context";

export default function About() {
  const { bookmarked } = useContext(RestaurantsContext);
  return (
    <Layout title="Bookmarks - Loop Kitchen">
      <div className="flex mt-20 flex-wrap gap-5 justify-center w-full">
        {bookmarked.map((l) => (
          <RestaurantCard title={l} />
        ))}
      </div>
    </Layout>
  );
}
