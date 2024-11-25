import Navbar from "../components/Fragments/Navbar";
import Home from "../components/Fragments/Home";
import Button from "../components/Elements/Button";

const categories = [
  { name: "Living Room", href: "#", current: false },
  { name: "Bedroom", href: "#", current: false },
  { name: "Kitchen", href: "#", current: false },
  { name: "Dining Room", href: "#", current: false },
  { name: "Office", href: "#", current: false },
  { name: "Outdoor", href: "#", current: false },
  { name: "Outdoor", href: "#", current: false },
  { name: "Outdoor", href: "#", current: false },
  { name: "Outdoor", href: "#", current: false },
  { name: "Outdoor", href: "#", current: false },
  { name: "Outdoor", href: "#", current: false },
  { name: "Outdoor", href: "#", current: false },
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
            <div className="w-3/4 bg-gray">ss</div>
          </div>
        </div>
      </section>

      <section id="products">
        <div className="bg-secondary_4 flex items-center justify-center min-h-screen"></div>
      </section>
    </div>
  );
};

export default HomePage;
