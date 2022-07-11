import {Button} from "./Button";
import {ChangeEvent, useEffect} from "react";
import s from './Settings.module.css'

type SettingsPropsType = {
    count: number;
    startValue: number
    setCount:(startValue:number)=>void;
    maxValue: number;
    setStartValue: (startValue: number) => void;
    setMaxValue: (maxValue: number) => void;
    setIsSetting: (isSetting: boolean) => void
};

export const Settings = (props: SettingsPropsType) => {
    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(+e.currentTarget.valueAsNumber);
        props.setIsSetting(true);
    };

    const onChangeMinHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setStartValue(+e.currentTarget.valueAsNumber);
        props.setIsSetting(true);
    };

    const onclickSetHandler = () => {
        props.setCount(props.startValue)
        props.setIsSetting(false);
        localStorage.setItem("startValue", JSON.stringify(props.startValue));
        localStorage.setItem("maxValue", JSON.stringify(props.maxValue))
    };


    return (
        <div>
            <div className={s.settings}>
                <div className={s.inputBlock}>
                    <span>maxValue: </span>
                    <input
                        className={
                            props.startValue >= props.maxValue ||
                            props.maxValue < 0
                                ? s.errorInput
                                : s.default
                        }
                        type="number"
                        onChange={onChangeMaxHandler}
                        value={props.maxValue}
                    />
                </div>
                <div className={s.inputBlock}>
                    <span>startValue: </span>
                    <input
                        value={props.startValue}
                        type="number"
                        onChange={onChangeMinHandler}
                        className={
                            props.startValue >= props.maxValue ||
                            props.startValue < 0 || props.maxValue < 0
                                ? s.errorInput
                                : s.default
                        }
                    />
                </div>
            </div>
            <div className={s.buttonContainer}>
                <div>
                    <Button
                        title={"SET ✔"}
                        callback={onclickSetHandler}
                        disabled={
                            props.startValue === props.maxValue ||
                            props.maxValue < 0 ||
                            props.startValue < 0 ||
                            props.startValue > props.maxValue
                        }
                    />
                </div>
            </div>
        </div>
    );
};

