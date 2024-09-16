import { MdClose, MdOutlineSearch } from "react-icons/md";
import { Dispatch, SetStateAction } from 'react';
type SearchBoxProps = {
    setOpenSearchBox: Dispatch<SetStateAction<boolean>>;
  };
const SearchBox = ({ setOpenSearchBox }: SearchBoxProps) => {
  return (
    <div className="search-box-modal">
        <MdClose id="closeSearchBox"  onClick={() => setOpenSearchBox(false)}/>
      <div className="form">
        <input type="text" placeholder="Search......." />
        <MdOutlineSearch />
      </div>
    </div>
  );
};

export default SearchBox;



//
