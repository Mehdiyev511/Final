import React from "react";

//components
import OurServices from "./Main-OurServices";
import Portfolio from "./Main-Portfolio";
import Counter from "./Main-Counter";
import TeamWork from "./Main-TeamWork";
import OurBlog from "./Main-OurBlog";
import Callto from "./Main-Callto";

const Main = (props) => {
  return (
    <main>
      <OurServices />
      <Portfolio />
      <Counter />
      <TeamWork />
      <OurBlog />
      <Callto />
    </main>
  );
};

export default Main;
