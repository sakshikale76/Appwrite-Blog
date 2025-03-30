// import {configureStore} from '@reduxjs/toolkit';

// const store = configureStore({
//     reducer: {

//     }
// })

// export default store;

import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice';

const store = configureStore({
    reducer: {
        auth : authSlice,
        //TODO: add more slices here for posts
    }
});


export default store;