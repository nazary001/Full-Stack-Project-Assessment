import { configureStore } from '@reduxjs/toolkit';
import { videosSlice } from './videos/videosSlice';

export const store = configureStore({
    reducer: {
      [videosSlice.name]: videosSlice.reducer,
    }
  });