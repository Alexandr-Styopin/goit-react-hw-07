import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "contacts",
  initialState: {
    name: "",
  },
  reducers: {
    changeFilter: {
      reducer(state, action) {
        // console.log(action.payload);
        console.log(state.name);
        state.name = action.payload;
      },
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export default filterSlice.reducer;
