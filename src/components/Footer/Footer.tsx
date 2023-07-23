import classNames from "classnames/bind";

import styles from "./footer.module.scss";

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <footer className={cx("footer")}>
      <div className={cx("footer_item")}>
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
      {/* <div className={cx("footer_item")}>
        <div className={cx("contact")}>contact us</div>
        <div className={cx("logo")}>
          <img src="image/logo.png" alt="" />
        </div>
        <div className={cx("utility")}>Utility Pages</div>
      </div>
      <div className={cx("footer_item")}>
        <div className={cx("about_banner")}></div>
      </div> */}
    </footer>
  );
};
export default Footer;
