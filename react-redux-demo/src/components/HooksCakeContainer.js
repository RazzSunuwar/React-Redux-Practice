import React from 'react';
import { useSelector } from 'react-redux';

function HooksCakeContainer() {
    const numOfCake = useSelector(state => state.numOfCakes)
    return (
        <div>
            <h2>Num of cakes - {numOfCake}</h2> 
            <button>Buy cake</button>
        </div>
    );
};

export default HooksCakeContainer;
