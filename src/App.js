import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./components/Main";
import CalculationForm from "./components/CalculationForm";
import * as action from "./actions";
import { getCountry } from "./selectors";
import logo from "./assets/image/logo.svg";
import style from "./App.module.scss";
import spiner from "./style/spiner.module.scss";

function App({ isLoading, country, fetchCountry }) {
  useEffect(() => {
    fetchCountry();
  }, []);
  if (isLoading || country.length === 0) {
    return <div className={spiner.loader}>await</div>;
  }
  return (
    <Router>
      <div className={style.App}>
        <div className={style.headerWrap}>
          <img src={logo} className={style.logo} alt="logo" />
          <h1 className={style.title}>Курс валют</h1>
        </div>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/calculation" component={CalculationForm} />
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => ({
  country: getCountry(state),
  isLoading: state.country.isLoading,
});

const mapDispatchToProps = {
  fetchCountry: action.fetchCountry,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
