import React from "react";
import Select from "react-select";
import style from "./MySelect.module.scss";
import arroy from "../../../../assets/image/Polygon.svg";

const indicatorsContainer = ({ innerProps }) => {
  return (
    <div {...innerProps}>
      <img src={arroy} alt="arroy" />
    </div>
  );
};
function MySelect({ options, input }) {
  const customStyles = {
    control: (provided) => ({
      ...provided,
      height: "100%",
      border: "2px solid #434F4D",
      borderRadius: "10px",
      boxShadow: "none",
      padding: 18,
      fontSize: "30px",
      lineHeight: "35px",
      ":hover": {
        borderColor: "#000",
      },
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      ":hover": {
        borderColor: "#000",
      },
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: "none",
    }),
    indicatorContainer: (provided) => ({
      ...provided,
      ":after": {
        content: "",
        borderColor: "#000",
      },
    }),
  };
  return (
    <Select
      components={{ IndicatorsContainer: indicatorsContainer }}
      className={style.select}
      styles={customStyles}
      options={options}
      defaultValue={input.value}
      {...input}
    />
  );
}

export default MySelect;
