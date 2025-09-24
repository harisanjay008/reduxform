import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
};

const formSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    saveFormData: (state, action) => {
      state.data = action.payload;
    },
    clearFormData: (state) => {
      state.data = null;
    },
  },
});

export const { saveFormData, clearFormData } = formSlice.actions;
export default formSlice.reducer;
