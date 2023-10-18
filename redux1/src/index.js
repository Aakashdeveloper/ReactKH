import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/storeFile';
import Home from './container/Home';

//view is connected to the store
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render( <Provider store={store}>
           <Home/>
        </Provider>)

// ReactDOM.render(

//     <Provider store={store}>
//         <Home/>
//     </Provider>,document.getElementById('root')
// )
