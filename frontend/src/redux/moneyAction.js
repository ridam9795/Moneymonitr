import { ADD_BILL, ADD_EXPENSE, ADD_INVESTMENT, ADD_EMI } from "./moneyTypes";

export const addExpense = (data) => {
  return {
    type: ADD_EXPENSE,
    payLoad: data,
  };
};

export const addBill = (data) => {
  return {
    type: ADD_BILL,
    payLoad: data,
  };
};
export const addInvestment = (data) => {
  return {
    type: ADD_INVESTMENT,
    payLoad: data,
  };
};
export const addEmi = (data) => {
  return {
    type: ADD_EMI,
    payLoad: data,
  };
};
