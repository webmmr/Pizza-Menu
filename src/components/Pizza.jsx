const Pizza = (props) => {
  console.log(props);
  return (
    <div className="pizza">
      <img src={props.pizzaObj.image} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price}</span>
        <p>{props.pizzaObj.soldOut}</p>
      </div>
    </div>
  );
};

export default Pizza;
