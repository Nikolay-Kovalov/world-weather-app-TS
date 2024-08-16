import React, { FC, ReactElement, ReactNode } from "react";
import styles from "./Sidebar.module.css";

type Children = {
    children: ReactNode
}

const Sidebar : FC<Children> = ({children}) : ReactElement => {
return (
    <aside className={styles.sidebar}>{children}</aside>
)
}

export default Sidebar;