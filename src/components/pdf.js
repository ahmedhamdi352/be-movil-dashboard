import React,{useState,useEffect} from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Link,
  Font,
} from "@react-pdf/renderer";
import logo1 from '../assest/images/Group5216.png'
import logo2 from '../assest/images/Group5032.png'
import { map } from "lodash";
import { object } from "yup";

export const Quixote = ({data}) =>{

    const [isReady, setIsReady] = useState(false);

useEffect(()=> {
setIsReady(true);
},[]);

  const renderStep1 = ()=>{
    
      return( 
        <>
        <View style={styles.content}>
          <Text style={styles.header}>Nombres:</Text>
          <Text style={styles.val}>{data.firstname}</Text>
        </View>
          <View style={styles.border}></View>

          <View style={styles.content}>
          <Text style={styles.header}>Apellidos:</Text>
          <Text style={styles.val}>{data.lastname}</Text>
        </View>
          <View style={styles.border}></View>

          <View style={styles.content}>
          <Text style={styles.header}>Ciudad:</Text>
          <Text style={styles.val}>{data.city}</Text>
        </View>
          <View style={styles.border}></View>

          <View style={styles.content}>
          <Text style={styles.header}>Departamento:</Text>
          <Text style={styles.val}>{data.valley}</Text>
        </View>
          <View style={styles.border}></View>

          <View style={styles.content}>
          <Text style={styles.header}>Tipo de Identificación:</Text>
          <Text style={styles.val}>{data.personal_id}</Text>
        </View>
          <View style={styles.border}></View>

          <View style={styles.content}>
          <Text style={styles.header}>Número:</Text>
          <Text style={styles.val}>{data.number}</Text>
        </View>
          <View style={styles.border}></View>

          <View style={styles.content}>
          <Text style={styles.header}>Lugar de Expedición:</Text>
          <Text style={styles.val}>{data.expedition_place}</Text>
        </View>
          <View style={styles.border}></View>

          <View style={styles.content}>
          <Text style={styles.header}>Fecha de Expedición:</Text>
          <Text style={styles.val}>{data.expedition_data}</Text>
        </View>
          <View style={styles.border}></View>


          <View style={styles.content}>
          <Text style={styles.header}>Celular</Text>
          <Text style={styles.val}>{data.mobile_phone}</Text>
        </View>
          <View style={styles.border}></View>

          <View style={styles.content}>
          <Text style={styles.header}>Correo Electrónico:</Text>
          <Text style={styles.val}>{data.email}</Text>
        </View>
          <View style={styles.border}></View>
          </>
      )
    
    
  }

  const renderPrices = () =>{
    
    
    return( 
      <>
      <View style={styles.content}>
        <Text style={styles.header}>Ingresos:</Text>
        <Text style={styles.val}>{data.ingresos }</Text>
      </View>
        <View style={styles.border}></View>

        <View style={styles.content}>
        <Text style={styles.header}>TotalActivos:</Text>
        <Text style={styles.val}>{data.total_activos}</Text>
      </View>
        <View style={styles.border}></View>

    

        <View style={styles.content}>
        <Text style={styles.header}>Egresos:</Text>
        <Text style={styles.val}>{data.egresos }</Text>
      </View>
        <View style={styles.border}></View>

        <View style={styles.content}>
        <Text style={styles.header}>TotalPasivos:</Text>
        <Text style={styles.val}>{data.total_pasivos }</Text>
      </View>
        <View style={styles.border}></View>

        
        </>
    )

  }

  const renderText = () =>{
    return (
      <>
      <View style={{...styles.content,marginBottom:'20px'}}>
      <Text style={{...styles.header,width:'70%'}}> 1. El DISTRIBUIDOR o PUNTO DE VENTA declara y acepta que el diligenciamiento del presente formato se realiza única y exclusivamente con el fin de que BE MOVIL solicite la vinculación y actualización El DISTRIBUIDOR o PUNTO DE VENTA como corresponsal bancario, sin que ello implique para BE MOVIL o sus aliados la obligación de aceptar tal solicitud.</Text>
      <Text style={styles.val}>Acepto</Text>
     </View>
      <Text style={{...styles.header,width:'70%',marginBottom:'20px'}}> 2. El DISTRIBUIDOR o PUNTO DE VENTA declara y acepta que el diligenciamiento del presente formato o aceptación como corresponsal no genera un vínculo directo con BE MOVIL, toda vez que El DISTRIBUIDOR o PUNTO DE VENTA seguirá conservando su posición y nivel de jerarquía dentro de la red, reconociendo en todos los casos las jerarquías de nivel superior a las que pertenece, así como las condiciones comerciales pactadas por ellas.</Text>

      <View style={styles.border}></View>
      </>
    )
  }
  const renderText2 = () =>{
    return (
      <>
      <View style={{...styles.content,marginBottom:'20px'}}>
      <Text style={{...styles.header,width:'70%'}}>Con el diligenciamiento del presente formato, autorizo a BE MOVIL para que procese, administre, coleccione, archive, reporte o transmita la información comercial y financiera que reciba u obre en su poder sobre el suscrito y para que recolecte o consulte en las diferentes centrales de riesgo y listas restrictivas, la información sobre mi comportamiento crediticio y, respecto del cumplimiento de cualquier obligación civil o natural a mi cargo; así mismo para reportar a terceros tales datos, dando cumplimiento a lo contemplado en la Ley 1266 de 2008.</Text>
      <Text style={styles.val}>Acepto</Text>
     </View>

      <View style={styles.border}></View>
      </>
    )
  }

  const renderText3= () =>{
    return (
      <>
      <View style={{...styles.content,marginBottom:'20px'}}>
     
      <Text style={{...styles.header,width:'70%'}}>El DISTRIBUIDOR Y/O PUNTO DE VENTA se obliga en todo a cumplir con los procedimientos, autorizaciones, requisitos, condicionamientos y alcances contemplados para la protección de los datos de carácter personal en las leyes que regulen la materia. El DISTRIBUIDOR Y/O PUNTO DE VENTA se obliga a mantener en estricta reserva y absoluta confidencialidad todos los documentos y bases de datos que contengan información personal de clientes, proveedores y/o empleados de cualquiera de las Partes. Esta información no podrá ser utilizada por las Partes para fines distintos de los que sean necesarios para la prestación de los servicios objeto del presente Contrato, ni podrá ser entregada o cedida, transferida o transmitida, parcial o totalmente a terceras personas ajenas a esta relación contractual. En virtud de la obligación anteriormente descrita, el DISTRIBUIDOR Y/O PUNTO DE VENTA se obliga expresamente a: a) Utilizar o aplicar la información personal proporcionada por BE MOVIL y por los clientes exclusivamente para la realización de los fines establecidos en este Contrato, b) No comunicarlos, traspasarlos o proporcionarlos a otras personas, ni duplicar o reproducir toda o Parte de la información, c) Asegurarse de que los datos sean manejados únicamente por aquellos empleados cuya intervención sea necesaria para la prestación de los servicios del presente contrato, con sujeción al secreto profesional y confidencialidad, d) Admitir los controles y auditorías que las Partes requieran a efectos de verificar el cumplimiento de lo establecido en el presente documento, e) Una vez finalizado el Contrato, deberá destruir la información o devolverla sin conservar ninguna copia, f) Custodiar la información, a través de las medidas de seguridad, legalmente exigibles, de índole técnica y organizativa que garanticen la seguridad de los mismos, evitando su alteración, pérdida, tratamiento o acceso no autorizado, g) Responder por cualquier reclamo, denuncia, proceso judicial, procedimiento administrativo u otro iniciado contra alguna de ellas como motivo del incumplimiento de cualquiera de las obligaciones pactadas en este artículo El DISTRIBUIDOR Y/O PUNTO DE VENTA asumirá las costas y costos correspondientes, asumiendo cualquier monto por daños o perjuicios, indemnizaciones, multas, u otras sanciones que pudiera recibir BE MOVIL. El DISTRIBUIDOR Y/O PUNTO DE VENTA se obliga a suministrar físicamente, en cualquier tiempo, previo requerimiento de BE MOVIL, la autorización previa y expresa por Parte del titular de la información que establezca la facultad de realizar tratamiento de los datos para los fines establecidos en el presente Contrato.</Text>
      <Text style={styles.val}>Acepto</Text>
     </View>

      <View style={styles.border}></View>
      </>
    )
  }

  const renderText4= () =>{
    return (
      <>
      <View style={{...styles.content,marginBottom:'20px'}}>
        <View>
        <Text style={{...styles.header,width:'70%'}}>En mi calidad de Titular de la información o Representante Legal del mismo, autorizo a BE MOVIL a dar Tratamiento a mis datos personales, de acuerdo a la Ley 1581 de 2012 y el decreto reglamentario 1377 de 2013 para:</Text>
        <Text style={{...styles.header,width:'70%',marginTop:'5px'}}>a) Establecer comunicación directa por diferentes medios (impreso, telefónico, sms, correos electrónicos) con objetivos comerciales asociados a productos y/o servicios. </Text>
        <Text style={{...styles.header,width:'70%',marginTop:'5px'}}>b) Evaluar la calidad de los servicio. </Text>
        <Text style={{...styles.header,width:'70%',marginTop:'5px'}}>c) Realizar estudios de mercadeo. </Text>
        <Text style={{...styles.header,width:'70%',marginTop:'5px'}}>d) Envió de publicidad</Text>
        <Text style={{...styles.header,width:'70%',marginTop:'5px'}}>e) Transferir o transmitir la información de contacto, para el envío de información comercial de los productos y/o servicios comercializados.</Text>
        <Text style={{...styles.header,width:'70%',marginTop:'5px'}}>f) Programas de fidelización y actualización de datos</Text>
        <Text style={{...styles.header,width:'70%',marginTop:'5px'}}>g) Utilización de datos biométricos como huella digital, audio, video y/o fotografía o a través de cualquier otro medio conocido o por conocerse (se entiende como “imagen” el nombre, seudónimo, voz, firmas, iniciales, figura, fisionomía de cuerpo, cara o cualquier signo que se relacione con la identidad de la persona), para reproducción, comunicación o transmisión.</Text>
        <Text style={{...styles.header,width:'70%',marginTop:'5px'}}>h) Información para el diligenciamiento de planilla, manejo y uso de la plataforma sirse.</Text>
        <Text style={{...styles.header,width:'70%',marginTop:'5px'}}>i) Para efectos de envió, recaudo, despachos y garantías de los productos.</Text>
        <Text style={{...styles.header,width:'70%',marginTop:'5px'}}>j) Dar respuesta a requerimientos de autoridades competentes o judiciales.</Text>
        <Text style={{...styles.header,width:'70%',marginTop:'5px'}}>k) Procesos de certificación en calidad.</Text>
        <Text style={{...styles.header,width:'70%',marginTop:'5px'}}>La autorización permitirá a la empresa transferir, almacenar, usar, circular, suprimir, compartir, actualizar y transmitir los datos de acuerdo con el procedimiento y la Política de Protección de Datos Personales, la cual podrá ser consultada en la pagina web: www.bemovil.net. El tratamiento se realizará mediante correo físico, electrónico, celular o dispositivo móvil, vía mensajes de texto, whatsapp o a través de cualquier medio análogo y/o 
digital de comunicación.
En el evento en que se soliciten datos sensibles, es decir, aquellos que afecten la intimidad del titular o cuyo uso indebido puede generar su discriminación, usted no está en la obligación de autorizar su tratamiento. Los titulares podrán ejercer en cualquier momento su derecho a conocer, actualizar y rectificar sus datos personales; solicitar prueba de la autorización otorgada; ser informado del uso que le han dado a sus datos personales; presentar ante la SIC quejas por infracciones; revocar la autorización y solicitar la supresión de los datos y acceder en forma gratuita a sus datos personales que hayan sido objeto de Tratamiento.</Text>

        </View>
      <Text style={styles.val}>Acepto</Text>
     </View>

      <View style={styles.border}></View>
      </>
    )
  }

  const renderText5= () =>{
    return (
      <>
      <View style={{...styles.content,marginBottom:'20px'}}>
        <Text style={{...styles.header,width:'70%'}}> El DISTRIBUIDOR Y/O PUNTO DE VENTA declara bajo la gravedad del juramento que sus ingresos provienen de actividades lícitas, que no se encuentra con registro negativo en listados de prevención de lavado de activos nacionales o internacionales, que no se encuentra dentro de una de las dos categorías de lavado de activos (conversión o movimiento) y que, en consecuencia, se obliga a responder a BE MOVIL por todos los perjuicios que se llegaren a causar como consecuencia de esta afirmación. En igual sentido responderá ante terceros. Declara igualmente, que sus conductas se ajustan a la ley y a la ética. Asimismo, manifiesta de manera expresa que no tienen relación alguna con actividades prohibidas o calificadas por la ley como delictivas. En todo caso, se autorizan de manera irrevocable a entre sí para hacer las verificaciones e investigaciones que estimen necesarias sobre este aspecto. BE MOVIL dar por terminado el presente contrato en cualquier tiempo y sin previo aviso a si el DISTRIBUIDOR Y/O PUNTO DE VENTA llegare a ser: 1.) Vinculado por parte de las autoridades competentes a cualquier tipo de investigación por delitos de narcotráfico, terrorismo, secuestro, lavado de activos y/o conexos; 2.) Incluido en listas para el control de lavado de activos administradas por cualquier autoridad nacional o extranjera, tales como la Oficina de Control de Activos en el Exterior (OFAC) del Departamento del Tesoro de los Estados Unidos de América o; 3.) Condenado por parte de las autoridades competentes en cualquier tipo de proceso judicial relacionado con la comisión de cualquier hecho punible.</Text>
     
      <Text style={styles.val}>Acepto</Text>
     </View>

      <View style={styles.border}></View>
      </>
    )
  }

  const renderLink1= () =>{
    return (
      <>
      <View style={{...styles.content,marginBottom:'20px'}}>
        <Link fixed={true} style={{...styles.header,width:'70%'}} src={data.firstFile}>CAMARADE COMERCIO PDF</Link> 
     </View>

      <View style={styles.border}></View>
      </>
    )
  }

  const renderLink2= () =>{
    return (
      <>
      <View style={{...styles.content,marginBottom:'20px'}}>
        <Link fixed={true} style={{...styles.header,width:'70%'}} src={data.secondFile}>RUT PDF</Link> 
     </View>

      <View style={styles.border}></View>
      </>
    )
  }

  const renderinfo = ()=>{
  
    
      return( 
        <>
        <View style={styles.content}>
          <Text style={styles.header}>Nombres:</Text>
          <Text style={styles.val}>{data.name_info}</Text>
        </View>
          <View style={styles.border}></View>

          <View style={styles.content}>
          <Text style={styles.header}>Apellidos:</Text>
          <Text style={styles.val}>{data.lastname_info}</Text>
        </View>
          <View style={styles.border}></View>

          <View style={styles.content}>
          <Text style={styles.header}>Correo Electrónico:</Text>
          <Text style={styles.val}>{data.email_info}</Text>
        </View>
          <View style={styles.border}></View>

          <View style={styles.content}>
          <Text style={styles.header}>Número Celular:</Text>
          <Text style={styles.val}>{data.number_info}</Text>
        </View>
          <View style={styles.border}></View>

         
          </>
      )
    
    
  }

  const renderphoto =()=>{
    const {client_image1,client_image2,client_image3}=data
    return( 
      <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
        <Image source= {client_image1 || ''} style={{width:'200px',height:'250px',margin:'20px'}}/>
        <Image source= {client_image2 || ''}  style={{width:'200px',height:'250px',margin:'20px'}}/>
        <Image source= {client_image3 || ''} style={{width:'200px',height:'250px',margin:'20px'}}/>

      </View>
    
    )

  }

  const renderlastindo = ()=>{
    return (
      <>
      <View style={{...styles.content,marginBottom:'20px'}}>
        <Text style={{...styles.header,width:'60%'}}> El DISTRIBUIDOR o PUNTO DE VENTA declara y acepta que el diligenciamiento del presente formato o aceptación como corresponsal no genera un vínculo directo con BE MOVIL, toda vez que El DISTRIBUIDOR o PUNTO DE VENTA seguirá conservando su posición y nivel de jerarquía dentro de la red, reconociendo en todos los casos las jerarquías de nivel superior a las que pertenece, así como las condiciones comerciales pactadas por ellas.</Text>
     
      <Text style={{ ...styles.val, width:'40%', marginLeft:'10px'}}>Acepto que toda la información acá registrada es veraz y corresponde a mi información personal y comercial y corresponde a mi información personal y comercial</Text>
    
     </View>

      <View style={styles.border}></View>
      </>
    )

  }


  


return (
  <Document>
    <Page style={styles.body} size='B4'>
      {/* <Text style={styles.header} fixed>
        ~ Created with react-pdf ~
      </Text> */}
      <View style={{marginBottom:20}}>
      <View style={styles.titleContent}>
      <Image
        style={styles.image1}
        src={logo1}
      />
       <Image
        style={styles.image2}
        src={logo2}
      />
      </View>
      <Text style={styles.title}>REGISTROYACTUALIZACIÓNDE DISTRIBUIDORY/OPUNTODE VENTACOMOCORRESPONSALBANCARIO-BE MOVILS.A.S</Text>
      <View style={styles.border}></View>
      </View>

      <Text style={styles.subtitle}>
      DATOSGENERALES DELDISTRIBUIDORY/OPUNTODE VENTA(PERSONANATURAL)
      </Text>
      <View style={styles.border}></View>
      {renderStep1()}

      <Text style={styles.subtitle}>
      NFORMACIÓN FINANCIERA
      </Text>
      <View style={styles.border}></View>
      {renderPrices()}

      <Text style={styles.subtitle}>
      DECLARACIONES ESPECIALESDELDISTRIBUIDOROPUNTODE VENTA
      </Text>
      <View style={styles.border}></View>
      {renderText()}

      {/* <Text style={styles.subtitle}>
      TRATAMIENTODE DATOSPERSONALES   
       </Text>
      <View style={styles.border}></View>
      {renderText()} */}

       
      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
    </Page>

    <Page style={styles.body} size='B4'>
     
      <View style={{marginBottom:20}}>
      <View style={styles.titleContent}>
      <Image
        style={styles.image1}
        src={logo1}
      />
       <Image
        style={styles.image2}
        src={logo2}
      />
      </View>
      <Text style={styles.title}>REGISTROYACTUALIZACIÓNDE DISTRIBUIDORY/OPUNTODE VENTACOMOCORRESPONSALBANCARIO-BE MOVILS.A.S</Text>
      <View style={styles.border}></View>
      </View>

      <Text style={styles.subtitle}>
      AUTORIZACIÓN PARA CONSULTA Y REPORTE A CENTRALES DE RIESGO Y LISTAS RESTIRCTIVAS      </Text>
      <View style={styles.border}></View>
      {renderText2()}

      <Text style={styles.subtitle}>
      TRATAMIENTO DE DATOS PERSONALES
      </Text>
      <View style={styles.border}></View>
      {renderText3()}

     

       
      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
    </Page>


    <Page style={styles.body} size='B4'>
     
      <View style={{marginBottom:20}}>
      <View style={styles.titleContent}>
      <Image
        style={styles.image1}
        src={logo1}
      />
       <Image
        style={styles.image2}
        src={logo2}
      />
      </View>
      <Text style={styles.title}>REGISTROYACTUALIZACIÓNDE DISTRIBUIDORY/OPUNTODE VENTACOMOCORRESPONSALBANCARIO-BE MOVILS.A.S</Text>
      <View style={styles.border}></View>
      </View>

      <Text style={styles.subtitle}>
      AUTORIZACIÓN PARA EL TRATAMIENTO DE DATOS PERSONALES      </Text>
      <View style={styles.border}></View>
      {renderText4()}

      {/* <Text style={styles.subtitle}>
      ORIGEN DE FONDOS
       </Text>
      <View style={styles.border}></View>
      {renderText5()} */}


      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
    </Page>


    <Page style={styles.body} size='B4'>
     
     <View style={{marginBottom:20}}>
     <View style={styles.titleContent}>
     <Image
       style={styles.image1}
       src={logo1}
     />
      <Image
       style={styles.image2}
       src={logo2}
     />
     </View>
     <Text style={styles.title}>REGISTROYACTUALIZACIÓNDE DISTRIBUIDORY/OPUNTODE VENTACOMOCORRESPONSALBANCARIO-BE MOVILS.A.S</Text>
     <View style={styles.border}></View>
     </View>

     <Text style={styles.subtitle}>
     ORIGEN DE FONDOS
      </Text>
     <View style={styles.border}></View>
     {renderText5()}

     <Text style={styles.subtitle}>
     CAMARADE COMERCIO
      </Text>
     <View style={styles.border}></View>
     {renderLink1()}

     <Text style={styles.subtitle}>
     RUT
      </Text>
     <View style={styles.border}></View>
     {renderLink2()}

     <Text style={styles.subtitle}>
      DATOS PERSONALES DEL FIRMANTE      </Text>
      <View style={styles.border}></View>
      {renderinfo()}


     <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
       `${pageNumber} / ${totalPages}`
     )} fixed />
   </Page>

   <Page style={styles.body} size='B4'>
     
     <View style={{marginBottom:20}}>
     <View style={styles.titleContent}>
     <Image
       style={styles.image1}
       src={logo1}
     />
      <Image
       style={styles.image2}
       src={logo2}
     />
     </View>
     <Text style={styles.title}>REGISTROYACTUALIZACIÓNDE DISTRIBUIDORY/OPUNTODE VENTACOMOCORRESPONSALBANCARIO-BE MOVILS.A.S</Text>
     <View style={styles.border}></View>
     </View>

     <Text style={styles.subtitle}>FOTOGRAFÍAS </Text>
      <View style={styles.border}></View>
      {renderphoto()}

      <Text style={styles.subtitle}>FOTOGRAFÍAS </Text>
      <View style={styles.border}></View>
      {renderlastindo()}

      <Text style={styles.subtitle}>ESPACIORESERVADOPARABE MOVIL </Text>
      <View style={styles.border}></View>

      <Text style={{...styles.header,marginTop:'20px',marginBottom:'50px'}}>Aprobado por:</Text>
      <View style={{width:'100%',flexDirection:'row'}}>

        <View style={{width:'50%',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
          <View style={{...styles.border,width:'70%',marginBottom:'10px', marginRight:'20px'}}></View>
          <Text style={styles.header}> Oficial de Cumplimiento </Text>

        </View>

        <View style={{width:'50%',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
          <View style={{...styles.border,width:'70%',marginBottom:'10px', marginLeft:'20px'}}></View>
          <Text style={styles.header}> Firma del Oficial de Cumplimiento </Text>

        </View>
      </View>

      <Text style={{...styles.header,marginTop:'20px',marginBottom:'20px',marginTop:'40px'}}>Se verificó en listas restrictivas:</Text>
       
      <View style={{width:'100%',flexDirection:'row'}}>

        <View style={{width:'50%',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
          <View style={{flexDirection:'row',justifyContent:'center',justifyContent:'center'}}>

          <Text style={{...styles.header,marginRight:'10px'}}>Si</Text>
          <View style={{...styles.border,width:'30%',marginBottom:'10px', marginRight:'20px'}}></View>

          </View>
          <View style={{flexDirection:'row',justifyContent:'center',justifyContent:'center'}}>

<Text style={{...styles.header,marginRight:'10px'}}>Si</Text>
<View style={{...styles.border,width:'30%',marginBottom:'10px', marginRight:'20px'}}></View>

</View>
         
        </View>

        <View style={{width:'50%',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
          <View style={{...styles.border,width:'70%',marginBottom:'10px', marginLeft:'20px'}}></View>
          <Text style={styles.header}> Fecha de Aprobación</Text>

        </View>
      </View>






     <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
       `${pageNumber} / ${totalPages}`
     )} fixed />
   </Page>
  </Document>
);
}

Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  titleContent:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    marginBottom:10
  },
  image1: {
    width:75,
    height:80,
    marginRight:10
  },
  image2: {
    width:201,
    height:27,
    marginLeft:10 
  },
  border:{
    borderBottomColor:'#00000',
    borderBottomStyle:'solid',
    borderBottomWidth:1,
    marginTop:2
  },

  title: {
    fontSize: 15,
    textAlign: 'center',
    fontFamily: 'Oswald',
 
  },
  content:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:10


  },
  author: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 12,
    marginTop: 10,
    fontFamily: 'Oswald'
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Times-Roman'
  },

  header: {
    fontSize: 12,
    // marginBottom: 20,
    textAlign: 'left',
    color: 'grey',
  },
  val:{
    fontSize: 12,
    // marginBottom: 20,
    textAlign: 'left',
    color: '#0000',

  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
});

