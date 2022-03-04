import React from "react"
import piggy from "../assets/porco.png"

const Nav = ({ showGreased, onSetShowGreased }) => {

    function handleClick() {
        onSetShowGreased(showGreased => !showGreased)
    }
  return (
    <div className="navWrapper">
      <span className="headerText">HogWild</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
      <div>
        <button className="ui basic button"  onClick={handleClick}>
          {showGreased ? "Show All" : "Show Greased"}
        </button>
      </div>
    </div>
  )
}

export default Nav
