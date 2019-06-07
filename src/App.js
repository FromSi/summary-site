import React from "react";
import {Status} from "./components/component/module"

class App extends React.Component {
  render(){
            return (
              <div>
                <Status width={200} height={100} />
              </div>
            );
          }
}

export default App;