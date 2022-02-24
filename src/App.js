import React, { useState } from "react";
import "./App.css";
import MealVoter from "./MealVoter";
import WhatToEat from "./WhatToEat";
import TipCalc from "./TipCalc";
import Header from "./Header";
import FoodPics from "./Images/339-3397382_sushi-sashimi-pixel-art-pixelart-food-asian-cute.png";
import FoodPics2 from "./Images/181-1816644_transparent-pizza-slice-png-small-easy-pixel-art.png";
import FoodPics3 from "./Images/528-5281174_donut-pixel-art-grid-hd-png-download.png";

function App() {
  return (
    <div>
      <div className="page-styling">
        <Header />
        <div className="page-styling-two">
          <div className="input-styling-one">
            <WhatToEat />
            <img
              className="background-color-test"
              src={FoodPics2}
              alt={"pixelated picture of food"}
            />
            <MealVoter meal="meal" />
          </div>
          <div className="input-styling-one">
            <WhatToEat />
            <img
              className="background-color-test"
              src={FoodPics}
              alt={"pixelated picture of food"}
            />
            <MealVoter meal="meal" />
          </div>
          <div className="input-styling-one">
            <WhatToEat />
            <img
              className="background-color-test"
              src={FoodPics3}
              alt={"pixelated picture of food"}
            />
            <MealVoter meal="meal" />
          </div>
        </div>

        <div className="calc-general">
          <TipCalc />
        </div>
      </div>
    </div>
  );
}

export default App;
