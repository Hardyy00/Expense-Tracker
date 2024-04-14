import { configureStore, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "User",
  initialState: {
    expenses: [],
    spentLimit: 0,
    loanedFromLimit: 0,
    loanedToLimit: 0,
  },
  reducers: {
    addExpense(state, action) {
      state.expenses = [action.payload, ...state.expenses];
    },
  },
});

const store = configureStore({ reducer: userSlice.reducer });

export default store;
export const userActions = userSlice.actions;
