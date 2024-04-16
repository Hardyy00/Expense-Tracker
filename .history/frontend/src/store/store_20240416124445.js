import { configureStore, createSlice } from "@reduxjs/toolkit";

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

export default store;
export const userActions = userSlice.actions;
