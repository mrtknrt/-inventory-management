import React from "react";

const ReadOnlyRow = ({ product, handleEditClick, handleDeleteClick }) => {
	return (
		<tr>
			<td>{product.Name}</td>
			<td>{product.Price}</td>
			<td>{product.Quantity}</td>
			<td className="justify-content-start">
				<button
					type="button"
					className="btn btn-success fs-5 me-3"
					onClick={(event) => handleEditClick(event, product)}
				>
					Edit
				</button>
				<button
					type="button"
					className="btn btn-danger fs-5"
					onClick={() => handleDeleteClick(product.id)}
				>
					Delete
				</button>
			</td>
		</tr>
	);
};

export default ReadOnlyRow;
