import React, { FC, ReactElement, useState } from "react";
import styles from "./SearchInput.module.css";

const SearchInput : FC = () : ReactElement => {
    const[value, setValue] = useState("");
    const handleInputChange  = (evt: React.SyntheticEvent<HTMLInputElement>) : void => {
        const value = (evt.target as HTMLInputElement).value
        setValue(value)
    }
    return (
        <input placeholder="Search for place" onChange={handleInputChange} value={value} type="text" className={styles.input}/>
    )
}

export default SearchInput; 