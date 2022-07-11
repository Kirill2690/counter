import React, {ChangeEvent} from "react";
import '../Counter.module.css'
import s from './Button.module.css'

 type ButtonType={
     title:string
     callback:()=>void
     disabled?:boolean

 }


export const Button=(props:ButtonType)=>{
    return(
        <button onClick={props.callback} className={s.button} disabled={props.disabled}>{props.title}</button>
    )



}