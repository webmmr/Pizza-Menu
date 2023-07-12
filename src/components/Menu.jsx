import Pizza from "../components/Pizza";
import pizzaData from "../data";

const Menu = () => {
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {pizzaData.length > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
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
        </>
      ) : (
        <p>We're still working on our menu. Please come back later </p>
      )}
    </main>
  );
};

export default Menu;
