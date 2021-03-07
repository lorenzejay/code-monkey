import Layout from "../../components/layout";
import PaddingWrapper from "../../components/paddingWrapper";

export const getStaticPaths = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  const paths = data.map((item) => {
    return {
      params: { id: item.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

//context comes from the function above
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await res.json();

  return {
    props: { products: data },
  };
};

const WishItem = ({ products }) => {
  console.log(products);

  return (
    <Layout>
      <PaddingWrapper>
        <h1>{products.title}</h1>
        <h1>{products.price}</h1>
        <br />
        <h1>{products.description}</h1>
        <img src={products.image} />
      </PaddingWrapper>
    </Layout>
  );
};

export default WishItem;
