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
                <Link href="/#inicio"><button type="button" className={styles.btn}>Inicio</button></Link>
                <Link href="/#herramientas-automatizadas"  ><button type="button" className={styles.btn}>Herramientas automatizdas</button></Link>
                <Link href="/#herramientas-case"><button type="button" className={styles.btn}>Herramientas CASE</button></Link>
                <Link href="/links"><button type="button" className={styles.btn}>Enlaces</button></Link>
            </div>
        </div>
        </>
    )
}