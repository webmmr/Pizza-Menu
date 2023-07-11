import Pizza from "../components/Pizza";
import pizzaData from "../data";

const Menu = () => {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {pizzaData.map((pizza) => {
        console.log(pizza.name);
        // <p>{pizza.name}</p>;
        <Pizza pizzaObj={pizza} key={pizza.name} />;
      })}
    </main>
  );
};

export default Menu;
