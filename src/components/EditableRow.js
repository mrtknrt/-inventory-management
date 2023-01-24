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
