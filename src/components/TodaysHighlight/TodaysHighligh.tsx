import React, { FC, ReactElement } from "react";
import styles from "./TodaysHighlight.module.css";


interface TodaysHighLightProps {
    title: string
}

const TodaysHighLight : FC<TodaysHighLightProps> = ({title}) : ReactElement => {
    return (
        <li className={styles.item}>
            <h3 className={styles.title}>{title}</h3>
        </li>
    )
}

export default TodaysHighLight;