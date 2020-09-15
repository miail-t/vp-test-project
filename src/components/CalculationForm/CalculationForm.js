import React, { Component } from "react";
import cn from "classnames";
import { connect } from "react-redux";
import { Form } from "react-final-form";
import createDecorator from "final-form-calculate";
import { getArrCountry } from "../../selectors";
import * as action from "../../actions";
import FormComponent from "./FormComponent/";
import utils from "../../style/utils.module.scss";
import style from "./CalculationForm.module.scss";

class CalculationForm extends Component {
  onSubmit = (values) => {
    this.props.addHistory(values);
  };

  render() {
    const { arrCountry, addHistory } = this.props;
    const options = arrCountry.map((elem) => {
      return {
        value: elem.Value,
        label: elem.Name + "," + elem.CharCode,
        charCode: elem.CharCode,
        nominal: elem.Nominal,
      };
    });

    const calculator = createDecorator({
      field: ["valueA", "selectA", "selectB"],
      updates: {
        valueB: (maximumValue, allValues) => {
          if (allValues.valueA && allValues.selectA && allValues.selectB) {
            return (
              (allValues.valueA * allValues.selectA.value) /
              allValues.selectA.nominal /
              (allValues.selectB.value / allValues.selectB.nominal)
            ).toFixed(4);
          }
        },
      },
    });

    return (
      <div className={cn(style.container, utils.container)}>
        <h2 className={cn(style.title, utils.title)}>Курс валют ЦБ РФ</h2>
        <Form
          onSubmit={this.onSubmit}
          initialValues={{
            valueA: 1,
            selectA: options.find((option) => option.charCode === "RUB"),
            valueB: "",
          }}
          subscription={{
            values: true,
          }}
          decorators={[calculator]}
          render={({ handleSubmit }) => (
            <form className={style.form} onSubmit={handleSubmit}>
              <FormComponent options={options} addHistory={addHistory} />
            </form>
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  arrCountry: getArrCountry(state),
});

const mapDispatchToProps = {
  addHistory: action.addHistory,
};

export default connect(mapStateToProps, mapDispatchToProps)(CalculationForm);
