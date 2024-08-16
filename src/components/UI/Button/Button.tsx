import React, { FC, ReactElement } from "react";
import styles from "./Button.module.css";

const Button : FC = () : ReactElement => {
    return (
        <button className={styles.btn}></button>
    )
}

export default Button;