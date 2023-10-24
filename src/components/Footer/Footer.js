const Footer = () => {
  const hours = new Date().getHours();
  const openHour = 12;
  const colseHour = 22;
  const isOpen = hours >= openHour && hours <= colseHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>
            we are open until {colseHour}:00. Come Visit us or oder online !
          </p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>
          we are happy to welcome you between {openHour}:00 and {colseHour}:00
        </p>
      )}
    </footer>
  );
};
export default Footer;
