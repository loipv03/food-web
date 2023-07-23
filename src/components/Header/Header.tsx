import { BiMenu } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import classNames from "classnames/bind";

import styles from "./header.module.scss";
import { Link, NavLink } from "react-router-dom";

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <header className={cx("header")}>
      <div className={cx("mobile_nav")}>
        <BiMenu />
      </div>
      <div className={cx("logo")}>
        <Link to={"home"}>
          <img src="image/logo.png" alt="" />
        </Link>
      </div>
      <nav className={cx("navbar")}>
        <ul>
          <li>
            <NavLink
              to={"home"}
              className={(nav) => cx({ active: nav.isActive })}>
              home
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"about"}
              className={(nav) => cx({ active: nav.isActive })}>
              about
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"page"}
              className={(nav) => cx({ active: nav.isActive })}>
              page
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"shop"}
              className={(nav) => cx({ active: nav.isActive })}>
              shop
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"projects"}
              className={(nav) => cx({ active: nav.isActive })}>
              projects
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"news"}
              className={(nav) => cx({ active: nav.isActive })}>
              news
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={cx("header_right")}>
        <Link to={"cart"}>
          <div className={cx("cart")}>
            <div className={cx("icon_cart")}>
              <AiOutlineShoppingCart />
            </div>
            <div className={cx("text")}>Cart (0)</div>
          </div>
        </Link>
        <div className={cx("user")}>
          <img src="image/avata.png" alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
