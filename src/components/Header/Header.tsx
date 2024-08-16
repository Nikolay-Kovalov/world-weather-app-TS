import React, { FC, ReactElement } from "react";
import styles from "./Header.module.css"; 

const Header : FC = () : ReactElement => {
    return (
        <header className={styles.header}>
            <a href="/" className={styles.logo}>WHETHERSA</a>
        </header>
    )
}

export default Header;