import React from "react";
import Image from "next/image";
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Footy(){
    return(
        <>
        <div className={styles.footer}>  
            <div className={styles.footerL}><p className={styles.nombres}>Secuencia: 1CV10 | Desarrollado por:</p><br/>
            <p className={styles.nombres}>• Nápoles Munguía José de Jesús</p>
            <p className={styles.nombres}>• Rosas Valdez Axel Brandon</p>
            <p className={styles.nombres}>• Saldaña Flores Yael</p>
            <p className={styles.nombres}>• Torres Luna Guillermo Enrique</p>
            <br/>
            <p className={styles.nombres}>Profesora: Valencia Elizalde Marilú</p>
            </div>
            <div className={styles.footerR}>
                <b>Instituto Politécnico Nacional</b><br/>
                <p>Unidad Profesional Interdisciplinaria de Ingeniería, Ciencias Sociales y Administrativas. (UPIICSA)</p>
                <br/>
                <Link href={'https://github.com/ThinKreations/caseBlog'} target="_blank" className={styles.link_clear}>Repositorio de GitHub</Link>
                <p>Desarrollado con Next.js</p>
                <b></b>
            </div>
        </div>
        </>
    )
}