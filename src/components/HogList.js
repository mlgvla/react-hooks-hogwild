import React from 'react';
import HogCard from './HogCard';

const HogList = ({hogs}) => {

    const hogCards = hogs.map(hog => <HogCard key={hog.name} hog={hog} />)

    return (
        <div className="ui grid container cards" style={{textAlign:"left"}}>
            {hogCards}
        </div>
    );
}

export default HogList;
