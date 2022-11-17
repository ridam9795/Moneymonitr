import React from "react";
import { connect } from "react-redux";
function Totalspendings(props) {
  return <div>Totalspendings {props.totalSpending}</div>;
}
const mapStateToProps = (state) => {
  return {
    totalSpending: state.totalSpending,
  };
};

export default connect(mapStateToProps, null)(Totalspendings);
