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
            <Button variant="btn-sm z-10 mx-auto my-10">
              Explore all items
            </Button>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="flex flex-col items-center justify-center px-20 py-12 bg-secondary_2">
          <h1 className="text-5xl font-bold text-primary_1 mx-auto mb-10 font-title">
            Benefit for your expediency
          </h1>
          <div className="grid grid-cols-3 space-x-8">
            <div className="h-full w-80 p-10">
              <div className="mx-auto bg-secondary_3 h-20 w-20 rounded-md p-4">
                <img src="/icons/money.png" alt="money" />
              </div>
              <h5 className="text-xl font-bold text-primary_1 text-center mx-auto my-4 font-title">
                Payment Method
              </h5>
              <p className="text-center text-sm font-thin text-primary_1">
                We accept all major credit and debit cards
              </p>
            </div>
            <div className="h-full w-80 p-10">
              <div className="mx-auto bg-secondary_4 h-20 w-20 rounded-md p-4">
                <img src="/icons/send.png" alt="send" />
              </div>
              <h5 className="text-xl font-bold text-primary_1 text-center mx-auto my-4 font-title">
                Return Policy
              </h5>
              <p className="text-center text-sm font-thin text-primary_1">
                You can return the product within 7 days
              </p>
            </div>
            <div className="h-full w-80 p-10">
              <div className="mx-auto bg-secondary_1 h-20 w-20 rounded-md p-4">
                <img src="/icons/headphone.png" alt="send" />
              </div>
              <h5 className="text-xl font-bold text-primary_1 text-center mx-auto my-4 font-title">
                Custumer Support
              </h5>
              <p className="text-center text-sm font-thin text-primary_1">
                We are here to help you 24/7
              </p>
            </div>
          </div>
        </div>
        <div className="relative bg-secondary_5 pb-8">
          <div className="flex flex-col items-center justify-center p-10">
            <h1 className="text-5xl font-bold text-primary_1 mx-auto mb-8 font-title">
              Testimonials
            </h1>
            <h6 className="text-xl font-thin text-primary_1">
              Over 1500+ happy customers
            </h6>
          </div>
          <div className="flex justify-between py-10 mx-40">
            <div className="bg-gray h-72 w-72 rounded-md" />
            <div className="mx-auto my-auto w-1/2">
              <h6 className="text-xl font-thin text-primary_1">
                “My experience with Mark is a complete sucess, from customer
                service, wide range of products, clean store, purchasing
                experience, the newsletter.Thank you.”
              </h6>
              <h6 className="text-md font-bold mt-10 text-primary_1">
                Maria Hill
              </h6>
              <h6 className="text-sm font-thin text-primary_1">
                CEO of ABC Company
              </h6>
            </div>
            <div className="flex flex-col space-y-2 justify-center">
              <div className="flex items-center justify-center p-1 bg-secondary_2 rounded-full w-6 h-6">
                <img src="/icons/back.png" className="w-2 h-auto" alt="" />
              </div>
              <div className="flex items-center justify-center p-1 bg-secondary_3 rounded-full w-6 h-6">
                <img src="/icons/front.png" className="w-2 h-auto" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="flex bg-secondary_2">
          <div className="w-1/2 bg-gray"></div>
          <div className="w-1/2 text-secondary_1 px-40 py-20">
            <h1 className="text-4xl font-thin text-primary_1 mx-auto font-title">
              Join Our
            </h1>
            <h1 className="text-4xl font-bold text-primary_1 mx-auto mb-2 font-title">
              Newsletter
            </h1>
            <h5 className="text-md font-medium text-primary_1 mx-auto font-title">
              Receive exclusive deals, discounts and many offers.
            </h5>
            <form action="">
              <input
                type="email"
                className="text-sm mt-6 mb-4 rounded w-full text-black py-2 px-3"
                placeholder="Enter your email"
              />
              <Button variant="btn-sm">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>

      <footer className="relative bg-secondary_5 py-14 px-32">
        <div className="flex justify-between">
          <div className="flex flex-col space-y-3">
            <img src="/images/Logo.png" className="w-24 h-auto" alt="" />
            <div className="grid grid-cols-5 gap-4 pl-1">
              <a href="">
                <img src="/icons/facebook.png" className="w-5 h-auto" alt="" />
              </a>
              <a href="">
                <img src="/icons/dribble.png" className="w-5 h-auto" alt="" />
              </a>
              <a href="">
                <img src="/icons/instagram.png" className="w-5 h-auto" alt="" />
              </a>
              <a href="">
                <img src="/icons/twitter.png" className="w-5 h-auto" alt="" />
              </a>
              <a href="">
                <img src="/icons/linkdin.png" className="w-5 h-auto" alt="" />
              </a>
            </div>
            <p className="text-sm font-medium text-primary_1">Address</p>
            <p className="text-xs font-thin text-primary_1">+123 456 789</p>
            <p className="text-xs font-thin text-primary_1">
              s6F8s@example.com
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <p className="text-xs font-bold text-primary_1">My Account</p>
            <div className="flex flex-col space-y-1">
            <a href="#" className="text-xs font-thin text-primary_1">Sign In</a>
            <a href="#" className="text-xs font-thin text-primary_1">Register</a>
            <a href="#" className="text-xs font-thin text-primary_1">Order Status</a>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <p className="text-xs font-bold text-primary_1">Help</p>
            <div className="flex flex-col space-y-1">
            <a href="#" className="text-xs font-thin text-primary_1">Shipping</a>
            <a href="#" className="text-xs font-thin text-primary_1">Return</a>
            <a href="#" className="text-xs font-thin text-primary_1">Sizing</a>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <p className="text-xs font-bold text-primary_1">Shop</p>
            <div className="flex flex-col space-y-1">
            <a href="#" className="text-xs font-thin text-primary_1">All Product</a>
            <a href="#" className="text-xs font-thin text-primary_1">Bedroom</a>
            <a href="#" className="text-xs font-thin text-primary_1">Living Room</a>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <p className="text-xs font-bold text-primary_1">Legal Stuff</p>
            <div className="flex flex-col space-y-1">
            <a href="#" className="text-xs font-thin text-primary_1">Shipping & Delivery</a>
            <a href="#" className="text-xs font-thin text-primary_1">Term & Conditions</a>
            <a href="#" className="text-xs font-thin text-primary_1">Privacy & Policy</a>
            </div>
          </div>
        </div>
        <p className="absolute bottom-2 text-sm font-thin text-primary_1">&copy; Copyright 2022. All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default HomePage;
