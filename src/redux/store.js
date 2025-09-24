import { configureStore } from '@reduxjs/toolkit';
import { reducer as formReducer } from 'redux-form';
import formSliceReducer from './formSlice';

export const store = configureStore({
  reducer: {
    form: formReducer, // Reducer from redux-form
    formData: formSliceReducer, // Your custom slice
  },
});
