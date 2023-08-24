import axios from '../axios'
export const getBlogs = async() => {
    try {
        const response = await axios.get('/blogs');
        console.log("api", response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}