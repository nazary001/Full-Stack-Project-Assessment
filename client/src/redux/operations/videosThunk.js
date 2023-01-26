import { createAsyncThunk } from "@reduxjs/toolkit";
import { addVideo, deleteVideo, getVideos, sortVideos } from "../../services/API";

export const getVideosThunk = createAsyncThunk('/videos/getAll', async (_, thunkApi) => {
    try {
        const data = await getVideos();
        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    };
});

export const addVideosThunk = createAsyncThunk('/videos/add', async (video, thunkApi) => {
    try {
        const data = await addVideo(video);
        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    };
});

export const deleteVideosThunk = createAsyncThunk('/videos/delete', async (id, thunkApi) => {
    try {
        const data = await deleteVideo(id);
        return data[0].id;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    };
});

export const sortVideosThunk = createAsyncThunk('/videos/sort', async (sortMethod, thunkApi) => {
    try {
        const data = await sortVideos(sortMethod);
        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    };
});