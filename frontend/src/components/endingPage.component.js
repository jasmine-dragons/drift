import React from 'react';

const EndingPage = (props) => {
    return(
        <div>
            <img 
            className="find-friends-background" 
            src='/pages/4.png' 
            onClick={props.updatePage}
            />
        </div>
    )
}

export default EndingPage;