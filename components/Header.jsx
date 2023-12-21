import React from "react";
import Image from "next/image";
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import logo from '../src/logo.png'
import { useRouter } from 'next/router';
export default function Header(){
    const router = useRouter();


    return(
        <>
        <div className={styles.header}>  
            <center>
                <Image className={styles.image} src={logo} width={250} height={52} alt="Logo"/>
            </center>
            <div>
                <a href="#inicio"><button type="button" className={styles.btn}>Inicio</button></a>
                <a href="#herramientas-automatizadas"  ><button type="button" className={styles.btn}>Herramientas automatizdas</button></a>
                <a href="#herramientas-case"><button type="button" className={styles.btn}>Herramientas CASE</button></a>
                <a href="https://example.com/"><button type="button" className={styles.btn}>Enlaces de interez</button></a>
            </div>
        </div>
        </>
    )
}