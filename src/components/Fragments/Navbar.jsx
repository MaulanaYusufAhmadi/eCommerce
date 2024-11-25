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


const Navbar = () => {
  const handleProfile = () => {
    document.getElementById("user-menu-button").removeAttribute
  }

  return (
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
          <img src="/icons/profile.png" onClick={handleProfile} alt="" className="w-5 h-5" />
        </div>
        <div
          class="absolute right-5 z-10 mt-10 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          id="user-menu-button"
          tabindex="-1"
        >
          {/* <!-- Active: "bg-gray-100 outline-none", Not Active: "" --> */}
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700"
            role="menuitem"
            tabindex="-1"
            id="user-menu-item-0"
          >
            Your Profile
          </a>
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700"
            role="menuitem"
            tabindex="-1"
            id="user-menu-item-1"
          >
            Settings
          </a>
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700"
            role="menuitem"
            tabindex="-1"
            id="user-menu-item-2"
          >
            Sign out
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
