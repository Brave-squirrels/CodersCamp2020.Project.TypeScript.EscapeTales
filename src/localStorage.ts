import { state } from './data';

export const updateLocalStorage = () : void =>{
    localStorage.setItem("state", JSON.stringify(state));
} 