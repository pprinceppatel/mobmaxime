import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/foodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/container";
import styles from "./components/Container.module.css";

function App() {
  let foodItem = [
    "Salad",
    "Roti",
    "Sabji",
    "Dal",
    "Green Veg",
    "Butter",
    "water",
  ];

  return (
    <Container>
      <h1 className={styles.heading}>Healthy Food</h1>
      <ErrorMessage items={foodItem} />
      <FoodItems items={foodItem} />
    </Container>
  );
}

export default App;
