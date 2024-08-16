import React, { ReactElement, FC } from "react";
import styles from "./Title.module.css";

interface TitleProps {
    children: string
}

const Title : FC<TitleProps> = ({children}) : ReactElement => {
    return (
        <h2 className={styles.title}>{children}</h2>
    )
}

export default Title;