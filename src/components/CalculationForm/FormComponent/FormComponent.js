import React, { useEffect } from "react";
import { Field, useFormState } from "react-final-form";
import MySelect from "./MySelect";
import InputText from "./InputText";
import style from "./FormComponent.module.scss";

function FormComponent({ options, addHistory }) {
  const { values } = useFormState();
  useEffect(() => {
    if (Object.keys(values).length === 4) {
      addHistory(values);
    }
  }, [values]);

  return (
    <>
      <div className={style.row}>
        <Field name="valueA" component={InputText} type="number" />
        <Field name="selectA" options={options} component={MySelect} />
      </div>

      <div className={style.row}>
        <Field name="valueB" component={InputText} disabled="disabled" />
        <Field name="selectB" options={options} component={MySelect} />
      </div>
    </>
  );
}

export default FormComponent;
