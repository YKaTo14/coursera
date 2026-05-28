import React from "react";

const Navbar = ({ cartCount, currentView, onNavigate }) => {
  const itemClass = (view) => `nav-link ${currentView === view ? "active" : ""}`;

  return (
    <header className="navbar">
      <button className={itemClass("home")} onClick={() => onNavigate("home")}>
        Paradise Nursery
      </button>
      <nav className="nav-links">
        <button className={itemClass("home")} onClick={() => onNavigate("home")}>
          Home
        </button>
        <button className={itemClass("products")} onClick={() => onNavigate("products")}>
          Plants
        </button>
        <button className={itemClass("cart")} onClick={() => onNavigate("cart")}>
          Cart <span className="badge">{cartCount}</span>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;

