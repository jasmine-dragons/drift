import React from 'react';
import Map from './map.component'
import '../common.css';


const GamePage = (props) => {

    const handleNext = () => {

    }



    return(
        <div className="game-page">
            <div className="game-page-wrapper">
                <div className="challenge-text">Take a picture by Altgeld Hall</div>
                <div className="map"><Map/></div>
                <div className="challenge"></div>
                <div className="remaining">7 stages left</div>
                <div className="next-step" onClick={props.updatePage}>
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