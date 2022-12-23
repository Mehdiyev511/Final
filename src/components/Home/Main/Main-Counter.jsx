import React from "react";

//custom style
import { ComponentCounter } from "./style/Counter";

//Data
import CounterBox from "./data/CounterBox";
import DataCounter from "./data/MainDataCounter";

const Counter = (props) => {
  return (
    <ComponentCounter className="counter">
      <div className="counter__container">
        {DataCounter.map((counter) => (
          <CounterBox
            key={counter.description}
            img={counter.img}
            alt={counter.alt}
            counter={counter.counter}
            description={counter.description}
          />
        ))}
      </div>
    </ComponentCounter>
  );
};

export default Counter;
