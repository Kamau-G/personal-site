import {useState} from 'react';
import { NavLink } from 'react-router-dom';
// onClick={(event)=>{setNav(0)}}
function DevCard({setNav}){
    return(
        <NavLink className='DevCard' to={`/dev`}>
            DevCard
        </NavLink>
    );
}
export default DevCard;