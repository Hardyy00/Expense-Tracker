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

    deleteNotification(state, action) {
      state.activeNotifications = state.activeNotifications.filter(
        (notification) => notification.id !== action.payload
      );
    },
  },
});

const store = configureStore({ reducer: userSlice.reducer });

export const addExpense = (expense, id) => {
  return async (dispatch) => {
    const response = await apiConnector(
      "post",
      `http://localhost:8000/addExpense/${id}`,
      expense
    );

    dispatch(userSlice.actions.addExpense(response.data.expense));
  };
};

export const setLimit = (amount, type, id) => {
  return async (dispatch) => {
    const response = await apiConnector(
      "patch",
      `http://localhost:8000/setLimit/${id}`,
      { type, amount }
    );

    if (response.data.success) {
      dispatch(userActions.setLimit({ limitType: type, amount }));
    }
  };
};

export const deleteNotification = (id, userId) => {
  return async (dispatch) => {
    const response = await apiConnectore(
      "delete",
      `http://localhost:8000/message/${userId}?id=${id}`
    );

    if (response.data.success) {
      dispatch(userActions.deleteNotification(id));
    }
  };
};

export default store;
export const userActions = userSlice.actions;
