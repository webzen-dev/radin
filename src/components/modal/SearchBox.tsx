import { MdClose, MdOutlineSearch } from "react-icons/md";
import { Dispatch, SetStateAction, useContext } from "react";
import { ProjectContext } from "../../context/ProjectContext";
import SearchItem from "./SearchItem";

type SearchBoxProps = {
  setOpenSearchBox: Dispatch<SetStateAction<boolean>>;
};
const SearchBox = ({ setOpenSearchBox }: SearchBoxProps) => {
  const context = useContext(ProjectContext);
  if (!context) {
    return <div>Loading...</div>;
  }
  const { setSearchTerm } = context;
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div className="search-box-modal">
      <div className="x"></div>
      <MdClose id="closeSearchBox" onClick={() => setOpenSearchBox(false)} />
      <div className="form">
        <input
          type="text"
          placeholder="Search......."
          onChange={handleSearch}
        />
        <MdOutlineSearch />
      </div>
      <SearchItem />
    </div>
  );
};

export default SearchBox;
