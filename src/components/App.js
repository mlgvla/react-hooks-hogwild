import React from "react"
import Nav from "./Nav"
import HogList from "./HogList"

import hogs from "../porkers_data"

function App() {
  const hogsToDisplay = [...hogs] // temporary
  return (
    <div className="App">
      <Nav />
      <div className="ui grid container">
        <div className="ui sixteen wide centered">
          <HogList hogs={hogsToDisplay} />
        </div>
      </div>
    </div>
  )
}

export default App
