import React from "react";


const SearchBar = ({ searchQuery, onSearchChange }) => {
    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search PDFs..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
            />
        </div>
    );
};

export default SearchBar;