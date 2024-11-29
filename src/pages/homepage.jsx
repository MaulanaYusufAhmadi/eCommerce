import Navbar from "../components/Fragments/Navbar";
import Home from "../components/Fragments/Home";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    title: "Armchair",
    description: "Light single chair",
    price: "145",
    rating: "4.9",
    background: "bg-secondary_1",
    src: "/images/chair_1.png",
  },
  {
    id: 2,
    title: "Minimal Sofa",
    description: "Light single chair",
    price: "100",
    rating: "4.5",
    background: "bg-secondary_2",
    src: "/images/chair_2.png",
  },
  {
    id: 3,
    title: "Premium Sofa",
    description: "Light single chair",
    price: "150",
    rating: "3.9",
    background: "bg-secondary_3",
    src: "/images/chair_3.png",
  },
  {
    id: 4,
    title: "Dining Chair",
    description: "Light single chair",
    price: "80",
    rating: "4.7",
    background: "bg-secondary_4",
    src: "/images/chair_1.png",
  },
  {
    id: 5,
    title: "Big Sofa",
    description: "Light single chair",
    price: "200",
    rating: "4.2",
    background: "bg-secondary_1",
    src: "/images/chair_2.png",
  },
  {
    id: 6,
    title: "Big Sofa",
    description: "Light single chair",
    price: "200",
    rating: "4.2",
    background: "bg-secondary_3",
    src: "/images/chair_2.png",
  },
  {
    id: 7,
    title: "Big Sofa",
    description: "Light single chair",
    price: "200",
    rating: "4.2",
    background: "bg-secondary_4",
    src: "/images/chair_2.png",
  },
];

const categories = [
  { name: "Living Room", href: "#", current: false },
  { name: "Bedroom", href: "#", current: false },
  { name: "Kitchen", href: "#", current: false },
  { name: "Dining Room", href: "#", current: false },
  { name: "Office", href: "#", current: false },
  { name: "Outdoor", href: "#", current: false },
  { name: "aaaa", href: "#", current: false },
  { name: "sdssss", href: "#", current: false },
  { name: "sasdasasas", href: "#", current: false },
  { name: "wqwqqw", href: "#", current: false },
  { name: "sssssss", href: "#", current: false },
  { name: "aaaaqqqq", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const HomePage = () => {
  return (
    <div className="relative">
      <Navbar />
      <Home />

      <section id="categories">
        <div className="flex-col w-full px-20 bg-secondary_5 flex min-h-screen">
          <h1 className="text-5xl font-bold text-primary_1 mx-auto my-10 font-title">
            Explore By Categories
          </h1>
          <div className="flex justify-between space-x-4">
            <div className="w-1/4">
              <form class="relative">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  />
                </svg>
                <input
                  class="focus:ring-2 focus:ring-primary_2 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
                  type="text"
                  aria-label="Search"
                  placeholder="Search"
                />
              </form>
              <div className="flex flex-col overflow-y-scroll space-y-6 h-96 my-8">
                {categories.map((category) => (
                  <a
                    key={category.name}
                    href={category.href}
                    className={classNames(
                      category.current
                        ? "decoration-primary_1 font-bold decoration-2 underline underline-offset-8"
                        : "text-primary_1 text-thin hover:font-bold hover:decoration-primary_1 hover:decoration-2 hover:underline-offset-8 transition duration-500",
                      "rounded-md px-3 py-2 text-base"
                    )}
                  >
                    {category.name}
                  </a>
                ))}
              </div>
              <Button variant="btn-sm">All Categories</Button>
            </div>
            <div className="flex flex-col justify-center w-3/4 p-6">
              <div className="grid grid-cols-3 grid-flow-row gap-4">
                <div className="flex flex-col gap-3 items-center justify-center bg-secondary_2 h-56 rounded-lg">
                  <h1 className="text-3xl font-title">Living Room</h1>
                  <Button variant="btn-sm font-thin">Explore</Button>
                </div>
                <div className="flex flex-col gap-3 items-center justify-center bg-secondary_2 h-56 rounded-lg">
                  <h1 className="text-3xl font-title">Living Room</h1>
                  <Button variant="btn-sm font-thin">Explore</Button>
                </div>
                <div className="flex flex-col gap-3 items-center justify-center bg-secondary_2 h-56 rounded-lg">
                  <h1 className="text-3xl font-title">Living Room</h1>
                  <Button variant="btn-sm font-thin">Explore</Button>
                </div>
                <div className="flex flex-col gap-3 items-center justify-center bg-secondary_2 h-56 rounded-lg">
                  <h1 className="text-3xl font-title">Living Room</h1>
                  <Button variant="btn-sm font-thin">Explore</Button>
                </div>
                <div className="flex flex-col gap-3 items-center justify-center bg-secondary_2 h-56 rounded-lg">
                  <h1 className="text-3xl font-title">Living Room</h1>
                  <Button variant="btn-sm font-thin">Explore</Button>
                </div>
                <div className="flex flex-col gap-3 items-center justify-center bg-secondary_2 h-56 rounded-lg">
                  <h1 className="text-3xl font-title">Living Room</h1>
                  <Button variant="btn-sm font-thin">Explore</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products">
        <div className="relative bg-secondary_5 min-h-screen">
          <div className="absolute z-0 -left-56">
            <img
              src="/images/chair_2.png"
              className="min-h-screen "
              alt="kursi"
            />
          </div>
          <div className="flex flex-col z-10">
            <h1 className="text-5xl z-10 font-bold text-primary_1 mx-auto my-10 font-title">
              Popular Products
            </h1>
            <div className="flex w-7/8 overflow-x-scroll ml-40 space-x-4 z-10">
              {products.map((product) => (
                <CardProduct key={product.id} background={product.background}>
                  <CardProduct.Header src={product.src} />
                  <CardProduct.Body title={product.title} price={product.price}>
                    {product.description}
                  </CardProduct.Body>
                </CardProduct>
              ))}
            </div>
            <Button variant="btn-sm z-10 mx-auto my-10">Explore all items</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
