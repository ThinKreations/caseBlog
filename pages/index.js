import MainHead from '../components/MainHead'
import Footy from '../components/Footy'
import Header from '../components/Header'
import Image from 'next/image'
import styles from "../styles/Home.module.css"
import herramientas1 from '../src/automatizadas1.png'
import diagrama1 from '../src/diagrama_1.png'
import gantt1 from '../src/gantt_1.png'
import auto from '../src/auto.png'
export default function Home() {
  return (
    
      <>
      <MainHead titulo="Auto n Case Blog"/>
      <Header/>
      <div className={styles.container} id="inicio">
        <center>
        <div className={styles.content}>
          <font size="4" face="Quicksand">
          <p><b>En el vertiginoso mundo de la tecnología, la eficiencia y la precisión son pilares fundamentales para cualquier proyecto. En el ámbito del desarrollo de software, dos tipos de herramientas han transformado radicalmente la manera en que abordamos la creación y gestión de programas: las herramientas automatizadas y las herramientas CASE. 
            <br/><br/> En esta era de innovación constante, la automatización se ha convertido en una aliada indispensable, agilizando procesos, reduciendo errores y liberando tiempo valioso para la creatividad y el enfoque estratégico. Por otro lado, las herramientas CASE han revolucionado la forma en que diseñamos, desarrollamos y mantenemos software, proporcionando un arsenal de recursos que potencian la productividad y la calidad en cada etapa del ciclo de vida del desarrollo. 
            <br/><br/> En este blog, nos sumergiremos en el mundo de estas herramientas poderosas y versátiles. Exploraremos cómo impactan en la eficiencia de los procesos, cómo optimizan el flujo de trabajo y cómo pueden llevar tus proyectos de software a un nivel superior. 
            <br/><br/> Desarrollado por: Nápoles Munguía José de Jesús, Rosas Valdez Axel Brandon, Saldaña Flores Yael Gael y Torres Luna Guillermo Enrique.</b></p>
            <br/>
          </font>
        </div>
        </center>
        <center>
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
        <div className={styles.container_Y} id="herramientas-case">
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
            <br/><br/>
            <center><h1 className={styles.titulos} id="finalidad">Finalidad de las herramientas CASE</h1></center>
            <center>
              <div className={styles.container_2}>
              <div className={styles.container_3}>
              <font size="4" face="Quicksand">
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
                <p>Estas herramientas han demostrado mejorar la calidad y productividad de los desarrolladores, además de facilitar el mantenimiento del software durante el desarrollo y ciclo de vida de este.</p>
                <br/>
                <p>Estas se dividen en: <b>Upper, Lower e Integrated</b></p>

              </font>
              </div>
                <Image src={gantt1} className={styles.image_1}/>
              </div>
            </center>
        </div>
        <div className={styles.container_Y3}>
            <center><h1 className={styles.titulos} id="finalidad">Herramientas L-CASE (Lower CASE)</h1></center>
            <center>
              <div className={styles.container_2}>
                <div className={styles.container_3}>
                  <font size="4" face="Quicksand">
                    <p>Este tipo de herramientas CASE se dedican principalmente a: </p>
                    <br></br>
                    <ul>
                      <li>Semi-automatizar la generación de código.</li>
                      <li>Crear programas que detecten errores. </li>
                      <li>Depurar programas o pruebas. </li>
                      <li>Automatizar la documentación de la aplicación. </li>
                    </ul>
                    <br/><br/>
                    <p>Una herramienta considerada de Lower CASE es “Worksoft” ya que permite varias de las funciones anteriores, como prueba de los anterior, la herramienta ayuda a la automatización de los desarrollos “Agil-DevOps” para aplicaciones empresariales complejas mediante el procesamiento de datos se SAP (Sistemas, Aplicaciones y Productos).</p>
                    <br/><br/>
                    <p>{`La detección de errores que realiza es gracias a que tiene la capacidad de probar procesos comerciales complejos para entornos de aplicaciones combinadas al mismo tiempo que como se mencionó anteriormente, al tener procesamiento de SAP, las pruebas incluyen el probar dicho procesamiento. También soporta pruebas “Agile-plus-DevOps" y con ayuda del procesamiento SAP se vuelven más certeras.`}</p>
                    <br/><br/>
                    <p>Por parte de la semi-automatización de código, a pesar de generar una solución sin código debido a su enfoque orientado a la experiencia del negocio y del cliente y su objetivo de lograr la excelencia en los procesos empresariales, cuenta con el soporte web y en nube con optimizaciones preconfiguradas para poder utilizarlas a lo largo del código y llegar a un resultado más acertado a la solución propuesta, además estas configuraciones son de uso común por lo que son básicamente compatibles con cualquier tipo de código para cualquier tipo de aplicación.</p>
                    <br/><br/>
                    <p>Para depurar el programa es necesario mencionar que cuenta con reconocimiento de objetos para SAP Fiori y se mantiene continuamente actualizado por lo que aquellos datos requeridos para la parte de procesamiento de SAP son asignados automáticamente y se va ajustando de acuerdo a las necesidades de la aplicación y de las actualizaciones.</p>
                    <br/><br/>
                    <p>Automatiza la documentación de la aplicación ya que descubre y genera la documentación automáticamente y autónomamente debido a la información otorgada tanto por el usuario y el procesamiento SAP. Así como es capaz de generar la documentación básica, debido a su compatibilidad con los sistemas ALM (Aplication Lifecycle Managment) y las cadenas de herramientas “DevOps” puede generar la documentación necesaria para ambas como el ciclo de vida que tendrá el sistema.</p>
                  </font>
                </div>
                <center>
                <a href="https://www.worksoft.com/resources/watch-video-worksoft-connective-automation-platform-2021?wvideo=1sl6tqgbiq" className={styles.link_clear} target='_blank'><Image src={auto} width={300} height={300} className={styles.imageCircle}/><br/><center><p>Haz clic en la imagen para ver el video</p></center></a><br/>
                  </center>                
                {/* 
                <video autoPlay loop style={{ width: '500px', height: '500px' }}>
                  <source src="https://www.worksoft.com/resources/watch-video-worksoft-connective-automation-platform-2021?wvideo=1sl6tqgbiq" />
                </video>
                */}
              </div>
            </center>
        </div>
        <div className={styles.container_Y3}>
            <center><h1 className={styles.titulos} id="finalidad">Herramientas L-CASE (Lower CASE)</h1></center>
            <center>
              <div className={styles.container_2}>
                <div className={styles.container_3}>
                  <font size="4" face="Quicksand">
                    <p>Este tipo de herramientas CASE se dedican principalmente a: </p>
                    <br></br>
                    <ul>
                      <li>Semi-automatizar la generación de código.</li>
                      <li>Crear programas que detecten errores. </li>
                      <li>Depurar programas o pruebas. </li>
                      <li>Automatizar la documentación de la aplicación. </li>
                    </ul>
                    <br/><br/>
                    <p>Una herramienta considerada de Lower CASE es “Worksoft” ya que permite varias de las funciones anteriores, como prueba de los anterior, la herramienta ayuda a la automatización de los desarrollos “Agil-DevOps” para aplicaciones empresariales complejas mediante el procesamiento de datos se SAP (Sistemas, Aplicaciones y Productos).</p>
                    <br/><br/>
                    <p>{`La detección de errores que realiza es gracias a que tiene la capacidad de probar procesos comerciales complejos para entornos de aplicaciones combinadas al mismo tiempo que como se mencionó anteriormente, al tener procesamiento de SAP, las pruebas incluyen el probar dicho procesamiento. También soporta pruebas “Agile-plus-DevOps" y con ayuda del procesamiento SAP se vuelven más certeras.`}</p>
                    <br/><br/>
                    <p>Por parte de la semi-automatización de código, a pesar de generar una solución sin código debido a su enfoque orientado a la experiencia del negocio y del cliente y su objetivo de lograr la excelencia en los procesos empresariales, cuenta con el soporte web y en nube con optimizaciones preconfiguradas para poder utilizarlas a lo largo del código y llegar a un resultado más acertado a la solución propuesta, además estas configuraciones son de uso común por lo que son básicamente compatibles con cualquier tipo de código para cualquier tipo de aplicación.</p>
                    <br/><br/>
                    <p>Para depurar el programa es necesario mencionar que cuenta con reconocimiento de objetos para SAP Fiori y se mantiene continuamente actualizado por lo que aquellos datos requeridos para la parte de procesamiento de SAP son asignados automáticamente y se va ajustando de acuerdo a las necesidades de la aplicación y de las actualizaciones.</p>
                    <br/><br/>
                    <p>Automatiza la documentación de la aplicación ya que descubre y genera la documentación automáticamente y autónomamente debido a la información otorgada tanto por el usuario y el procesamiento SAP. Así como es capaz de generar la documentación básica, debido a su compatibilidad con los sistemas ALM (Aplication Lifecycle Managment) y las cadenas de herramientas “DevOps” puede generar la documentación necesaria para ambas como el ciclo de vida que tendrá el sistema.</p>
                  </font>
                </div>
                <center>
                <a href="https://www.worksoft.com/resources/watch-video-worksoft-connective-automation-platform-2021?wvideo=1sl6tqgbiq" className={styles.link_clear} target='_blank'><Image src={auto} width={300} height={300} className={styles.imageCircle}/><br/><center><p>Haz clic en la imagen para ver el video</p></center></a><br/>
                  </center>                
                {/* 
                <video autoPlay loop style={{ width: '500px', height: '500px' }}>
                  <source src="https://www.worksoft.com/resources/watch-video-worksoft-connective-automation-platform-2021?wvideo=1sl6tqgbiq" />
                </video>
                */}
              </div>
            </center>
        </div>
        <div className={styles.container_Y3}>
            <center><h1 className={styles.titulos} id="finalidad">Herramientas L-CASE (Lower CASE)</h1></center>
            <center>
              <div className={styles.container_2}>
                <div className={styles.container_3}>
                  <font size="4" face="Quicksand">
                    <p>Este tipo de herramientas CASE se dedican principalmente a: </p>
                    <br></br>
                    <ul>
                      <li>Semi-automatizar la generación de código.</li>
                      <li>Crear programas que detecten errores. </li>
                      <li>Depurar programas o pruebas. </li>
                      <li>Automatizar la documentación de la aplicación. </li>
                    </ul>
                    <br/><br/>
                    <p>Una herramienta considerada de Lower CASE es “Worksoft” ya que permite varias de las funciones anteriores, como prueba de los anterior, la herramienta ayuda a la automatización de los desarrollos “Agil-DevOps” para aplicaciones empresariales complejas mediante el procesamiento de datos se SAP (Sistemas, Aplicaciones y Productos).</p>
                    <br/><br/>
                    <p>{`La detección de errores que realiza es gracias a que tiene la capacidad de probar procesos comerciales complejos para entornos de aplicaciones combinadas al mismo tiempo que como se mencionó anteriormente, al tener procesamiento de SAP, las pruebas incluyen el probar dicho procesamiento. También soporta pruebas “Agile-plus-DevOps" y con ayuda del procesamiento SAP se vuelven más certeras.`}</p>
                    <br/><br/>
                    <p>Por parte de la semi-automatización de código, a pesar de generar una solución sin código debido a su enfoque orientado a la experiencia del negocio y del cliente y su objetivo de lograr la excelencia en los procesos empresariales, cuenta con el soporte web y en nube con optimizaciones preconfiguradas para poder utilizarlas a lo largo del código y llegar a un resultado más acertado a la solución propuesta, además estas configuraciones son de uso común por lo que son básicamente compatibles con cualquier tipo de código para cualquier tipo de aplicación.</p>
                    <br/><br/>
                    <p>Para depurar el programa es necesario mencionar que cuenta con reconocimiento de objetos para SAP Fiori y se mantiene continuamente actualizado por lo que aquellos datos requeridos para la parte de procesamiento de SAP son asignados automáticamente y se va ajustando de acuerdo a las necesidades de la aplicación y de las actualizaciones.</p>
                    <br/><br/>
                    <p>Automatiza la documentación de la aplicación ya que descubre y genera la documentación automáticamente y autónomamente debido a la información otorgada tanto por el usuario y el procesamiento SAP. Así como es capaz de generar la documentación básica, debido a su compatibilidad con los sistemas ALM (Aplication Lifecycle Managment) y las cadenas de herramientas “DevOps” puede generar la documentación necesaria para ambas como el ciclo de vida que tendrá el sistema.</p>
                  </font>
                </div>
                <center>
                <a href="https://www.worksoft.com/resources/watch-video-worksoft-connective-automation-platform-2021?wvideo=1sl6tqgbiq" className={styles.link_clear} target='_blank'><Image src={auto} width={300} height={300} className={styles.imageCircle}/><br/><center><p>Haz clic en la imagen para ver el video</p></center></a><br/>
                  </center>                
                {/* 
                <video autoPlay loop style={{ width: '500px', height: '500px' }}>
                  <source src="https://www.worksoft.com/resources/watch-video-worksoft-connective-automation-platform-2021?wvideo=1sl6tqgbiq" />
                </video>
                */}
              </div>
            </center>
        </div>
        <hr className={styles.division}/>
        </center>
      </div>
      <Footy/>
    </>
  )
}
