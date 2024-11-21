import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";
import CardView from "../components/Fragments/CardView";
import CardList from "../components/Fragments/CardList";

const ProductsPage = () => {
  return (
    <div className="flex justify-center">
      {/* <CardProduct>
        <CardProduct.Header src="/images/chair_1.png" />
        <CardProduct.Body title="Armchair" price="49.99">Light single chair</CardProduct.Body>
      </CardProduct> */}
     
     {/* <CardView>
        <CardView.Header src="/images/chair_2.png"></CardView.Header>
        <CardView.Body title="Larkin Wood Fullset" price="49.99" rating="4.9"></CardView.Body>
     </CardView> */}

      <CardList>
        <CardList.Image src="/images/chair_3.png" />
        <CardList.Body title="Larkin Wood Fullset" price="49.99" rating="4.9"></CardList.Body>
      </CardList>
    </div>
  );
};

export default ProductsPage;
