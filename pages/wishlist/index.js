// import React from "react";

// export const getStaticPaths = async () => {
//   const res = await fetch("https://fakestoreapi.com/products");
//   const data = await res.json();

//   const paths = data.map((item) => {
//     return {
//       params: { id: item.id.toString() },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };

// //context comes from the function above
// export const getStaticProps = async (context) => {
//   const id = context.params.id;
//   const res = await fetch(`https://fakestoreapi.com/products/${id}`);
//   const data = await res.json();

//   return {
//     props: data,
//   };
// };

// const WishItem = ({ data }) => {
//   return (
//     <div>
//       <h1>this is a page for each wish list</h1>
//       <p>{data.title}</p>
//     </div>
//   );
// };

// export default WishItem;
