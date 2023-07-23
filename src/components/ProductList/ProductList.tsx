import classNames from "classnames/bind";

import styles from "./productList.module.scss";

const cx = classNames.bind(styles);

const ProductList = () => {
  return (
    <div className={cx("product")}>
      <div className={cx("title")}>Our Products</div>
      <div className={cx("product_list")}>
        <div className={cx("product_item")}>
          <img src="image/product-Image-1.png" alt="" />
          <div className={cx("product_name")}>Calabrese Broccoli</div>
          <div className={cx("product_price")}>$13.00</div>
        </div>
        <div className={cx("product_item")}>
          <img src="image/product-Image-2.png" alt="" />
          <div className={cx("product_name")}>Calabrese Broccoli</div>
          <div className={cx("product_price")}>$13.00</div>
        </div>
        <div className={cx("product_item")}>
          <img src="image/product-Image-3.png" alt="" />
          <div className={cx("product_name")}>Calabrese Broccoli</div>
          <div className={cx("product_price")}>$13.00</div>
        </div>
        <div className={cx("product_item")}>
          <img src="image/product-Image-4.png" alt="" />
          <div className={cx("product_name")}>Calabrese Broccoli</div>
          <div className={cx("product_price")}>$13.00</div>
        </div>
        <div className={cx("product_item")}>
          <img src="image/product-Image-1.png" alt="" />
          <div className={cx("product_name")}>Calabrese Broccoli</div>
          <div className={cx("product_price")}>$13.00</div>
        </div>
        <div className={cx("product_item")}>
          <img src="image/product-Image-2.png" alt="" />
          <div className={cx("product_name")}>Calabrese Broccoli</div>
          <div className={cx("product_price")}>$13.00</div>
        </div>
        <div className={cx("product_item")}>
          <img src="image/product-Image-3.png" alt="" />
          <div className={cx("product_name")}>Calabrese Broccoli</div>
          <div className={cx("product_price")}>$13.00</div>
        </div>
        <div className={cx("product_item")}>
          <img src="image/product-Image-4.png" alt="" />
          <div className={cx("product_name")}>Calabrese Broccoli</div>
          <div className={cx("product_price")}>$13.00</div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
