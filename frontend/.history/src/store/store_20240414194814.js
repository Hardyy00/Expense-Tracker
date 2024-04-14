import { configureStore, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "User",
  initialState: {
    expenses: [],
    spentLimit: 1000,
    loanedFromLimit: 1000,
    loanedToLimit: 1000,
  },
  reducers: {
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

      console.log(
        state.expenses,
        state.loanedFromLimit,
        state.loanedFromLimit,
        state.spentLimit
      );
    },
  },
});

const store = configureStore({ reducer: userSlice.reducer });

export default store;
export const userActions = userSlice.actions;
