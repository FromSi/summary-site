import React from "react";
import {PersonalInfo, History} from "./components/fragment/module";
import {CardRepository} from "./components/card/module";

class App extends React.Component {
  render() {
    return (
      <div>
        <PersonalInfo />
        {/* <CardRepository organization="" title="openbox-theme-starwars" name="Java" date="22/12/1998" description="Запарился каждый раз смотреть доку, чтобы сделать одно и тоже по 100 раз."/> */}
        <History/>
      </div>
    );
  }
}

export default App;
