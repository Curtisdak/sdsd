import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

function SearchResults({
  openSearch,
  search,
  toggleCheck,
  handleDelete,
  searchCloseEl,
}) {
  return (
    openSearch && (
      <div className="filter-result">
        <div className="closeBtn-container">
          Guest found
          <IoCloseSharp className="closeBtn" onClick={searchCloseEl} />
        </div>
        {search.map((guest) => (
          <div key={guest.id} className="theGuest">
            <div className="name-container">
              <input
                type="checkbox"
                className="box"
                checked={guest.checked}
                onChange={() => toggleCheck(guest.id)}
              />
              <p>{guest.theGuest}</p>
            </div>
            <p>Table: {guest.table}</p>
            <MdDelete
              className="deletBtn"
              onClick={() => handleDelete(guest.id)}
            />
          </div>
        ))}
      </div>
    )
  );
}

export default SearchResults;
