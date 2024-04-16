import { configureStore, createSlice } from "@reduxjs/toolkit";
import { apiConnector } from "../Operations/apiConnector";

const userSlice = createSlice({
  name: "User",
  initialState: null,
  reducers: {
    setUser(state, action) {
      return action.payload;
    },
    addExpense(state, action) {
      state.expenses = [action.payload, ...state.expenses];
    },

    setLimit(state, action) {
      if (action.payload.limitType === "spent") {
        state.spentLimit = action.payload.amount;
      } else if (action.payload.limitType === "loaned to") {
        state.loanedToLimit = action.payload.amount;
      } else {
        state.loanedFromLimit = action.payload.amount;
      }
    },
  },
});

const store = configureStore({ reducer: userSlice.reducer });

export const addExpense = (expense, id) => {
  return async (dispatch) => {
    const response = await apiConnector(
      "post",
      `http://localhost:8000/addExpense/${id}`,
      JSON.stringify(expense)
    );

    dispatch(response.data.expense);
  };
};

export default store;
export const userActions = userSlice.actions;
