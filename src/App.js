/* This is a React functional component named "App" that uses the useState hook to manage the state of a product list. The component renders a table of contacts using the ReadOnlyRow and EditableRow components and includes functionality for adding, editing, and deleting contacts, as well as searching for contacts. The component also uses the nanoid library to generate unique IDs for new contacts, and it uses the mock-data.json file to initially populate the product list. The component's state includes the product list, the data for the add and edit forms, the ID of the product being edited, and the search term used to filter the product list. */

import React, { useState, Fragment } from "react";

/* This line of code is importing the nanoid function from the "nanoid" library.

nanoid is a small, secure, and fast library that generates unique, non-guessable, URL-friendly ids. It's a helper function that creates a unique id, based on a cryptographically-strong random generator.

In this case, it's used in the handleAddFormSubmit function to generate a unique id for each new contact that is added to the contact list. The nanoid() function is called to generate a new id, which is then used as the id of the new contact object, before being added to the contact list. */
import { nanoid } from "nanoid";
import "./App.css";

/* This line of code is importing the data from a JSON file named "mock-data.json" in the same directory as the JavaScript file. JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate. It's a common format for storing and exchanging data.

In this case, the imported data is being used to initialize the state of the contact list when the component is first rendered. The data is an array of objects, each object represents a contact with properties such as "Name", "Price", and "Quantity". And, this data is used to populate the contact list when the component first renders. */
import data from "./mock-data.json";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";

const App = () => {
	/*   In this line of code, useState is a hook that allows the component to use state. It is called with the initial state value, which is the data imported from the "mock-data.json" file. The hook returns an array with two elements: the first element is the current state value, which is assigned to the variable contacts, and the second element is a function that can be used to update the state value, which is assigned to the variable setProducts. So, contacts variable holds the current state, and setProducts function is used to update the state.
	 */
	const [contacts, setProducts] = useState(data);

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

	/*   In this line of code, useState is being called with an initial state value of null and it returns an array with two elements: the first element is the current state value of the editProductId, which is assigned to the variable editProductId, and the second element is a function that can be used to update the state value, which is assigned to the variable setEditProductId.

  editProductId variable holds the id of the product that is currently being edited. When the user clicks on the "Edit" button of a product, the function handleEditClick is called and it sets the editProductId with the id of the product that was clicked. This value is then used to identify which product to update when the user submits the edit form.
  setEditProductId is a function that is used to update the editProductId state. It's called when user clicks on the edit button or cancel the edit mode. */

	const [editProductId, setEditProductId] = useState(null);

	/*   This is a JavaScript function called "handleAddFormChange" that takes in an event as a parameter. The function first calls "event.preventDefault()" to prevent the default behavior of the event from occurring. Then, it retrieves the "name" attribute of the event's target element and assigns it to the variable "fieldName". It also retrieves the "value" of the event's target element and assigns it to the variable "fieldValue".
  Then, it creates a new object "newFormData" which is a copy of the "addFormData" object using the spread operator. It then updates the value of the key of newFormData object that matches the "fieldName" with the "fieldValue". Finally, it updates the state of "addFormData" using the "setAddFormData" function and passing in the "newFormData" object. */

	const handleAddFormChange = (event) => {
		/*     The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur. For example, this can be useful when: Clicking on a "Submit" button, prevent it from submitting a form. Clicking on a link, prevent the link from following the URL. */
		event.preventDefault();

		/*     The getAttribute() method returns the value of an element's attribute. */
		const fieldName = event.target.getAttribute("name");
		/*     In this line of code, event.target.value is a property of the input element that fired the event. It retrieves the current value of the input element, which is the text entered by the user. This value is then assigned to the variable fieldValue, which is used later in the function to update the corresponding field of the editFormData state.

    So, event.target is the input element that fired the event and event.target.value retrieves the current value of that input, which is the value entered by the user. */
		const fieldValue = event.target.value;

		/*     In this line of code, newFormData is being defined as a new object with the properties and values of the current addFormData state. This is being achieved by using the spread operator (...).

    The spread operator creates a new object that includes all the properties of the old object, and it copies the properties and values of the old object to the new object.

    So, newFormData is a new object that has all the same properties and values as the current addFormData state, but it's a separate object that can be updated without changing the original state. This is a common pattern when updating the state, to create a new copy of the state and make the necessary changes to it, before updating the state with the setter function. */
		const newFormData = { ...addFormData };

		/*     In this line of code, the value of fieldValue is being assigned to the property of newFormData object that corresponds to the field that was changed.

fieldName is the name of the input element that fired the event, it's used to access the corresponding property of newFormData object.

newFormData[fieldName] = fieldValue is equivalent to newFormData.fieldName = fieldValue which means it's updating the corresponding property of the newFormData object with the new value from fieldValue variable. */
		newFormData[fieldName] = fieldValue;

		setAddFormData(newFormData);
	};

	/*   This is an arrow function that handles the change event for the inputs in the edit form. When the user types something into an input, this function is called, and it does the following:

  It calls event.preventDefault() to prevent the default behavior of the event, which in this case is to submit the form.
  It retrieves the name attribute of the input element that fired the event, and assigns it to the variable fieldName.
  It retrieves the current value of the input element that fired the event, and assigns it to the variable fieldValue.
  It creates a new object, newFormData that is a copy of the current editFormData state, using the spread operator.
  It updates the property of the newFormData object that corresponds to the field that was changed, using the fieldName variable and assigns the new value from fieldValue variable.
  It calls the setEditFormData function with the updated newFormData object as an argument to update the state.
  This way, it updates the state of the form data with the new value each time a user types something into an input, so that the component always has the current form data available for when the user submits the form. */

	const handleEditFormChange = (event) => {
		event.preventDefault();

		const fieldName = event.target.getAttribute("name");
		const fieldValue = event.target.value;

		const newFormData = { ...editFormData };
		newFormData[fieldName] = fieldValue;

		setEditFormData(newFormData);
	};

	/*   This is a JavaScript function that handles the submission of a form used to add a new product to a list of products. The function is called handleAddFormSubmit and takes an event object as its parameter. The first line of the function uses the preventDefault() method to prevent the default behavior of the form submission.

Then, it creates a new object called newProduct with properties id, Name, Price, and Quantity which are assigned with the values from the form data.

It creates a new array called newProducts that is a copy of the existing products array, with the new newProduct added to it.

Finally, it updates the state of the products by calling the setProducts function and passing in the newProducts array as the argument. */

	const handleAddFormSubmit = (event) => {
		event.preventDefault();

		const newProduct = {
			id: nanoid(),
			Name: addFormData.Name,
			Price: addFormData.Price,
			Quantity: addFormData.Quantity,
		};

		const newProducts = [...contacts, newProduct];
		setProducts(newProducts);
	};

	/*   This is a JavaScript function that handles the submission of a form used to edit an existing product in a list of products. The function is called handleEditFormSubmit and takes an event object as its parameter. The first line of the function uses the preventDefault() method to prevent the default behavior of the form submission.

Then, it creates a new object called editedProduct with properties id, Name, Price, and Quantity which are assigned with the values from the form data. The id of the product being edited is stored in editProductId variable, which is passed as the id property of the editedProduct object.

It creates a new array called newProducts that is a copy of the existing products array.

It uses the findIndex method to find the index of the product in the products array that has the same id as the editProductId.
It then assigns the editedProduct object to the same index in the newProducts array

Finally, it updates the state of the products by calling the setProducts function and passing in the newProducts array as the argument. It also reset the editProductId state by calling setEditProductId passing null as the parameter to indicate no product is being edited. */

	const handleEditFormSubmit = (event) => {
		event.preventDefault();

		const editedProduct = {
			id: editProductId,
			Name: editFormData.Name,
			Price: editFormData.Price,
			Quantity: editFormData.Quantity,
		};

		const newProducts = [...contacts];

		const index = contacts.findIndex((product) => product.id === editProductId);

		newProducts[index] = editedProduct;

		setProducts(newProducts);
		setEditProductId(null);
	};

	const handleEditClick = (event, product) => {
		event.preventDefault();
		setEditProductId(product.id);

		const formValues = {
			Name: product.Name,
			Price: product.Price,
			Quantity: product.Quantity,
		};

		setEditFormData(formValues);
	};

	const handleCancelClick = () => {
		setEditProductId(null);
	};

	const handleDeleteClick = (contactId) => {
		const newProducts = [...contacts];

		const index = contacts.findIndex((product) => product.id === contactId);

		newProducts.splice(index, 1);

		setProducts(newProducts);
	};

	const [searchTerm, setSearchTerm] = useState("");

	const handleSearchChange = (event) => {
		setSearchTerm(event.target.value);
	};

	const filteredProducts = contacts.filter((product) =>
		product.Name.toLowerCase().includes(searchTerm.toLowerCase())
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
						{filteredProducts.map((product) => (
							<Fragment>
								{editProductId === product.id ? (
									<EditableRow
										editFormData={editFormData}
										handleEditFormChange={handleEditFormChange}
										handleCancelClick={handleCancelClick}
									/>
								) : (
									<ReadOnlyRow
										product={product}
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
