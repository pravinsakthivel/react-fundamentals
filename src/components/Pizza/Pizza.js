const Pizza = ({ data }) => {
  // if (data.soldOut) {
  //   return null;
  // }
  return (
    <div className={`pizza ${data.soldOut ? "sold-out" : ""} `}>
      <img src={data.photoName} alt={data.name}></img>
      <div>
        <h3>{data.name}</h3>
        <p>{data.ingredients}</p>
        <span>{data.soldOut ? "SOLD OUT" : data.price}</span>
      </div>
    </div>
  );
};

export default Pizza;
