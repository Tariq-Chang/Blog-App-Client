import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import { useSearchBlogByTitle } from "../../hooks/useBlogsMutation";
import { setAllBlogs } from "../../redux/features/blogSlice";
import { useDispatch } from "react-redux";

export default function Search() {
    const [search, setSearch] = useState<string>("");
    const dispatch = useDispatch();
    const searchBlogByTitle = useSearchBlogByTitle();
    
    const handleSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const result = await searchBlogByTitle.mutateAsync(search);
        dispatch(setAllBlogs(result?.data.result))
    }
  return (
    <form className="relative mt-2 rounded-md shadow-sm max-w-[500px]" onSubmit={handleSubmit}>
      <input
        type="text"
        name="price"
        id="price"
        className="block w-full rounded-full border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="Enter a search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="absolute inset-y-0 right-4 flex items-center text-gray-500 hover:text-gray-900">
        <SearchIcon />
      </button>
    </form>
  );
}
