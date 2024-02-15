import { IoMdAddCircleOutline } from "react-icons/io";
import { CiImageOn } from "react-icons/ci";
import { CiVideoOn } from "react-icons/ci";
import { ChangeEvent, useRef, useState } from "react";
import axios from "axios";
import Cookies from 'js-cookie'

export default function Create() {
    const [showAddMedia, setShowAddMedia] = useState(false);
    const [thumbnailFile, setThumbnailFile] = useState();
    const [content, setContent] = useState('');
    const url = "http://localhost:5000/api/v1/blogs/addBlogThumbnail";
    const textAreaRef = useRef();
    const handleThumbnailChange = async (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        const token = Cookies.get('jwtToken');
        const formData = new FormData();
        formData.append('thumbnail', files[0])
        try {
            const response = await axios.post(url, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log("Response: ", response);
            setThumbnailFile(response?.data?.img_url);
        } catch (error) {
            console.log('ERROR: ', error)
        }
    }

    const handleTextAreaChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setContent(event.target.value);
        adjustTextareaHeight();
      };
    
      const adjustTextareaHeight = () => {
        if (textAreaRef.current) {
          textAreaRef.current.style.height = 'auto';
          textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
        }
      };
    
    return (
        <div className="w-[60%] mx-auto">
            {/* Thumbnail */}
            <div>
                <input type="file" name="thumbnail" id="thumbnail" className="invisible w-full h-full" onChange={handleThumbnailChange} />
                <label htmlFor="thumbnail">
                    <div className={`flex justify-center items-center h-56 border-2 bg-gray-100 border-gray-400 rounded-lg cursor-pointer bg-no-repeat bg-contain bg-center hover:bg-gray-200`} style={{ backgroundImage: `url(${thumbnailFile})` }}>
                        <IoMdAddCircleOutline className="text-gray-500 w-16 h-16" />
                    </div>
                </label>
            </div>

            <div className="relative">
                {/* Title */}
                <input type="text" name="title" placeholder="Title" className="border-none text-4xl text-gray-600 m-2 focus:outline-none  focus:ring-0 placeholder:text-gray-400" />
                {/* Content and Actions */}
                <div className="flex">
                    <button className="absolute -bottom-10 left-2 rounded-full p-2 text-gray-500 hover:text-gray-800">
                        <IoMdAddCircleOutline className="text-2xl" onClick={() => setShowAddMedia(!showAddMedia)} />
                    </button>
                    {showAddMedia && <div className="flex w-14 absolute left-12 -bottom-8">
                        <input type="file" name="img" id="img" className="invisible  w-0" accept="image/*" />
                        <label htmlFor="img">
                            <CiImageOn className="text-2xl text-blue-600 cursor-pointer" />
                        </label>

                        <input type="file" name="video" id="video" className="invisible" accept="video/*" />
                        <label htmlFor="video">
                            <CiVideoOn className="text-2xl text-blue-600 cursor-pointer" />
                        </label>
                    </div>}

                    <textarea id="content"
                        ref={textAreaRef}
                        onChange={handleTextAreaChange}
                        placeholder="Share your thoughts"
                        className="w-full overflow-hidden resize-none text-xl text-gray-600 ml-2 border-none placeholder:text-gray-400 focus:ring-0"></textarea>
                </div>
                <button className="absolute right-0 mt-8 bg-gray-800 text-white px-4 py-2 rounded-lg drop-shadow-lg w-32 hover:bg-gray-900">Post</button>
            </div>
        </div>
    )
}