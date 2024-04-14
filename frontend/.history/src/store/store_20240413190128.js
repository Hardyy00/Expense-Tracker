import { configureStore, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "User",
  initialState: { expenses: [] },
  reducers: {
    addExpense(state, action) {
      console.log("here");
      state.expenses = [action.payload, ...state.expenses];

      console.log(state);
    },
  },
});

const store = configureStore({ reducer: userSlice.reducer });

export default store;
export const userActions = userSlice.actions;
