const CardProduct = (props) => {
  const { children, background } = props;
  return (
    <div
      className={`w-full max-w-sm rounded-lg mx-21 my-5 ${background}`}
    >
      {children}
    </div>
  );
};

const Header = (props) => {
  const { src } = props;
  return (
    <a href="#">
      <div className="w-60 h-60 max-w-sm">
        <img
          src={src}
          alt="chair 1"
          className="mx-auto h-60 mt-10 my-6 object-cover hover:scale-105 transition duration-500"
        />
      </div>
    </a>
  );
};
const Body = (props) => {
  const { children, title, price } = props;
  return (
    <div className="px-5 pb-8">
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
