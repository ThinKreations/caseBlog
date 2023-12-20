import MainHead from '../components/MainHead'
import Footy from '../components/Footy'
import Header from '../components/Header'
import Image from 'next/image'
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <>
    <MainHead titulo="Hola"/>
    <Header/>
    <div className={styles.container}>
      <div className={styles.content}>
        <font size="4">
        <p><b>En el vertiginoso mundo de la tecnología, la eficiencia y la precisión son pilares fundamentales para cualquier proyecto. En el ámbito del desarrollo de software, dos tipos de herramientas han transformado radicalmente la manera en que abordamos la creación y gestión de programas: las herramientas automatizadas y las herramientas CASE. <br/><br/> En esta era de innovación constante, la automatización se ha convertido en una aliada indispensable, agilizando procesos, reduciendo errores y liberando tiempo valioso para la creatividad y el enfoque estratégico. Por otro lado, las herramientas CASE han revolucionado la forma en que diseñamos, desarrollamos y mantenemos software, proporcionando un arsenal de recursos que potencian la productividad y la calidad en cada etapa del ciclo de vida del desarrollo. <br/><br/> En este blog, nos sumergiremos en el mundo de estas herramientas poderosas y versátiles. Exploraremos cómo impactan en la eficiencia de los procesos, cómo optimizan el flujo de trabajo y cómo pueden llevar tus proyectos de software a un nivel superior. ¡Acompáñanos en este viaje hacia la optimización y la excelencia en el desarrollo tecnológico!</b></p>
        </font>
      </div>
    </div>
    <Footy/>
    </>
  )
}
