import axios from '../axios'
export const getBlogs = async() => {
    try {
        const response = await axios.get('/blogs');
        return response.data;
    } catch (error) {
        console.log(error);
    }
}