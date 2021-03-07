import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import PaddingWrapper from "../components/paddingWrapper";
import { useAuth } from "../hooks/useAuth";

const MyWishList = () => {
  const auth = useAuth();
  const { user } = auth;

  const router = useRouter();
  useEffect(() => {
    if (user === null) {
      router.push("/signin");
    }
  }, [user]);

  const [list, setList] = useState([]);

  // https://fakestoreapi.com/products/3
  //return data
  //   const fetchData = async (id) => {
  //     const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  //     const data = await res.json();
  //     return data;
  //   };
  //   useEffect(() => {
  //     const myWishListItems = [];
  //     if (user && user.wishList) {
  //       user.wishList.map(async (items) => {
  //         const item = await fetchData(items);
  //         myWishListItems.push(item);
  //         setList([...myWishListItems]);
  //       });
  //     }
  //   }, []);
  console.log(user);
  console.log(user.wishList);

  return (
    <Layout>
      {user && (
        <PaddingWrapper>
          <h1 className="text-2xl">Welcome, {user.name}!</h1>
          <p className="text-xl">Here is your wishlist:</p>
          <div className="flex justify-center flex-col w-full">
            {user.wishList.map((item) => (
              <article className="shadow-md mx-auto p-8 lg:w-1/2 my-3" key={item.id}>
                <h3 className="text-3xl">{item.title}</h3>
                <p className="font-bold">${item.price}</p>
                <img src={item.image} className="w-56 object-cover" />
                <p className="text-base">{item.description}</p>
              </article>
            ))}
          </div>
        </PaddingWrapper>
      )}
    </Layout>
  );
};

export default MyWishList;
