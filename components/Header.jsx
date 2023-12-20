import React from "react";
import Image from "next/image";
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import logo from '../src/logo.png'
export default function Header(){
    return(
        <>
        <div className={styles.header}>  
                <center>
                <Image className={styles.image} src={logo} width={500} height={108} alt="Logo"/>
                </center>
        </div>
        </>
    )
}