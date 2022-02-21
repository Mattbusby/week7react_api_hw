import React from "react";
import GhibliContainer from "../containers/GhibliContainer";

const GhibliDetail = ({selectedGhibli}) => {
    return (
        <div>
            <h3>{selectedGhibli.title}</h3>
            <h4>{selectedGhibli.original_title}</h4>
            <p>Directed by: {selectedGhibli.director}</p>
            <p>{selectedGhibli.release_date}, {selectedGhibli.running_time} mins</p>
            <p>Rotten Tomatoes Score: {selectedGhibli.rt_score}%</p>
            <p>{selectedGhibli.description}</p>
        </div>
    )
}

export default GhibliDetail;