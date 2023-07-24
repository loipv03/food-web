import { AiOutlineTwitter } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import classNames from "classnames/bind";

import styles from "./footer.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <footer className={cx("footer")}>
      <div className={cx("footer_subscribe")}>
        <div className={cx("subscribe")}>
          <img src="image/subscribe.png" alt="" />
          <form className={cx("form")}>
            <input type="text" name="" id="" placeholder="Your Email Address" />
            <button type="submit" className={cx("btn")}>
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className={cx("footer_about")}>
        <div className={cx("contact")}>
          <h6>contact us</h6>
          <ul>
            <li>
              <span>Email: </span>phanvanloi1522003@gmail.com
            </li>

            <li>
              <span>Phone: </span>0364336088
            </li>

            <li>
              <span>Address: </span>Nam Từ Liêm - Hà Nội
            </li>
          </ul>
        </div>
        <div className={cx("footer_widget")}>
          <div className={cx("img")}>
            <img src="image/logo.png" alt="" />
          </div>
          <div className={cx("text")}>
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum simply dummy text of the printing{" "}
          </div>
          <div className={cx("icon")}>
            <ul>
              <li>
                <Link to={""}>
                  <AiOutlineInstagram />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  <BsFacebook />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  <BsGithub />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  <AiOutlineTwitter />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={cx("footer_link")}>
          <h6>Utility Pages</h6>
          <ul>
            <li>Style Guide</li>
            <li>404 Not Found</li>
            <li>Password Protected</li>
            <li>Licences</li>
            <li>Changelog</li>
          </ul>
        </div>
      </div>
      <div className={cx("footer_copyright")}>
        <div className={cx("text")}>
          Copyright © <span>Organick</span> | Designed by{" "}
          <span>VictorFlow</span> Templates - Powered by <span>Webflow</span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
