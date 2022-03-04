import React from "react"

const HogDetails = ({ hog }) => {
    const {greased, weight} = hog
    const highestMedal = hog["highest medal achieved"]
  return <div>
      <div>{greased && "Greased"}</div>
      <div>Weight: {weight} lbs.</div>
      <div>Medals: {highestMedal}</div>
  </div>
}

export default HogDetails
