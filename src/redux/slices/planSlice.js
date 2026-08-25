// store/planSlice.js

import { createSlice } from "@reduxjs/toolkit";

const savePlan = localStorage.getItem('selectedPlan');

const initialState = {
  selectedPlan: savePlan?JSON.parse(savePlan):null,
};

const planSlice = createSlice({
  name: "plan",
  initialState,
  reducers: {
    setSelectedPlan: (state, action) => {
      state.selectedPlan = action.payload;
      localStorage.setItem('selectedPlan',JSON.stringify(action.payload));
    },

    clearSelectedPlan: (state) => {
      state.selectedPlan = null;
    },
  },
});

export const {
  setSelectedPlan,
  clearSelectedPlan,
} = planSlice.actions;

export default planSlice.reducer;