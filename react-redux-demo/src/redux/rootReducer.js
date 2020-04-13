import { combineReducers } from 'redux';
import cakeReducer from './Cake/cakeReducer';
import iceCreamReducer from './iceCream/iceCreamReducer';

const rootRoducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
    
})

export default rootRoducer;