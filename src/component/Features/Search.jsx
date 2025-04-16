import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";

const Search = () => {
  const inputRef = useRef();

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <>
      <div
        className="relative ml-20 min-md:mr-10 rounded-2xl flex items-center bg-white ,in-md:gap-1
            max-sm:w-[150px] max-sm:ml-5"
      >
        <input
          ref={inputRef}
          className=" mr-1 bg-none outline-none w-90 relative cursor-pointer text-black placeholder:text-zinc-600 placeholder:normal-case pl-2.5 uppercase
            max-sm:w-[100px] max-sm:ml-5 max-sm:mr-1 "
          type="Search"
          placeholder="Cari"
        />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          onClick={handleFocus}
          className="text-zinc-600 mt-1 mr-2 hover:cursor-pointer"
        />
      </div>
    </>
  );
};

export default Search;
