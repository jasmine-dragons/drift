import React from 'react';

const Generate = (props) => {
    return(
        <div>
            <img
            className="find-friends-background"
            src='/pages/6.png'
            onClick={props.updatePage}
            />
        </div>
    )
}

export default Generate;
