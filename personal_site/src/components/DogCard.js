import {useState} from 'react';
import { NavLink } from 'react-router-dom';

function DogCard({setNav}){
    return(
        <NavLink className='DogCard' to={`/dog`}>
            DogCard
        </NavLink>
    );
}
export default DogCard;