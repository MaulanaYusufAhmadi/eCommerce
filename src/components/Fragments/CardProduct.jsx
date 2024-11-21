const CardProduct = (props) => {
    const { children } = props;
  return (
    <a
      className="w-full max-w-sm bg-secondary_1 border rounded-lg border-secondary_1 mx-2"
      href="#"
    >
      {children}
    </a>
  );
};

const Header = (props) => {
  const { src } = props;
    return (
    <a href="#">
      <img
        src={src}
        alt="chair 1"
        className="mx-auto mt-10 my-6 hover:scale-105 transition duration-500"
      />
    </a>
  );
};
const Body = (props) => {
    const { children, title, price } = props;
  return (
    <div className="px-5 pb-10">
      <a href="#" className="flex flex-col space-y-4">
        <h5 className="text-xl font-semibold tracking-tight text-primary_2">
          {title}
        </h5>
        <h6 className="text-sm font-thin tracking-tight text-primary_2">
          {children}
        </h6>
        <h5 className="text-xl font-semibold tracking-tight text-primary_2">
          ${price}
        </h5>
      </a>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;

export default CardProduct;
