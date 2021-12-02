import { useState } from "react";

import "../Form/Form.css";

const Form = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputPrice, setInputPrice] = useState(0);
  const [inputCurrency, setInputCurrency] = useState("EUR");
  const [inputState, setInputSate] = useState("new");

  const addNewProduct = () => {
    const userCopy = { ...props.userFromApp };

    userCopy.products.push({
      name: inputName,
      price: inputPrice,
      currency: inputCurrency,
      state: inputState,
    });

    userCopy.filteredProducts = [...userCopy.products]

    props.setUserFromApp(userCopy);
  };

  return (
    <div>
      <h2>Create new product</h2>

      <p>Name: </p>
      <input
        type="text"
        onChange={(event) => setInputName(event.target.value)}
      ></input>

      <p>Price: </p>
      <input
        type="number"
        onChange={(event) => setInputPrice(event.target.value)}
      ></input>

      <p>Currency: </p>
      <select
        name="currency"
        onChange={(event) => setInputCurrency(event.target.value)}
      >
        <option value="EUR">Euro</option>
        <option value="USD">US Dollar</option>
      </select>

      <p>State: </p>
      <select
        name="state"
        onChange={(event) => setInputSate(event.target.value)}
      >
        <option value="new">New</option>
        <option value="almost-new">Almost new</option>
        <option value="used">Used</option>
      </select>

      <button onClick={() => addNewProduct()}>Create product</button>
    </div>
  );
};

export default Form;
