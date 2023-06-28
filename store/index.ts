import { configureStore } from '@reduxjs/toolkit'
import alertSlice from './slices/alertSlice';

/**
 * Redux store
 */
const store =  configureStore({
  reducer: {
    alert: alertSlice
  },
});

export type RootState = ReturnType<typeof store.getState>
export default store;