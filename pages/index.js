import Head from "next/head";
import Layout from "../components/layout";
import PaddingWrapper from "../components/paddingWrapper";
import Link from "next/link";
import { useAuth } from "../hooks/useAuth";

const Home = ({ data }) => {
  const auth = useAuth();
  const { addToWishList, user } = auth;
  console.log(user);

  return (
    <Layout>
      <Head>
        <title>The Monkey Store</title>
      </Head>
      <PaddingWrapper>
        <section className="flex flex-col items-center justify-center lg:grid lg:grid-cols-3 lg:gap-5">
          {data.map((item) => {
            return (
              <div key={item.id} className="shadow-md mx-auto p-8 w-3/4 lg:w-full my-3">
                <Link href={`/wishlist/${item.id}`}>
                  <a className="text-2xl font-bold mb-3">{item.title}</a>
                </Link>
                <img src={item.image} className="w-auto my-5  object-cover" />
                <p>${item.price}</p>
                <button
                  onClick={() => addToWishList([...user.wishList, item])}
                  className="bg-gray-800 text-white px-3 py-1"
                >
                  Add to Wishlist
                </button>
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
