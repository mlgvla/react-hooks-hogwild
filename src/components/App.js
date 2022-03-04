import React, { useState } from "react"
import Nav from "./Nav"
import HogList from "./HogList"

import hogs from "../porkers_data"

function App() {
  const [showGreased, setShowGreased] = useState(false)


  const hogsToDisplay = hogs.filter(hog => {
      if(!showGreased) return true
      return hog.greased === showGreased
  })
  return (
    <div className="App">
      <Nav showGreased={showGreased} onSetShowGreased={setShowGreased} />
      <div>
        <HogList hogs={hogsToDisplay} />
      </div>
    </div>
  )
}

export default App
