import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  const menuItems = [
    { icon: "fas fa-home", text: "Home" },
    { icon: "fas fa-user-friends", text: "My Network" },
    { icon: "fas fa-briefcase", text: "Jobs" },
    { icon: "fas fa-comment-dots", text: "Messaging" },
    { icon: "fas fa-bell", text: "Notifications" },
    { icon: "fas fa-user", text: "Profile" },
  ];

  return (
    <main>
      <nav className="linkedin-navbar">
        <a href="#" className="linkedin-navbar-brand">
          LinkedIn
        </a>
        <ul className="linkedin-navbar-menu">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={selectedItem === index ? "active" : ""}
              onClick={() => handleItemClick(index)}
            >
              <a href="#">
                <i className={`fas ${item.icon}`} />
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
};

export default Navbar;
