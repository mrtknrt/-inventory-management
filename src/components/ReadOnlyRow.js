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
          /* 	This is a JavaScript code snippet where an onClick event is being added to an HTML element. The onClick event is being passed a callback function that takes an event object and a product object as its arguments. The callback function is named "handleEditClick" and will be executed when the element is clicked. The event object contains information about the event that occurred and the product object contains information about the product being edited. */
          onClick={(event) => handleEditClick(event, product)}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-danger fs-5"
          /* 	This is a JavaScript code snippet where an onClick event is being added to an HTML element. The onClick event is being passed a callback function that takes no arguments, because the product id is being passed directly as an argument to handleDeleteClick function. The callback function is named "handleDeleteClick" and will be executed when the element is clicked. The function "handleDeleteClick" will be passed the product.id as an argument and probably will delete the product with that id. */

          onClick={() => handleDeleteClick(product.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
