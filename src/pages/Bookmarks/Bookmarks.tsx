import Cards from "../../layout/Cards/Cards";
import { useSelector } from "react-redux";

const Bookmarks = () => {
  const savedBlogs = useSelector((state: any) => state.blogs.savedBlogs);
  return (
    <div className="p-8">
      <h1 className="text-3xl mb-6 tracking-wide text-blue-600">Bookmarks</h1>
      {savedBlogs && savedBlogs.length > 0 ? (
        <Cards blogs={savedBlogs} />
      ) : (
        <h1 className="text-2xl">User has no Blog</h1>
      )}
    </div>
  );
};

export default Bookmarks;
