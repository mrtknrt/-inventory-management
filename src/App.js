import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import data from "./mock-data.json";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";

const App = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    Name: "",
    Price: "",
    Quantity: "",
  });

  const [editFormData, setEditFormData] = useState({
    Name: "",
    Price: "",
    Quantity: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      Name: addFormData.Name,
      Price: addFormData.Price,
      Quantity: addFormData.Quantity,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      Name: editFormData.Name,
      Price: editFormData.Price,
      Quantity: editFormData.Quantity,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      Name: contact.Name,
      Price: contact.Price,
      Quantity: contact.Quantity,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.Name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container fs-3">
      <form>
        <input
          type="text"
          placeholder="Search for product only"
          className="rounded"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </form>
      <form onSubmit={handleEditFormSubmit}>
        <table className="mt-3 rounded w-100">
          <thead className="bg-primary rounded">
            <tr className="text-white">
              <th className="w-25">Name</th>
              <th className="w-25">Price</th>
              <th className="w-25">Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="bg-light">
            {filteredContacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2 className="mt-3">Add a Product</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          className="rounded me-3"
          type="text"
          name="Name"
          required="required"
          placeholder="Enter a name"
          onChange={handleAddFormChange}
        />
        <input
          className="rounded me-3"
          type="text"
          name="Price"
          required="required"
          placeholder="Enter an price"
          onChange={handleAddFormChange}
        />
        <input
          className="rounded me-3"
          type="text"
          name="Quantity"
          required="required"
          placeholder="Enter a quantity"
          onChange={handleAddFormChange}
        />
        <button className="btn btn-success fs-5" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default App;
