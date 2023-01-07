import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          className="rounded"
          type="text"
          required="required"
          placeholder="Enter a name"
          name="Name"
          value={editFormData.Name}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          className="rounded"
          type="text"
          required="required"
          placeholder="Enter an price"
          name="Price"
          value={editFormData.Price}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          className="rounded"
          type="text"
          required="required"
          placeholder="Enter a quantity"
          name="Quantity"
          value={editFormData.Quantity}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td className="justify-content-start">
        <button type="submit" className="btn btn-success fs-5 me-3">
          Save
        </button>

        <button
          type="button"
          className="btn btn-danger fs-5"
          onClick={handleCancelClick}
        >
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
