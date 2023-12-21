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
                <Image className={styles.image} src={logo} width={250} height={52} alt="Logo"/>
            </center>
            <div>
                <button type="button" className={styles.btn}>Incio</button>
                <button type="button" className={styles.btn}>Herramientas automatizdas</button>
                <button type="button" className={styles.btn}>Herramientas CASE</button>
                <button type="button" className={styles.btn}>Finalidad CASE</button>
                <button type="button" className={styles.btn}>Upper CASE</button>
                <button type="button" className={styles.btn}>Lower CASE</button>
                <button type="button" className={styles.btn}>Integrated CASE</button>
            </div>
        </div>
        </>
    )
}