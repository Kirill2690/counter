import React from "react";
import './Counter.css'
import {Button} from "./Button";

type PropsTypeCounter={
    counter:number,
    maxValue:number,
    minValue:number,
    title:string,
    included:()=>void,
    reset:()=>void

}

export const Counter=(props:PropsTypeCounter)=>{

    return(
        <div className='counter'>
            <h3 className='title'>{props.title}</h3>
            <div className='display'><span className={props.counter===props.maxValue ? 'error_message':''}>{props.counter}</span>
            </div>
                <div className='button_container'>
        <Button name='Included' disabled={props.counter===props.maxValue} callback={()=>{props.included()}}/>
        <Button name='Reset' disabled={props.counter===props.minValue} callback={()=>{props.reset()}}/>
                </div>
        </div>


    )
}
