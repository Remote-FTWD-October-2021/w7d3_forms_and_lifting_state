const Searchbar = (props) => {
  const { userFromApp, setUserFromApp } = props;

  const filterWords = (word) => {
    const filtered = userFromApp.products.filter((product) => {
      return product.name.toLowerCase().includes(word.toLowerCase());
    });
    setUserFromApp({ ...userFromApp, filteredProducts: filtered });
  };

  return (
    <div className="Searchbar">
      <input
        onChange={(event) => filterWords(event.target.value)}
        type="text"
        placeholder="Searchbar"
      ></input>
    </div>
  );
};

export default Searchbar;
