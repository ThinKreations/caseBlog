import MainHead from '../components/MainHead'
import Footy from '../components/Footy'
import Header from '../components/Header'
import Image from 'next/image'
import styles from "/styles/Home.module.css"

export default function links(){
    return(
        <>
            <MainHead titulo="Auto n Case | Links"/>
            <Header/>
            <div className={styles.container}>
            <center><h1 style={{color: 'black'}}> Enlaces de interés/Referencias</h1></center>

            <center>
            <div className={styles.content}>
            <ul>
                <li>
                    <a href='https://www.testim.io/blog/what-is-a-test-automation-tool/' target='_blank' className={styles.link}><b>https://www.testim.io/blog/what-is-a-test-automation-tool/</b></a>
                </li>
                <li>
                    <a href='https://www.umsl.edu/~sauterv/analysis/F08papers ' target='_blank' className={styles.link}><b>https://www.umsl.edu/~sauterv/analysis/F08papers</b> </a>
                </li>
                <li>
                    <a href='https://www.geeksforgeeks.org/computer-aided-software-engineering-case/ ' target='_blank' className={styles.link}><b>https://www.geeksforgeeks.org/computer-aided-software-engineering-case/</b> </a>
                </li>
                <li>
                    <a href='https://gbitcorp.com/blog/posts/top-10-herramientas-para-pruebas-automatizadas/ ' target='_blank' className={styles.link}><b>https://gbitcorp.com/blog/posts/top-10-herramientas-para-pruebas-automatizadas/</b> </a>
                </li>
                <li>
                    <a href='https://www.worksoft.com/ ' target='_blank' className={styles.link}><b>https://www.worksoft.com/</b> </a>
                </li>
                <li>
                    <a href='https://www.worksoft.com/resources/watch-video-worksoft-connective-automation-platform-2021 ' target='_blank' className={styles.link}><b>https://www.worksoft.com/resources/watch-video-worksoft-connective-automation-platform-2021</b> </a>
                </li>
                <li>
                    <a href='https://hopelchen.tecnm.mx/principal/sylabus/fpdb/recursos/r88015.PDF ' target='_blank' className={styles.link}><b>https://hopelchen.tecnm.mx/principal/sylabus/fpdb/recursos/r88015.PDF</b> </a>
                </li>
                <li>
                    <a href='https://auth0.com/docs/customize/integrations/marketplace-partners/defining-an-integration-use-case ' target='_blank' className={styles.link}><b>https://auth0.com/docs/customize/integrations/marketplace-partners/defining-an-integration-use-case</b> </a>
                </li>
                <li>
                    <a href='https://prezi.com/0jdf-epnljym/herramientas-integradas-i-case-integrated-case-case-integ/ ' target='_blank' className={styles.link}><b>https://prezi.com/0jdf-epnljym/herramientas-integradas-i-case-integrated-case-case-integ/</b> </a>
                </li>
                <li>
                    <a href='https://www.uc3m.es/sdic/software/ibm-rational-doors ' target='_blank' className={styles.link}><b>https://www.uc3m.es/sdic/software/ibm-rational-doors</b> </a>
                </li>
                <li>
                    <a href='https://es.wikipedia.org/wiki/Lucidchart ' target='_blank' className={styles.link}><b>https://es.wikipedia.org/wiki/Lucidchart </b></a>
                </li>
                <li>
                    <a href='https://streambe.com/es/que-es-el-diseno-de-software/ ' target='_blank' className={styles.link}><b>https://streambe.com/es/que-es-el-diseno-de-software/</b> </a>
                </li>
                <li>
                    <a href='https://es.slideshare.net/sistemaaabbbb/herramientas-case-alto-y-bajo-nivel ' target='_blank' className={styles.link}><b>https://es.slideshare.net/sistemaaabbbb/herramientas-case-alto-y-bajo-nivel</b> </a>
                </li>
                <li>
                    <a href='https://prezi.com/p/n9qyke8nxard/herramientas-upper-case/ ' target='_blank' className={styles.link}><b>https://prezi.com/p/n9qyke8nxard/herramientas-upper-case/</b> </a>
                </li>
                <li>
                    <a href='https://www.monografias.com/trabajos73/herramientas-case-proceso-desarrollo-software/herramientas-case-proceso-desarrollo-software2 ' target='_blank' className={styles.link}><b>https://www.monografias.com/trabajos73/herramientas-case-proceso-desarrollo-software/herramientas-case-proceso-desarrollo-software2 </b></a>
                </li>
                <li>
                    <a href='https://www.progress.com/'  target='_blank' className={styles.link}><b>https://www.progress.com/</b></a>
                </li>
                <li>
                    <a href='https://www.worksoft.com/applications/erp/sap-test-automation'  target='_blank' className={styles.link}><b>https://www.worksoft.com/applications/erp/sap-test-automation</b></a>
                </li>
                <li>
                    <a href='https://www.worksoft.com/process-intelligence/process-documentation'  target='_blank' className={styles.link}><b>https://www.worksoft.com/process-intelligence/process-documentation</b></a>
                </li>
                <li>
                    <a href='https://www.ibm.com/docs/en/engineering-lifecycle-management-suite/doors/9.7.2?topic=engineering-requirements-management-doors-overview'  target='_blank' className={styles.link}><b>https://www.ibm.com/docs/en/engineering-lifecycle-management-suite/doors/9.7.2?topic=engineering-requirements-management-doors-overview</b></a>
                </li>
                <li>
                    <a href='https://staruml.io/'  target='_blank' className={styles.link}><b>https://staruml.io/</b></a>
                </li>
                <li>
                    <a href='https://www.worksoft.com/applications/erp/oracle-testing'  target='_blank' className={styles.link}><b>https://www.worksoft.com/applications/erp/oracle-testing</b></a>
                </li>
            </ul>
            <br/>

            <b>{`¡Gracias por visitar el blog!`}</b>
            </div>
            </center>
            </div>
            <Footy/>
            
        </>
    )   
}

/* Recuerda que es 
voy yasta
export default function links(){
    return(
        <>
        HTML
        </>
    )   
}
Ok y si la pones tu? 
    "*/