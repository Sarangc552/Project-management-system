import React, { useContext, useState } from "react";
import "./search.css";
import { IoSearch } from "react-icons/io5";
import { projectmanagement } from "../../App";

const Search = () => {
  const { product, setproduct } = useContext(projectmanagement);
  const [item, setitem] = useState("");

  const searchitem = (e) => {
    setitem(e.target.value);
  };

  const searchsubmit = (i) => {
    i.preventDefault();
    console.log(item);

    // if (item.length) return product;

    const filteredProducts = product.filter((p) =>
      p.title.toLowerCase().includes(item.toLowerCase())
    );
    setproduct(filteredProducts);
  };

  return (
    <div>
      <div className="searchbar">
        <form className="searchform" onSubmit={searchsubmit}>
          <div className="search-input-container">
            <input
              className="w-50 searchinput"
              type="search"
              name="search"
              onChange={searchitem}
              placeholder="Search"
            />
            <button type="submit" className="search-icon-button">
              <IoSearch />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
