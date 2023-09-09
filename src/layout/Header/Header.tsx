import bellIcon from '../../assets/images/bell.png';
import saveIcon from '../../assets/images/save.png';
import Search from '../../components/Search/Search'
import { BiSolidBell } from 'react-icons/bi';
import {BsFillBookmarkFill} from 'react-icons/bs';
function Header() {
  return (
    <div className="flex justify-between items-center mt-10 ml-4 mb-4">
        <Search/>
        <div className="flex gap-x-4 items-end">
          <BiSolidBell className="h-6 w-6 text-gray-700"/>
          <BsFillBookmarkFill className="h-6 w-5 text-gray-700"/>
        </div>
    </div>
  )
}

export default Header