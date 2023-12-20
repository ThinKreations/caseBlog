import React from "react";
import Image from "next/image";
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import logo from '../src/logo s_fondo.PNG'
export default function Header(){
    return(
        <>
        <div className={styles.header}>  
                <center>
                <Image src={logo} width={500} height={108}/>
                </center>
        </div>
        </>
    )
}