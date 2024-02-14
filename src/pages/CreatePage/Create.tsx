import { IoMdAddCircleOutline } from "react-icons/io";
import { CiImageOn } from "react-icons/ci";
import { CiVideoOn } from "react-icons/ci";
import { useState } from "react";

export default function Create() {
    const [showAddMedia, setShowAddMedia] = useState(false);
    return (
        <div className="w-[60%] mx-auto">
            {/* Thumbnail */}
            <div >
                <input type="file" name="" id="thumbnail" className="invisible w-full h-full" />
                <label htmlFor="thumbnail">
                    <div className="flex justify-center items-center h-56 border-2 bg-gray-200 border-gray-400 rounded-lg cursor-pointer hover:bg-gray-300">
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
                    <textarea name="content" id="content"
                        rows="1"
                        placeholder="Share your thoughts"
                        className="w-full text-xl text-gray-600 ml-2 border-none placeholder:text-gray-400 focus:ring-0"></textarea>
                </div>
                <button className="absolute right-0 mt-8 bg-gray-800 text-white px-4 py-2 rounded-lg drop-shadow-lg w-32 hover:bg-gray-900">Post</button>
            </div>
        </div>
    )
}