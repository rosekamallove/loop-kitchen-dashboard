import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout title="Home - Loop Kitchen">
      <div className="flex h-full flex-col justify-center items-center">
        <h1 className="text-4xl mb-5 font-bold">Home</h1>
        <span className="text-7xl">🏡</span>
      </div>
    </Layout>
  );
}
