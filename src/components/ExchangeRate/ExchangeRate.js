import React from "react";
import style from "./ExchangeRate.module.scss";

const ExchangeRate = ({ name, charCode, value }) => {
  return (
    <div className={style.body}>
      <div className={style.top}>
        {" "}
        {name},{charCode}{" "}
      </div>
      <div className={style.bottom}>{value}</div>
    </div>
  );
};
export default ExchangeRate;
