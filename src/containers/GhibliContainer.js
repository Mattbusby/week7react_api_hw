import React, { useEffect, useState } from 'react';
// import GhibliList from '../components/GhibliList';
import GhibliDetail from '../components/GhibliDetail';
import GhibliSelector from '../components/GhibliSelect';
import './GhibliContainer.css';

const GhibliContainer = () => {
    const [ghiblis, setGhiblis] = useState([]);
    const [selectedGhibli, setSelectedGhibli] = useState(null);

    useEffect(() => {
        getGhiblis();
    }, [])

    const getGhiblis = function(){
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(res => res.json())
        .then(ghiblis => setGhiblis(ghiblis))
    }

    const onGhibliSelected = function(ghibli){
        setSelectedGhibli(ghibli);
    }

    return (
        <>
        <div className="main-container">
            <h1>Ghibli Masterpieces</h1>
        </div>
        <div className="dropdown">
            <GhibliSelector ghiblis={ghiblis} onGhibliSelected={onGhibliSelected}/>
            {selectedGhibli ? <GhibliDetail selectedGhibli={selectedGhibli}/> : null}
        </div>
        </>
    )
}
 
export default GhibliContainer;