import React, { useState } from "react"
import HogDetails from "./HogDetails"

const HogCard = ({ hog }) => {
  const { name, specialty, image } = hog

  const [seeDetails, setSeeDetails] = useState(false);

  function handleCardClick() {
      setSeeDetails(seeDetails => !seeDetails)
  }
  return (
    <div className="ui card three wide link column" onClick={handleCardClick}>
      <div className="image">
        <img src={image} alt={name} />
      </div>
      <div className="content">
        <div className="header">{name}</div>
        <div className="description">
          <div>Specialty: {specialty}</div>
          <div>{ seeDetails && <HogDetails hog={hog} />}</div>
        </div>
      </div>
      <div className="extra content"></div>
    </div>
  )
}

export default HogCard
