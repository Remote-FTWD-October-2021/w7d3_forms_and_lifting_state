import { useState } from "react";

import "./App.css";

//Components
import Product from "./components/Product/Product";
import Form from "./components/Form/Form";

function App() {
  const [user, setUser] = useState({
    username: "jaimejacobo",
    age: 27,
    admin: false,
    products: [
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
    ],
  });

  const deleteProductAndUpdate = (productName) => {
    const filteredProducts = user.products.filter((product) => {
      return productName !== product.name;
    });

    // const copyOfUser = {...user}
    // copyOfUser.products = filteredProducts
    // setUser(copyOfUser);

    setUser({ ...user, products: filteredProducts });
  };

  return (
    <div className="App">
      <h1>App Component</h1>
      <Form userFromApp={user} setUserFromApp={setUser} />
      <div className="flex-around">
        {user.products.map((product, index) => {
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
