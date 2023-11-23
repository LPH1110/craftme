import React from "react";
import classNames from "classnames/bind";
import styles from "./statistic.module.scss";

const cx = classNames.bind(styles);

const SectionDivider = () => {
  return <div className="w-32 h-0.5 md:w-0.5 md:h-20 bg-light-gray/50"></div>;
};

const Statistic = () => {
  return (
    <section className="bg-blue w-full py-16">
      <div className="container">
        <div className="flex gap-6 flex-wrap md:flex-nowrap items-center justify-center md:justify-between">
          <div className={cx("report_card")}>
            <h3 className={cx("report_card_heading")}>300+</h3>
            <p className={cx("report_card_content")}>Job Completed</p>
          </div>
          <SectionDivider />
          <div className={cx("report_card")}>
            <h3 className={cx("report_card_heading")}>4K+</h3>
            <p className={cx("report_card_content")}>Happy Customers</p>
          </div>
          <SectionDivider />
          <div className={cx("report_card")}>
            <h3 className={cx("report_card_heading")}>8+</h3>
            <p className={cx("report_card_content")}>Years Experience</p>
          </div>
          <SectionDivider />
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
