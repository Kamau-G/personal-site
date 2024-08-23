import {useState} from 'react';

function DevViewCard3({setNav}){
    const toggleText = () => {
        document.getElementById('textDVC3').hidden = 
        (document.getElementById('textDVC3').hidden) ? false:true;
    }
    return(
        <div className='DevViewCard3 slide-in-left' onClick={function(){}}>
            <text>
            <h1>About the Developer:</h1>
            Greetings,<br/>
            My name is Kamau G. or Mr. G to my commrads<br/>
            I am a software engineer with ~1 yr of professional softare engineering experience and 2 yrs of working as a webpack developer for a small local company.<br/><br/>
            How I assist companies:<br/>
            I pride myself on keeping a good head at the workplace, I attempt to make every interaction enjoyable, and effective.
            I pride my self on finding solutions that are tailored to the needs of the overall projects with an emphasis on compartmentalization and decentralization of components.<br/>
            <br/>
            Think your company would be a good match? Take the quiz to find out if your company is something I am looking for:
            </text>
        </div>
    );
}
export default DevViewCard3;
