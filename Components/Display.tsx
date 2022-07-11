import React, {useEffect, useState} from "react";

import s from './Display.module.css'
import {text} from "stream/consumers";

type DisplayType = {
    count: number;
    startValue: number
    maxValue: number
    isSetting: boolean

};
export const Display = (props: DisplayType) => {

    return (
        <>
            {props.isSetting
                ?
                <div
                    className={props.startValue >= props.maxValue || props.maxValue <= 0 || props.startValue < 0 || props.maxValue === props.count
                        ? `${s.redText}`
                        : `${s.setText}`}>
                    {props.startValue >= props.maxValue || props.maxValue <= 0 || props.startValue < 0 || props.maxValue === props.count
                        ? `Incorrect!`
                        : `Enter values and press "SET✔"`}
                </div>
                : <div className={props.maxValue===props.count?s.errorCount:s.count}>{props.count}</div>}

        </>

    )
}






