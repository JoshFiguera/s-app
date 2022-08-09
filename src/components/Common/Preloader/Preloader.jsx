import React from 'react';
import preloader from '../../Common/Preloader/Plant.gif';

let Preloader = (props) => {
    return <div style = {{backgroundColor: 'white'}}>
        <img src={preloader} alt={'alt'}/>
    </div>
}

export default Preloader;