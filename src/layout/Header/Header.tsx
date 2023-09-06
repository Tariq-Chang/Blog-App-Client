import bellIcon from '../../assets/images/bell.png';
import saveIcon from '../../assets/images/save.png';
import Search from '../../components/Search/Search'

function Header() {
  return (
    <div className="flex justify-between items-center border-b">
        <Search/>
        <div className="flex gap-6">
            <img src={bellIcon} className="h-8 w-8" alt="" />
            <img src={saveIcon} className="h-8 w-8" alt="" />
        </div>
    </div>
  )
}

export default Header