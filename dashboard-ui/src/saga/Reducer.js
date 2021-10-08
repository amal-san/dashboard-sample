import { combineReducers } from 'redux';
import { createClientReducer, getClientReducer, updateClientReducer } from '../redux/client/Client.reducer';

export default combineReducers({
    createClient:createClientReducer,
    getClient:getClientReducer,
    updateClient:updateClientReducer,

});