import React from "react";

const GhibliSelector = ({ghiblis, onGhibliSelected}) => {

    const handleChange = function(event) {
        const chosenGhibli = ghiblis[event.target.value];
        onGhibliSelected(chosenGhibli);
    }




    // NEED TO CHECK BELOW WITH API LAYOUT

    const ghibliOptions = ghiblis.map((ghibli, index) => {
        return <option value={index} key={index}>{ghibli.title}</option>
    })

    return (
        <select defaultValue="" onChange={handleChange}>
            <option value="">Choose a masterpiece</option>
            {ghibliOptions}
        </select>
    )
}

export default GhibliSelector;