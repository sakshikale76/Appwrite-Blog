// import {createSlice} from '@reduxjs/toolkit';

// const initialState = {
//     status:false,
//     userData:null
// }
// const authSlice = createSlice({
//     //authSlice this is to track that user is authenticated or not
//     name:"auth",
//     initialState,
//     reducers:{  //object
      
//         login: (state, action) => {
//             state.status =true; //user is authenticated
//             state.userData = action.payload.userData;
//         },

//         logout: (state) => {
//             state.status =false;
//             state.userData = null;
//         }
//     }
// });

// export const {login,logout} = authSlice.actions; //logout and login
// // are actions in reducers
// export default authSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false,
    userData: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
     }
})

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;