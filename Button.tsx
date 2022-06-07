import React from "react";
import './Counter.css'
 type PropsButtonType={
     name:string,
     callback:()=>void,
     disabled:boolean




 }


export const Button=(props:PropsButtonType)=>{
    const onClickHandler = () => {
        props.callback()
    }

    return(

        <button className='button' disabled={props.disabled} onClick={onClickHandler}>{props.name}</button>

    )
}