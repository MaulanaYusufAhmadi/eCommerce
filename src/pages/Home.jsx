const navigation = [
  { name: "Home", href: "#home", id: "home", current: true },
  { name: "Products", href: "#products", id: "products", current: false },
  { name: "Categories", href: "#categories", id: "categories", current: false },
  { name: "About", href: "#about", current: false },
  { name: "Contact", href: "#contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const HomePage = () => {
  return (
    <div className="relative">
      <nav className="fixed w-full z-50">
        <div className="flex justify-between py-5 px-6 bg-opacity-0 sm:px-6 sm:ml-6 sm:block">
          <div className="flex-shrink-0">
            <img src="/images/Logo.png" alt="" />
          </div>
          <div className="flex space-x-5">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.current
                    ? "decoration-primary_1 font-bold decoration-2 underline underline-offset-8"
                    : "text-primary_1 text-thin hover:font-bold hover:underline hover:decoration-primary_1 hover:decoration-2 hover:underline-offset-8 transition duration-500",
                  "rounded-md px-3 py-2 text-base"
                )}
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex space-x-6 items-center">
            <img src="/icons/search.png" alt="" className="w-5 h-5" />
            <img src="/icons/cart.png" alt="" className="w-5 h-5" />
            <img src="/icons/profile.png" alt="" className="w-5 h-5" />
          </div>
        </div>
      </nav>
      <section
        id="home"
        className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat min-h-screen rounded-3xl"
      >
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        

      </section>
      <section id="products">
        <div className="bg-secondary_5 flex items-center justify-center min-h-screen"></div>
      </section>
      <section id="categories">
        <div className="bg-secondary_4 flex items-center justify-center min-h-screen"></div>
      </section>
    </div>
  );
};

export default HomePage;
