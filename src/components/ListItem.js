import React from "react";

const ListItem = ({ghibli, onGhibliClick}) => {

    const handleClick = function(){
        onGhibliClick(ghibli);
    }

    return <li onClick={handleClick}>{ghibli.title}</li>
}

export default ListItem;