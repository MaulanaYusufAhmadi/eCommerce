import CardProduct from "../components/Fragments/CardProduct";
import CardView from "../components/Fragments/CardView";
import CardList from "../components/Fragments/CardList";
import { Fragment } from "react";

const products = [
  {
    id: 1,
    title: "Armchair",
    description: "Light single chair",
    price: "145",
    rating: "4.9",
    src: "/images/chair_1.png",
  },
  {
    id: 2,
    title: "Minimal Sofa",
    description: "Light single chair",
    price: "100",
    rating: "4.5",
    src: "/images/chair_2.png",
  },
  {
    id: 3,
    title: "Premium Sofa",
    description: "Light single chair",
    price: "150",
    rating: "3.9",
    src: "/images/chair_3.png",
  },
  {
    id: 4,
    title: "Dining Chair",
    description: "Light single chair",
    price: "80",
    rating: "4.7",
    src: "/images/chair_1.png",
  },
  {
    id: 5,
    title: "Big Sofa",
    description: "Light single chair",
    price: "200",
    rating: "4.2",
    src: "/images/chair_2.png",
  },
];

const ProductsPage = () => {
  return (
      <div className="flex justify-center">
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header src={product.src} />
            <CardProduct.Body title={product.title} price={product.price}>
              {product.description}
            </CardProduct.Body>
          </CardProduct>
        ))}

        <CardView>
          <CardView.Header src="/images/chair_2.png"></CardView.Header>
          <CardView.Body
            title="Larkin Wood Fullset"
            price="49.99"
            rating="4.9"
          ></CardView.Body>
        </CardView>

        {/* <CardList>
        <CardList.Image src="/images/chair_3.png" />
        <CardList.Body title="Larkin Wood Fullset" price="49.99" rating="4.9"></CardList.Body>
      </CardList> */}
      </div>
  );
};

export default ProductsPage;
