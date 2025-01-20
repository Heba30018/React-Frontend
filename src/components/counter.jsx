import React,{useState, createContext} from "react";
export const CounterContext = createContext();
export default function CounterContextProvider(props){
    const {counter, setCounter}= useState(0)
    
    return(
        <CounterContext.Provider value={{counter, setCounter}}>
            {props.childern}


        </CounterContext.Provider>
    )

}