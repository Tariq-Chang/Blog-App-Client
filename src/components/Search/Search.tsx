import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

export default function Search() {
    return (
        <div className="p-8">
            <div className="relative mt-2 rounded-md shadow-sm max-w-[400px]">
                <input
                    type="text"
                    name="price"
                    id="price"
                    className="block w-full rounded-full border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Enter a search"
                />
                <button className="absolute inset-y-0 right-4 flex items-center text-gray-500 hover:text-gray-900">
                    <SearchIcon />
                </button>
            </div>
        </div>
    )
}

