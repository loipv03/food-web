import classNames from "classnames/bind";

import styles from "./aboutBanner.module.scss";

const cx = classNames.bind(styles);

const AboutBanner = () => {
  return (
    <div className={cx("about_banner")}>
      <img src="image/about-banner.png" alt="" />
      <button className={cx("btn")}>shop now</button>
    </div>
  );
};

export default AboutBanner;
