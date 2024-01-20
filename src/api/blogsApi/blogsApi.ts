import axios from '../axios'

// Get All Users Blogs
export const getAllBlogs = async() => {
    try {
        const response = await axios.get('/blogs');
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

// Get My Blogs
export const getUserBlogs = async() => {
    try {
        const response = await axios.get('/blogs/myBlogs');
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const searchBlogByTitle = async(title: string) => {
    try{
        const result = await axios.get(`/blogs/search?title=${title}`)
        return result;
    }catch(error){
        console.log(error);
    }
}