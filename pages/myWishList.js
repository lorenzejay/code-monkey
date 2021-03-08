import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import PaddingWrapper from "../components/paddingWrapper";
import { useAuth } from "../hooks/useAuth";

const MyWishList = () => {
  const auth = useAuth();
  const { user, deleteItemFromWishList } = auth;

  // const [newWishList, setNewWishList] = useState([]);

  const router = useRouter();
  useEffect(() => {
    if (user === null) {
      router.push("/signin");
    }
  }, [user]);

  //user.wishList = the wishList currently on firebase

  // useEffect(() => {
  //   if (user && user.wishList) {
  //     setNewWishList(user.wishList);
  //   }
  // }, [user]);

  const handleDeleteItemFromWishList = (id) => {
    //1 modify the array
    // console.log(id);
    // // const newList = newWishList.slice(i, 1);
    console.log(id);

    if (user) {
      const filteredList = user.wishList.filter((x) => x.id !== id);

      // //pass the new array
      deleteItemFromWishList(filteredList);
    }
  };

  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    if (user) {
      let total = 0;
      user.wishList.map((item) => {
        total += item.price;
      });
      setTotalPrice(total);
    }
  }, [user]);

  // const addPrices = (price) => {
  //   // currentPrice += Total;
  //   currentPrice += price;
  //   return currentPrice;
  // };

  //create a function called add prices
  //add that function and pass in ite,price 60

  return (
    <Layout>
      <Head>
        <title>My Wishlist | The Monkey Store</title>
      </Head>
      {user && (
        <PaddingWrapper>
          <section className="mx-3">
            <h1 className="text-2xl">Welcome, {user.name}!</h1>
            <p className="text-xl">Here is your wishlist:</p>
            <p>
              The total price of my wishlist is:
              <span className="ml-3 bg-blue-300 px-4 font-bold">$ {totalPrice}</span>
            </p>
          </section>
          <div className="flex justify-center flex-col w-full">
            {user.wishList.map((item, i) => {
              return (
                <article className="shadow-md mx-auto p-8 lg:w-1/2 my-3" key={item.id}>
                  <h3 className="text-3xl">{item.title}</h3>
                  <p className="font-bold">${item.price}</p>
                  <img src={item.image} className="w-56 object-cover" />
                  <p className="text-base mt-3">{item.description}</p>

                  <button
                    type="button"
                    className="bg-red-500 px-4 text-white"
                    onClick={() => handleDeleteItemFromWishList(item.id)}
                  >
                    Remove Item
                  </button>
                </article>
              );
            })}
          </div>
        </PaddingWrapper>
      )}
    </Layout>
  );
};

export default MyWishList;
