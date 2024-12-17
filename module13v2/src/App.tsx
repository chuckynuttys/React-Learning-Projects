import React from "react";
import "./App.css";
import { Person, Country } from "./components/Person.tsx";

function App() {
  const getAge = (name: string): number => {
    return 22;
  };

  return (
    <div className="App">
      <Person
        name="Charles"
        email="c_strain@icloud.com"
        age={22}
        isMarried={false}
        friends={["kim", "aki", "zane"]}
        country={Country.Canada}
      />
    </div>
  );
}

export default App;
