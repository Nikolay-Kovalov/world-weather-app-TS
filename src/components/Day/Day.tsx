import React, { FC, ReactElement} from "react";
import styles from "./Day.module.css";

interface Props {
    day?: string
}

const Day : FC<Props> = () : ReactElement => {
    return (
        <li className={styles.day}></li>
    )
}

export default Day;