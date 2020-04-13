import { combineReducers } from 'redux';
import cakeReducer from './Cake/cakeReducer';
import iceCreamReducer from './iceCream/iceCreamReducer';
import userReducer from './User/userReducer';

const rootRoducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer
    
})

export default rootRoducer;