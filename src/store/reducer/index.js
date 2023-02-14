import { combineReducers } from "redux";

import menuBar from "./menuBar";
import userManagement from "./userManagement";
import authUser from './auth';

const reducers = combineReducers({ menuBar, userManagement, authUser });

export default reducers;