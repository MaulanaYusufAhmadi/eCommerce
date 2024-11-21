import Button from "../Elements/Button";

const CardView = (props) => {
  const { children } = props;
  return <div className="w-full max-w-lg">{children}</div>;
};

const Header = (props) => {
  const { src } = props;
  return (
    <a
      href="#"
      className="bg-secondary_2 bg-cover flex items-center justify-center rounded-lg mb-5"
    >
      <img
        src={src}
        alt="chair 2"
        className="object-cover transition duration-500 hover:scale-105 sm:h-72"
      />
    </a>
  );
};

const Body = (props) => {
  const { title, price, rating } = props;
  return (
    <div className="flex justify-between mx-5">
      <div className="flex flex-col space-y-3 pb-10">
        <h3 className="text-2xl font-thin tracking-tight text-primary_1">
          {title}
        </h3>
        <div className="flex text-sky-500">
          <span className="sr-only">Star rating</span>
          <svg width="16" height="20" fill="currentColor">
            <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
          </svg>
          <p className="ml-2 text-lg">{rating}</p>
        </div>
        <h4 className="text-xl font-bold tracking-tight text-primary_1">
          ${price}
        </h4>
      </div>
      <div>
        <Button variant="btn">Add to cart</Button>
      </div>
    </div>
  );
};

CardView.Header = Header;
CardView.Body = Body;

export default CardView;
