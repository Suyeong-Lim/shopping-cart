import type { NextPage } from "next";

const Home: NextPage = () => {
  async function addProduct() {
    const response = await fetch("/api/product-list");
  }
  return <div>Init</div>;
};

export default Home;
