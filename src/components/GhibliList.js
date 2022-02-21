import React from "react";
import ListItem from './ListItem';

const GhibliList = ({ghiblis, onGhibliClick}) => {

    const ghiblisItems = ghiblis.map((ghibli, index) => {
        return <ListItem ghibli={ghibli} key={index} onGhibliClick={onGhibliClick}/>
    })

    return (
        <div>
            <ul>
                {ghiblisItems}
            </ul>
        </div>
    )
}

export default GhibliList