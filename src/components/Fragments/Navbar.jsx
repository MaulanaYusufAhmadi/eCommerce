import { useState } from "react";

const navigation = [
  { name: "Home", href: "#home", id: "home", current: true },
  { name: "Categories", href: "#categories", id: "categories", current: false },
  { name: "Products", href: "#products", id: "products", current: false },
  { name: "About", href: "#about", id: "about", current: false },
  { name: "Contact", href: "#contact", id: "contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [currentNav, setCurrentNav] = useState("home");

  const handleProfile = () => {
    let button = document.getElementById("user-menu-button")
    let hidden = document.getElementById("user-menu").classList.toggle("hidden");

    if (hidden) {
      button.setAttribute("aria-expanded", "false");
    } else {
      button.setAttribute("aria-expanded", "true");
    }  
  };

  const handleNavClick = (id) => {
    setCurrentNav(id);
    navigation.forEach((item) => {
      item.current = item.id === id;
    });
  };

  return (
    <nav className="fixed w-full z-50">
      <div className="flex justify-between py-5 px-6 bg-opacity-0 sm:px-6 sm:ml-6 sm:block">
        <div className="flex-shrink-0">
          <img src="/images/Logo.png" alt="Logo" />
        </div>
        <div className="flex space-x-5">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => handleNavClick(item.id)}
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
          <img src="/icons/search.png" alt="Search" className="w-5 h-5" />
          <img src="/icons/cart.png" alt="Cart" className="w-5 h-5" />
          <img
            id="user-menu-button"
            src="/icons/profile.png"
            onClick={handleProfile}
            alt="Profile"
            className="w-5 h-5"
          />
        </div>
        <div
          className="hidden absolute right-5 z-10 mt-10 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          id="user-menu"
          tabIndex="-1"
        >
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700"
            role="menuitem"
            tabIndex="-1"
            id="user-menu-item-0"
          >
            Your Profile
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700"
            role="menuitem"
            tabIndex="-1"
            id="user-menu-item-1"
          >
            Settings
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700"
            role="menuitem"
            tabIndex="-1"
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
