import {useState} from 'react';

function DevViewCard3({setNav}){
    const toggleText = () => {
        document.getElementById('textDVC3').hidden = 
        (document.getElementById('textDVC3').hidden) ? false:true;
    }
    return(
        <div className='DevViewCard3 slide-in-left' onClick={function(){}}>
            Card 3
        </div>
    );
}
export default DevViewCard3;