/* This is a functional component in React called "ReadOnlyRow" that takes in three props: "product", "handleEditClick", and "handleDeleteClick". It returns a table row (<tr>) with four table data cells (<td>) that display the "Name", "Price", and "Quantity" properties of the "product" object. It also has two buttons, one for "Edit" and one for "Delete", that when clicked, call the "handleEditClick" and "handleDeleteClick" functions respectively and pass in the "product" object and "product.id" as arguments. The component is then exported as the default export. */

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
