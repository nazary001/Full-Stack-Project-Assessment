import { createSlice } from '@reduxjs/toolkit';
import { addVideosThunk, deleteVideosThunk, getVideosThunk, sortVideosThunk } from '../operations/videosThunk';

export const videosSlice = createSlice({
    name: 'videos',
    initialState: {items: [], error: null, isLoading: false},
    extraReducers: builder => builder
    .addCase(getVideosThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
    })
    .addCase(getVideosThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
    })
    .addCase(getVideosThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
    })
    .addCase(addVideosThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
    })
    .addCase(addVideosThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = [action.payload, ...state.items];
    })
    .addCase(addVideosThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
    })
    .addCase(deleteVideosThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
    })
    .addCase(deleteVideosThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter(video => video.id !== action.payload);
    })
    .addCase(deleteVideosThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
    })
    .addCase(sortVideosThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
    })
    .addCase(sortVideosThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
    })
    .addCase(sortVideosThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
    })
})