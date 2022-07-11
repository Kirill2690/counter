import React, {useEffect, useState} from "react";
import s from './Counter.module.css'
import {Settings} from "./Components/Settings";
import {Display} from "./Components/Display";
import {Button} from "./Components/Button";


export const Counter = () => {
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [count, setCount] = useState<number>(startValue)
    const [isSetting, setIsSetting] = useState<boolean>(false);

    useEffect(() => {
        const startValue = localStorage.getItem('startValue')
        const maxValue = localStorage.getItem('maxValue')
        if (startValue && maxValue) {
            setStartValue(JSON.parse(startValue))
            setMaxValue(JSON.parse(maxValue))
        }
    }, [])


    const onClickIncludedHandler = () => {
        setCount(count + 1)
    }
    const onClickResHandler = () => {
        localStorage.clear()
        setCount(0)
        setStartValue(0)
        setMaxValue(5)
    }


    return (
        <div className={s.wrapper}>
            <div className={s.counter}>
                <Settings setIsSetting={setIsSetting} startValue={startValue} maxValue={maxValue}
                          setMaxValue={setMaxValue} setStartValue={setStartValue} count={count} setCount={setCount}/>
            </div>
            <div className={s.counter}>
                <div className={s.display}>
                    <Display isSetting={isSetting} startValue={startValue} maxValue={maxValue} count={count}/>
                </div>
                <div className={s.buttonContainer}>
                    <Button title='INC ☑' callback={onClickIncludedHandler}
                            disabled={maxValue < 0 || startValue < 0 || startValue === maxValue || startValue > maxValue || maxValue === count}/>
                    <Button title='RES ✖' callback={onClickResHandler} disabled={false}/>
                </div>
            </div>
        </div>


    )
}
