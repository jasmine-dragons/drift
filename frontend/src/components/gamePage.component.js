import React, { useState } from 'react';
import Map from './map.component'
import '../common.css';
import { tasks } from './tasks.js';


const GamePage = (props) => {

    const [index, setIndex] = useState(0); 

    const handleNext = () => {
        if(index != tasks.length-1){
            setIndex(index + 1);
        }
        else{
            props.updatePage();
        }
    }



    return(
        <div className="game-page">
            <div className="game-page-wrapper">
                <div className="map"><Map index={index}/></div>
                <div className="challenge-wrapper">
                    <div className="challenge-text">{tasks[index].task}</div>  
                    <div className="remaining">{tasks.length-index} tasks left</div>
                </div>
                <div className="next-step" onClick={() => handleNext()}>
                    <div className="text">
                        <div>Reveal Next</div> 
                        <div>Stage</div>
                    </div>
                    <img src="/blobs/arrow.png" className="arrow"/>
                </div>
            </div> 
        </div>
    )
};

export default GamePage;