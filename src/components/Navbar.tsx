"use client";
import React, { useState } from "react";
import { FaFolder, FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";

import Link from "next/link";
import styles from "../styles/navbar.module.css";
import { usePathname } from "next/navigation";

const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className={styles.nav__icon} />,
    path: "/",
  },
  {
    id: 2,
    name: "About",
    icon: <FaUser className={styles.nav__icon} />,
    path: "/about",
  },
  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolder className={styles.nav__icon} />,
    path: "/portfolio",
  },
  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelope className={styles.nav__icon} />,
    path: "/contact",
  },
];

function Navbar() {
  const pathname = usePathname();
  const [showMenu , setShowMenu] = useState(false);
  return (
    <nav className={styles.navbar}>
      <div className={` ${styles.nav__menu} ${showMenu ? styles.show_menu : styles.nav__menu}`}>
        <ul className={styles.nav__list}>
          {links.map(({ name, icon, path }, index) => {
            const isActive = pathname === path;
            return (
              <li className={styles.nav__items} key={index}>
                <Link
                  href={path}
                  className={`${styles.nav__link} ${
                    isActive ? styles.nav__active : ""
                  }`} 
                  onClick={() => setShowMenu(!showMenu)}
                >
                  {icon}
                  <h3 className={styles.nav__name}>{name}</h3>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={` ${styles.nav__toggle} ${showMenu ? styles.animate_toggel : styles.nav__toggle}`} onClick={() => setShowMenu(!showMenu)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;
