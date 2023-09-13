// counter slice
import { createSlice } from "@reduxjs/toolkit";

// init value
let initialState = {
  count: 0,
};

export const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    incrementbyValue: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { increment, decrement, reset, incrementbyValue } =
  CounterSlice.actions;
export default CounterSlice.reducer;
