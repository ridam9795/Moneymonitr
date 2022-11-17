import { ADD_BILL, ADD_EXPENSE, ADD_INVESTMENT, ADD_EMI } from "./moneyTypes";

const initialState = {
  expense: [],
  investment: [],
  bill: [],
  emi: [],
  totalSpending: 0,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return {
        ...state,
        expense: [...state.expense, action.payLoad],
        totalSpending: state.totalSpending + parseInt(action.payLoad.amount),
      };
    case ADD_BILL:
      return {
        ...state,
        bill: [...state.bill, action.payLoad],
        totalSpending: state.totalSpending + parseInt(action.payLoad.amount),
      };
    case ADD_EMI:
      return {
        ...state,
        emi: [...state.emi, action.payLoad],
        totalSpending: state.totalSpending + parseInt(action.payLoad.amount),
      };
    case ADD_INVESTMENT:
      return {
        ...state,
        investment: [...state.investment, action.payLoad],
        totalSpending: state.totalSpending + parseInt(action.payLoad.amount),
      };
    default:
      return state;
  }
};
export default reducer;
