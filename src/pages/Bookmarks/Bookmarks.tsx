import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie'
import Cards from "../../layout/Cards/Cards";
import { Blog } from "../../interfaces/Blog";
import { useDispatch } from "react-redux";
import { saveBlogs } from "../../redux/features/blogSlice";

const Bookmarks = () => {
    const dispatch = useDispatch();
    const [savedBlogs, setSavedBlogs] = useState<Blog[]>()
    const url = "http://localhost:5000/api/v1/blogs";
    const fetchSavedBlogs = async() => {
        const token = Cookies.get('jwtToken');
        const response = await axios.get(url + '/savedBlogs', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        
        setSavedBlogs(response.data[0].savedBlogs);
        dispatch(saveBlogs(response.data[0].savedBlogs))

    }
    useEffect(() => {
        fetchSavedBlogs();
    }, [])
    return (
        <div className="p-8">
            <h1 
                className="text-3xl mb-6 tracking-wide text-blue-600">Bookmarks</h1>
                {(savedBlogs && savedBlogs.length > 0) ? 
                <Cards blogs={savedBlogs} /> : <h1 className="text-2xl">User has no Blog</h1>}
        </div>
    )
}

export default Bookmarks;