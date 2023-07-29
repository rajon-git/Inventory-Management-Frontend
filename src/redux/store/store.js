import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "../slice/settingsSlice";
import profileReducer from "../slice/profileSlice";

export default configureStore({
    reducer: {  
        settings: settingsReducer,
        profile: profileReducer,
    },
});
