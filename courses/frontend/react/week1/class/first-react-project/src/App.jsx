import { useState } from "react";

import Greeting from "./components/greeting";
import Card from "./components/card";
import Cards from "./components/cards";
import Person from "./components/person";
import Button from "./components/button";
import DangerButton from "./components/dangerButton";
import TextInput from "./components/textInput"
import ProfileImage from "./components/profileImage"
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section id="center">
        <Greeting />
        <Card />
       
       
          <Cards />
          <Person />
          <Button />
          <DangerButton />
          <TextInput/>
          <ProfileImage/>
         
       
      </section>

     

  

      
    </>
  );
}

export default App;
