import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "../slice/settingsSlice";
import profileReducer from "../slice/profileSlice";
import dashboardReducer from "../slice/dashboardSlice";

export default configureStore({
    reducer: {  
        settings: settingsReducer,
        profile: profileReducer,
        dashboard: dashboardReducer,
    },
});
