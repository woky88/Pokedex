import { FaSearch } from "react-icons/fa";
import React from "react";
const { useState } = React;

const Searchbar = (props) => {
  const { onSearch } = props;
  const [search, setSearch] = useState("");

  const onChange = (e) => {
    let value = e.target.value.toLowerCase();
    setSearch(value);
    if (e.target.value.length === 0) {
      onSearch(null);
    }
  };

  const onClick = async (e) => {
    onSearch(search);
  };

  document.body.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      let value = e.target.value.toLowerCase();
      onSearch(value);
    }
  })

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input className="search" placeholder="Buscar pokemon..." onChange={onChange} />
      </div>
      <div className="searchbar-btn">
        <button onClick={onClick}><FaSearch /></button>
      </div>
    </div>
  );
};

export default Searchbar;
