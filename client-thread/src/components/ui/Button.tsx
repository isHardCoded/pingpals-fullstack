import React from 'react'
import { PulseLoader } from "react-spinners";
import styles from './Button.module.scss'

interface ButtonProps {
    value: string
    type: "submit" | "reset" | "button"
    loading?: boolean
    isLoader: boolean
}

const Button: React.FC<ButtonProps> = ({ value, type, isLoader, loading }) => {
    return <button type={type} className={styles.button}> {isLoader && loading && <span><PulseLoader color={"#FFFFFF"} size={5} /></span>} <p>{value}</p></button>
}

export default Button;