import classNames from "classnames/bind";

import styles from "./OfferBanner.module.scss";

const cx = classNames.bind(styles);

const OfferBanner = () => {
  return (
    <div className={cx("offer_banner")}>
      <img src="image/offer-banner-1.png" alt="" />
      <img src="image/offer-banner-2.png" alt="" />
    </div>
  );
};

export default OfferBanner;
