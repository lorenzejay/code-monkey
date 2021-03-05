import Head from "next/head";
import Layout from "../components/layout";
import PaddingWrapper from "../components/paddingWrapper";

const Home = ({ data }) => {
  return (
    <Layout>
      <PaddingWrapper>
        <section className="grid grid-cols-3 gap-5">
          {data.map((item) => {
            return (
              <div>
                <p>{item.title}</p>
                <img src={item.image} className="w-64 h-64 object-cover" />
                <p>{item.price}</p>
              </div>
            );
          })}
        </section>
      </PaddingWrapper>
    </Layout>
  );
};

export async function getStaticProps() {
  //this gets the data from our external api
  const res = await fetch("https://fakestoreapi.com/products");
  console.log(res);
  //covert that data to json
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default Home;
