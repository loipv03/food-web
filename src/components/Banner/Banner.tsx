import { BsFillArrowRightCircleFill } from "react-icons/bs";
import classNames from "classnames/bind";

import styles from "./banner.module.scss";

const cx = classNames.bind(styles);

const Banner = () => {
  return (
    <div className={cx("banner")}>
      <img src="image/banner.png" alt="" />
      <div className={cx("title")}>100% Natural Food</div>
      <div className={cx("text")}>Choose the best healthier way of life</div>
      <div className={cx("btn")}>
        <button>Explore Now</button>
        <BsFillArrowRightCircleFill />
      </div>
    </div>
  );
};

export default Banner;
