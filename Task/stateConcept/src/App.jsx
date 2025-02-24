import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/foodItems";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  let foodItem = ["Salad", "Roti", "Sabji", "Dal", "Green Veg", "Butter"];

  return (
    <>
      <h1>Healthy Food</h1>
      <ErrorMessage items={foodItem} />
      <FoodItems items={foodItem} />
    </>
  );
}

export default App;
