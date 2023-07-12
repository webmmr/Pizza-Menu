const Footer = ({ openHour, closeHour }) => {
  const curTime = new Date().getHours();

  return (
    <footer className="footer">
      {curTime >= openHour && curTime <= closeHour ? (
        <div className="order">
          <p>
            We are open from {openHour}.00 to {closeHour}.00. Come visit us or
            Order online.
          </p>
          <button className="btn">Order now</button>
        </div>
      ) : (
        <p>
          We're closed Now! We're happy to serve you between {openHour} &&{" "}
          {closeHour}
        </p>
      )}
    </footer>
  );
};

export default Footer;
