import { configureStore, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "User",
  initialState: { expenses: [] },
  reducers: {
    addExpense(state, action) {
      state.expenses = [action.payload, ...state.expenses];
    },
  },
});

const store = configureStore({ reducer: userSlice.reducer });


export default store;
export  userSlice.actions;
