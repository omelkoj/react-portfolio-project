import { useState } from "react";
import "./App.css";
import MealVoter from "./MealVoter2";
import PlacesToGo from "./PlacesToGo";
import TipCalc from "./TipCalc";

function App() {
  return (
    <div className="container">
      <div className="mealvoterforms">
        <PlacesToGo />
        <PlacesToGo />
        <PlacesToGo />
      </div>
      <div>
        <MealVoter name="julia" />
      </div>

      <div>
        <TipCalc />
      </div>
    </div>
  );
}

export default App;
