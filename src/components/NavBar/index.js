import React, { useState } from "react";
import styles from "./NavBar.module.css";
import { Button } from "../Button";
import { Search } from "../Search";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedPage } from "../../store/PageSlice";
import Utils from "../../Utils/Utils";

export const Navbar = () => {
  const selectedPage = useSelector((state) => state.page.selectedPage);
  const dispatch = useDispatch();

  const pages = [
    { key: 1, text: "Operation Management", icon: "library" },
    { key: 2, text: "Interaction Analysis", icon: "chart" },
    { key: 3, text: "Admin Panel", icon: "cog" },
  ];

  const [showMenu, setShowMenu] = useState(false);

  const showMenuItems = () => {
    setShowMenu(!showMenu);
  };

  const getButtons = () => {
    return pages.map((item) => {
      return (
        <Button
          selected={selectedPage === item.key}
          key={item.key}
          onClick={() => dispatch(setSelectedPage(item))}
          icon={item.icon}
        >
          {item.text}
        </Button>
      );
    });
  };

  return (
    <>
      <nav className={styles.navbar}>
        <a href="/" className={styles.logo}>
          <img src="./images/logo.png" alt="logo" />
        </a>
        <div className={styles.menu} onClick={showMenuItems}>
          {Utils.getIcon("menu")}
        </div>
        <div className={styles.navItems}>{getButtons()}</div>
        <div className={styles.profile}>
          <Search />
          <div className={styles.avatar}>
            <img src="./images/user.jpg" alt="avatar" />
          </div>
        </div>
      </nav>
      {showMenu && <div className={styles.menuItems}>
        <div className={styles.menuProfile}>
          <Search />
          <div className={styles.avatar}>
            <img src="./images/user.jpg" alt="avatar" />
          </div>
        </div>
        {getButtons()}
      </div>}
    </>
  );
};
