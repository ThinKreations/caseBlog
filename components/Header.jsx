import React from "react";
import Image from "next/image";
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import logo from '../src/logo.png'
import { useRouter } from 'next/router';
export default function Header(){
    const router = useRouter();
    function onclic(){
        router.push('/');
    }

    return(
        <>
        <div className={styles.header}>
            <Image className={styles.image} src={logo} width={250} height={52} alt="Logo"/>
            <div className={styles.botonera}>
                <a href="#inicio"><button type="button" className={styles.btn}>Inicio</button></a>
                <a href="#herramientas-automatizadas"  ><button type="button" className={styles.btn}>Herramientas automatizdas</button></a>
                <a href="#herramientas-case"><button type="button" className={styles.btn}>Herramientas CASE</button></a>
                <a href="/links"><button type="button" className={styles.btn}>Enlaces</button></a>
            </div>
        </div>
        </>
    )
}