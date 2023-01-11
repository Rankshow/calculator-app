import React from 'react';
import './background.css'; 

const BackgroundMode = () => {

    const handleClick = () => {
       
        let bodyStyle = document.body.style;
          if (bodyStyle.backgroundColor === 'darkgrey'){
            bodyStyle.backgroundColor = 'white';
          } else {
            bodyStyle.backgroundColor = 'darkgrey';
          }
    }

    return(
        <button className='btn' onClick={handleClick}>
            toggle color
        </button>
    );
}

export default BackgroundMode;