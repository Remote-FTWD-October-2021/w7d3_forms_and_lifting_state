import { useState } from "react";

import "./App.css";

//Components
import Product from "./components/Product/Product";
import Form from "./components/Form/Form";
import Searchbar from "./components/Searchbar/Searchbar";

function App() {
  const products = [
    {
      name: "Television 30 pulgadas",
      price: 400,
      currency: "EUR",
      state: "new",
    },
    {
      name: "Vaso de cristal del Ikea",
      price: 2,
      currency: "EUR",
      state: "used",
    },
    {
      name: "Lampara de diseño",
      price: 200,
      currency: "EUR",
      state: "almost-new",
    },
    {
      name: "Maleta tamaño cabina",
      price: 70,
      currency: "USD",
      state: "new",
    },
  ];

  const [user, setUser] = useState({
    username: "jaimejacobo",
    age: 27,
    admin: false,
    products,
    filteredProducts: [...products],
  });

  const deleteProductAndUpdate = (productName) => {
    const filtered = user.products.filter((product) => {
      return productName !== product.name;
    });

    // const copyOfUser = {...user}
    // copyOfUser.products = filtered
    // setUser(copyOfUser);

    setUser({ ...user, products: filtered, filteredProducts: filtered });
  };

  return (
    <div className="App">
      <h1>App Component</h1>
      <Form userFromApp={user} setUserFromApp={setUser} />
      <Searchbar userFromApp={user} setUserFromApp={setUser} />
      <div className="flex-around">
        {user.filteredProducts.map((product, index) => {
          return (
            <Product
              key={index + Date.now()}
              product={product}
              deleteProductAndUpdate={deleteProductAndUpdate}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
