import React, { FC, ReactElement } from "react";
import styles from "./TodaysHighlights.module.css";
import TodaysHighLight from "../TodaysHighlight/TodaysHighligh";

const highlightsTitle = ["UV Index", "Wind Status", "Sunrise & Sunset", "Humidity", "Visibility", "Air Quality"]

const TodaysHighlightsList : FC = () : ReactElement => {
    return (
        <ul className={styles.list}>{
            highlightsTitle.map((item: string, idx: number) : ReactElement => {
                return <TodaysHighLight key={idx} title={item}/>
            })
        }</ul>
    )
}

export default TodaysHighlightsList;