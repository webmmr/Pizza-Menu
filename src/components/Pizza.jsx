const Pizza = ({ image, name, ingredients, price, soldOut }) => {
  return (
    <li className="pizza">
      <img src={image} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{price}</span>
      </div>
    </li>
  );
};

export default Pizza;
