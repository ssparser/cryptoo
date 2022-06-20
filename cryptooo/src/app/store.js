import {configureStore} from '@reduxjs/toolkit';
import { Cryptoapi } from '../services/Cryptoapi';


export default configureStore({
    reducer:{
        [Cryptoapi.reducerPath]:Cryptoapi.reducer,
    },

});