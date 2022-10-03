import Layout from "../components/layout";

export default function About() {
  return (
    <Layout title={"Bookmakrs - Loop Kitchen"}>
      <div className="flex h-full flex-col justify-center items-center">
        <h1 className="text-4xl mb-5 font-bold">Bookmarks</h1>
        <span className="text-7xl">💬</span>
      </div>
    </Layout>
  );
}
