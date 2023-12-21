import MainHead from '../components/MainHead'
import Footy from '../components/Footy'
import Header from '../components/Header'
import Header1 from '../components/Header2'
import Image from 'next/image'
import styles from "../styles/Home.module.css"
import herramientas1 from '../src/automatizadas1.png'
import diagrama1 from '../src/diagrama_1.png'
import gantt1 from '../src/gantt_1.png'
export default function Home() {
  return (
      <>
      <MainHead titulo="Auto n Case Blog"/>
      <Header/>
      <div className={styles.container} id="inicio">
        <center>
        <div className={styles.content}>
          <font size="4" face="Quicksand">
          <p><b>En el vertiginoso mundo de la tecnología, la eficiencia y la precisión son pilares fundamentales para cualquier proyecto. En el ámbito del desarrollo de software, dos tipos de herramientas han transformado radicalmente la manera en que abordamos la creación y gestión de programas: las herramientas automatizadas y las herramientas CASE. <br/><br/> En esta era de innovación constante, la automatización se ha convertido en una aliada indispensable, agilizando procesos, reduciendo errores y liberando tiempo valioso para la creatividad y el enfoque estratégico. Por otro lado, las herramientas CASE han revolucionado la forma en que diseñamos, desarrollamos y mantenemos software, proporcionando un arsenal de recursos que potencian la productividad y la calidad en cada etapa del ciclo de vida del desarrollo. <br/><br/> En este blog, nos sumergiremos en el mundo de estas herramientas poderosas y versátiles. Exploraremos cómo impactan en la eficiencia de los procesos, cómo optimizan el flujo de trabajo y cómo pueden llevar tus proyectos de software a un nivel superior.</b></p>
          </font>
        </div>
        </center>
        <div className={styles.container_1} id="herramientas-automatizadas">
            <center><h1 className={styles.titulos}>Herramientas Automátizadas</h1></center>
            <center>
              <div className={styles.container_2}>
              <div className={styles.container_3}>
              <font size="4" face="Quicksand" color="white">
                <p>Una herramienta automatizada es una pieza de software que ayuda a los equipos y organizaciones a automatizar ciertas tareas que se deban realizar durante el desarrollo de un proyecto o en el dia a dia. Esto les permite reducir la necesidad de intervención humana y lograr mayor confiabilidad y velocidad en las tareas que automatizan estas herramientas. Estas herramientas mayormente son empleadas para llevar a cabo las pruebas de software y hardware (en caso de ser nesesario), durante el desarrollo de un proyecto.</p>
              </font>
              </div>
                <Image src={herramientas1} className={styles.image_1}/>
              </div>
            </center>
        </div>
        <div className={styles.container_1} id="herramientas-case">
            <center><h1 className={styles.titulos} id="case">Herramientas CASE</h1></center>
            <center>
              <div className={styles.container_2}>
              <div className={styles.container_3}>
              <font size="4" face="Quicksand" color="white">
                <p>Las herramientas CASE o Computer Aided Software Engineering (Ingenieria de software Asistida por Computadora). Son un tipo de herramientas automatizadas enfocadas hacia entornos de desarrollo de software, por lo que proveen distintas caracteristicas para ayudar a un equipo de desarrolladores de software durante todo el proceso de desarrollo de este. </p>
              </font>
              </div>
                <Image src={diagrama1} className={styles.image_1}/>
                
              </div>
              
            </center>
        </div>
        <div className={styles.container_1}>
            <center><h1 className={styles.titulos} id="finalidad">Finalidad de las herramientas CASE</h1></center>
            <center>
              <div className={styles.container_2}>
              <div className={styles.container_3}>
              <font size="4" face="Quicksand" color="white">
                <p>La finalidad de estas herramientas es que sean empleadas en el desarrollo de software. Ayudando a reducir el coste en el desarrollo del software, asimismo aumentar la calidad final del software o del sistema en desarrollo. </p>
                <p>Este tipo de herramientas estan diseñadas para facilitar la gestión de proyectos de desarrollo de software automatizando tareas de desarrollo. Intentando garantizar una alta calidad en el software detectando errores para que estos sean corregidos. Aparte de que ofrece un lugar centralizado para gestionar el desarrollo de software, lo que tambien ayuda a incrementar la productividad de los desarrolladores.</p>
                <br></br>
                <ul>
                  <li>Proporciona una mejor documentación.</li>
                  <li>Mejora la precisión.</li>
                  <li>Reduce el mantenimiento del software (el correctivo sobre todo).</li>
                  <li>Mejora el proceso de trabajo de los desarrolladores.</li>
                  <li>Reduce la monotonía en el trabajo del ingeniero de software.</li>
                  <li>Aumenta la velocidad de desarrollo.</li>
                  <li>Hace mas facil del desarrollo del software.</li>
                </ul>
                <br/><br/>
                <p>Estas herramientas han demostrado mejorar la calidad y productividad de los desarrolladores, además de facilitar el mantenimiento del software. Durante el desarrollo y ciclo de vida de este.</p>
              </font>
              </div>
                <Image src={gantt1} className={styles.image_1}/>
              </div>
              
            </center>
        </div>
      </div>
      <Footy/>
    </>
  )
}
