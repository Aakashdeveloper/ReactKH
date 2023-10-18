import {createStore} from 'redux';
import reducer from '../reducer';

// we are connecting store to reducer
let store = createStore(reducer);

export default store
