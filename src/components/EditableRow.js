/* 
This is a functional React component named "EditableRow" that renders a table row for editing a contact. It receives three props: editFormData, handleEditFormChange, and handleCancelClick which are passed down from the parent component.

The component returns JSX that renders a <tr> element that contains three <td> elements, each containing an input element for editing the name, price, and quantity of the contact. The value of each input is set to the corresponding property of the editFormData prop, and the onChange event is set to call the handleEditFormChange function passed down from the parent component.

The component also contains two buttons, one for submitting the form and one for canceling the editing of the contact. The Save button is of class "btn btn-success" and the Cancel button of class "btn btn-danger" and calls the handleCancelClick function passed down from the parent component when clicked.

Finally, the component exports the "EditableRow" component so that it can be imported and used in other parts of the application.
import React from "react";
 */

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
					/* This is a JavaScript code snippet where an input element is being rendered in a JSX template. The input element has a value attribute set to the "Name" property of an object called "editFormData". The input element also has an onChange event being added to it, which is passed a callback function named "handleEditFormChange".
          When the input value is changed, the onChange event will trigger and call the "handleEditFormChange" function, which will handle the change event and probably update the "editFormData" object with the new value of the input.
          It is likely that the input element is being used to allow the user to edit the "Name" property of a product, and the "handleEditFormChange" function is used to update the application's state with the new value of the "Name" field. */
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
