import React, { FC, ReactElement } from "react";
import styles from "./DaysList.module.css";
import Day from "../Day/Day";

const days = [
    // "Monday",
     "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

const DaysList : FC = () : ReactElement => {
    return (
        <ul className={styles.list}>
            {days.map((day: string, idx: number) : ReactElement => {
                return <Day key={idx} day={day}/>
            })}
        </ul>
    )
}

export default DaysList; 