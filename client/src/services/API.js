import axios from 'axios';

const videosAPI = axios.create({
    baseURL: 'http://localhost:5000/'
});

export const getVideos = async () => {
    const {data} = await videosAPI.get();
    return data;
};

export const addVideo = async (video) => {
    const {data} = await videosAPI.post('', video);
    return data;
};

export const deleteVideo = async (id) => {
    const {data} = await videosAPI.delete(id);
    return data;
};

export const sortVideos = async (sortMethod) => {
    const data = await axios.get('http://localhost:5000/', {params: {order: sortMethod}});
    return data.data;
}