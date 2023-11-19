import React from "react";
import classNames from "classnames/bind";
import styles from "./statistic.module.scss";

const cx = classNames.bind(styles);

const Statistic = () => {
  return (
    <section className="bg-blue w-full py-16">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className={cx("report_card")}>
            <h3 className={cx("report_card_heading")}>300+</h3>
            <p className={cx("report_card_content")}>Job Completed</p>
          </div>
          <div className={cx("report_card")}>
            <h3 className={cx("report_card_heading")}>4K+</h3>
            <p className={cx("report_card_content")}>Happy Customers</p>
          </div>
          <div className={cx("report_card")}>
            <h3 className={cx("report_card_heading")}>8+</h3>
            <p className={cx("report_card_content")}>Years Experience</p>
          </div>
          <div className={cx("report_card")}>
            <h3 className={cx("report_card_heading")}>180+</h3>
            <p className={cx("report_card_content")}>Won Awards</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistic;
