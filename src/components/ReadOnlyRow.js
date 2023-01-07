import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.Name}</td>
      <td>{contact.Price}</td>
      <td>{contact.Quantity}</td>
      <td className="justify-content-start">
        <button
          type="button"
          className="btn btn-success fs-5 me-3"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-danger fs-5"
          onClick={() => handleDeleteClick(contact.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
