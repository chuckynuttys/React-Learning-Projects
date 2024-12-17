import "./App.css";
import { Person } from "./components/Person";

function App() {
  return (
    <Person
      name="Kim"
      email="hwkim@gmail.com"
      age={23}
      isMarried={false}
      friends={["jimmy", "aaron", "cody", "edgar"]}
    />
  );
}

export default App;
