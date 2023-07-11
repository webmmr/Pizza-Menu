import Pizza from "../components/Pizza";
import pizzaData from "../data";

const Menu = () => {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza
            image={pizza.photoName}
            name={pizza.name}
            ingredients={pizza.ingredients}
            price={pizza.price}
            soldOut={pizza.soldOut}
            key={pizza.name}
          />
        ))}
      </ul>
    </main>
  );
};

export default Menu;
