import React, { Component } from "react";
import { connect } from "react-redux";
import { getCountry, getHistory } from "../../selectors";
import { Link } from "react-router-dom";
import ExchangeRate from "../ExchangeRate";
import cn from "classnames";
import boy from "../../assets/image/boy.svg";
import utils from "../../style/utils.module.scss";
import style from "./Main.module.scss";

class Main extends Component {
  render() {
    const { country, history } = this.props;

    const history2 = history.map((elem, index) => {
      return (
        <li className={style.listItem} key={index}>
          {elem.valueA} {elem.selectA.charCode} = {elem.valueB}{" "}
          {elem.selectB.charCode}
        </li>
      );
    });

    return (
      <div>
        <div className={cn(style.container, utils.container)}>
          <h2 className={cn(style.title, utils.title)}>Курс валют ЦБ РФ</h2>
          <div className={style.wrapper}>
            <ExchangeRate
              name={country.USD.Name}
              charCode={country.USD.CharCode}
              value={country.USD.Value}
            />
            <ExchangeRate
              name={country.EUR.Name}
              charCode={country.EUR.CharCode}
              value={country.EUR.Value}
            />
            <ExchangeRate
              name={country.GBP.Name}
              charCode={country.GBP.CharCode}
              value={country.GBP.Value}
            />
          </div>
        </div>

        <div className={cn(style.containerHistory, utils.container)}>
          <div className={style.left}>
            <h2 className={cn(style.title, utils.title)}>Курс валют ЦБ РФ</h2>

            <ul className={style.list}>{history2}</ul>

            <Link className={style.link} to={`/calculation`}>
              Конвертор валют
            </Link>
          </div>
          <div className={style.right}>
            <img src={boy} alt="boy" />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  country: getCountry(state),
  history: getHistory(state),
});

export default connect(mapStateToProps)(Main);
