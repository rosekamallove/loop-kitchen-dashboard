import { useContext } from "react";
import Layout from "../components/layout";
import { RestaurantCard } from "../components/restaurantCard";
import Search from "../components/search";
import { RestaurantsContext } from "../context/restraunts.context";

export default function Home() {
  const { liked, setLiked } = useContext(RestaurantsContext);
  return (
    <Layout title="Home - Loop Kitchen">
      <div className="flex w-full justify-center mt-20">
        <Search liked={liked} setLiked={setLiked} />
      </div>
      <div className="flex flex-wrap gap-5 justify-center w-full">
        {liked.map((l) => (
          <RestaurantCard title={l} />
        ))}
      </div>
    </Layout>
  );
}
