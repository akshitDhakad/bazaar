import React from "react";
import Layout from "../../components/Layout";
import Herobanner from "../../components/Herobanner";

export default function Home() {
  return (
    <Layout>
      <Herobanner />
      <section>
        <div className="max-w-7xl px-4 py-10">Home page</div>
      </section>
    </Layout>
  );
}
