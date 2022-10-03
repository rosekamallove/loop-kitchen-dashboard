import Layout from "../components/layout";
import Search from "../components/search";

export default function Home() {
  return (
    <Layout title="Home - Loop Kitchen">
      <div className="flex h-full w-full justify-center my-20">
        <Search />
      </div>
    </Layout>
  );
}
