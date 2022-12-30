import { ActiveLink } from "./ActiveLink";
import styles from "./Navbar.module.css";

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

export const Navbar = () => {
  return (
    <>
      <header className={styles.header}>
        <nav>
          {menuItems.map((item) => {
            return <ActiveLink key={item.href} {...item} />;
          })}
        </nav>
      </header>
    </>
  );
};
