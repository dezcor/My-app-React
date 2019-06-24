import {config} from 'dotenv';

config();

export const DB_CONFIG = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_DATABASEURL,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: "",
    messagingSenderId: process.env.REACT_APP_MSSID,
    appId: process.env.REACT_APP_APPID
};