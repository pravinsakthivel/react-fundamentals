import Pizza from "../Pizza/Pizza";
import { pizzaData } from "./mockData.js";
const Menu = () => {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzaData.map((data) => (
            <Pizza data={data} key={data.name} />
          ))}
        </ul>
      ) : (
        <p>we are still working on Menu , Come back later :)</p>
      )}
    </main>
  );
};
export default Menu;
