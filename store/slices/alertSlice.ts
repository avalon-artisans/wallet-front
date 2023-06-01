import { createSlice } from '@reduxjs/toolkit';
import { colors } from '@material-tailwind/react/types/generic';
import React from 'react';

interface AlertSliceState {
  isVisible: boolean;
  color: colors;
  message: React.ReactNode;
}

/**
 * Alert slice
 * @author Kenneth Sumang
 * @since  2023.06.01
 */
export const alertSlice = createSlice({
  name: 'alert',
  initialState: {
    isVisible: false,
    color: 'red',
    message: 'Default error message.'
  } as AlertSliceState,
  reducers: {
    /**
     * Mutates the alert visibility
     * @param state
     * @param action
     */
    changeAlertVisibility: (state, action) => {
      state.isVisible = action.payload;
    },
    /**
     * Mutates the alert message
     * @param state
     * @param action
     */
    changeMessage: (state, action) => {
      state.message = action.payload;
    },
    /**
     * Mutates the alert color
     * @param state
     * @param action
     */
    changeAlertColor: (state, action) => {
      state.color = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  changeAlertVisibility,
  changeMessage,
  changeAlertColor
} = alertSlice.actions;

export default alertSlice.reducer;