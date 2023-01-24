/* This is a React functional component named "App" that uses the useState hook to manage the state of a contact list. The component renders a table of contacts using the ReadOnlyRow and EditableRow components and includes functionality for adding, editing, and deleting contacts, as well as searching for contacts. The component also uses the nanoid library to generate unique IDs for new contacts, and it uses the mock-data.json file to initially populate the contact list. The component's state includes the contact list, the data for the add and edit forms, the ID of the contact being edited, and the search term used to filter the contact list. */

import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import data from "./mock-data.json";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";

const App = () => {
	/*   In this line of code, useState is a hook that allows the component to use state. It is called with the initial state value, which is the data imported from the "mock-data.json" file. The hook returns an array with two elements: the first element is the current state value, which is assigned to the variable contacts, and the second element is a function that can be used to update the state value, which is assigned to the variable setContacts. So, contacts variable holds the current state, and setContacts function is used to update the state.
	 */
	const [contacts, setContacts] = useState(data);

	/*   This line of code is similar to the previous one, it is also using the useState hook to manage the state of the add form data.

  It is calling useState with an initial state value of an object that has properties for the form fields "Name", "Price", and "Quantity" and initializes them as empty strings.

  The hook returns an array with two elements: the first element is the current state value of the add form data, which is assigned to the variable addFormData, and the second element is a function that can be used to update the state value, which is assigned to the variable setAddFormData. So, addFormData variable holds the current state of the add form and setAddFormData function is used to update the state when the user inputs the data into the form. */

	const [addFormData, setAddFormData] = useState({
		Name: "",
		Price: "",
		Quantity: "",
	});

	/*   This line of code is similar to the previous two, it also uses the useState hook to manage the state of the edit form data.

  It calls useState with an initial state value of an object that has properties for the form fields "Name", "Price", and "Quantity" and initializes them as empty strings.

  The hook returns an array with two elements: the first element is the current state value of the edit form data, which is assigned to the variable editFormData, and the second element is a function that can be used to update the state value, which is assigned to the variable setEditFormData. So, editFormData variable holds the current state of the edit form and setEditFormData function is used to update the state when the user inputs the data into the form. */

	const [editFormData, setEditFormData] = useState({
		Name: "",
		Price: "",
		Quantity: "",
	});

	/*   In this line of code, useState is being called with an initial state value of null and it returns an array with two elements: the first element is the current state value of the editContactId, which is assigned to the variable editContactId, and the second element is a function that can be used to update the state value, which is assigned to the variable setEditContactId.

  editContactId variable holds the id of the contact that is currently being edited. When the user clicks on the "Edit" button of a contact, the function handleEditClick is called and it sets the editContactId with the id of the contact that was clicked. This value is then used to identify which contact to update when the user submits the edit form.
  setEditContactId is a function that is used to update the editContactId state. It's called when user clicks on the edit button or cancel the edit mode. */

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
