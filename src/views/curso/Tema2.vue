<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Indicadores claves en la evaluación financiera'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-full-width.bg-color-5.mb-4
      .px-4.px-md-5.pb-md-3
        .row.mb-5
          .col-lg-3.order-2
            figure
              img(src="@/assets/curso/tema2/1.svg", data-aos="zoom-in")
          .col-lg-9.order-1.mb-3.mb-lg-0
            p.mb-0(data-aos="fade-left") Los indicadores financieros son herramientas esenciales en la gerencia financiera, ya que proporcionan datos cuantificables sobre la situación económica, operativa y estratégica de una empresa. Su análisis permite evaluar la <b>rentabilidad, liquidez, solvencia y eficiencia</b>, facilitando la toma de decisiones fundamentadas.

        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/2.svg" alt="" style="width: 90px")
              h5.text-center Medición del desempeño financiero
              p.mb-0.text-center Evalúan si la empresa está alcanzando los resultados esperados en términos de ingresos, costos y utilidades.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/3.svg" alt="" style="width: 90px")
              h5.text-center Identificación de riesgos
              p.mb-0.text-center Detectan problemas financieros, como alta dependencia de deuda o falta de liquidez, que pueden comprometer la estabilidad del negocio.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/4.svg" alt="" style="width: 90px")
              h5.text-center Planeación estratégica
              p.mb-0.text-center Ayudan a diseñar estrategias para optimizar costos, mejorar la rentabilidad y fomentar un crecimiento sostenible.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/5.svg" alt="" style="width: 90px")
              h5.text-center Comparación con el sector
              p.mb-0.text-center Permiten evaluar el desempeño de la empresa en relación con la competencia, identificando oportunidades de mejora.
    
    h2(data-aos="fade-left") Impacto en la toma de decisiones estratégicas
    p.mb-5 Una adecuada toma de decisiones estratégicas depende del análisis oportuno y acertado de indicadores financieros. Estos indicadores no solo revelan la salud financiera actual de la empresa, sino que también orientan a los gerentes en la definición de acciones clave para asegurar un crecimiento sostenible y competitivo.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/9cqLwqWDCzs?si=F1b2M6SlLRnGqFf9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Clasificación y utilidad de los indicadores financieros
    
    p.mb-4 Los indicadores financieros se clasifican en diversas categorías, cada una enfocada en analizar diferentes dimensiones de la situación financiera de la empresa:

    .row.align-items-start.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema2/6.png", alt="").mb-4.mb-lg-0
      .col-lg-8.mb-3.mb-lg-0.order-1
    
        AcordionA(tipo="b")
          .div(titulo="Indicadores de liquidez")
            p Miden la capacidad de la empresa para cumplir con sus obligaciones a corto plazo. Ejemplo: Índice de liquidez corriente: se calcula dividiendo los activos corrientes entre los pasivos corrientes. Un valor superior a 1 indica que la empresa puede cubrir sus deudas inmediatas.
    
          .div(titulo="Indicadores de rentabilidad")
            p Evalúan la eficiencia de la empresa en la generación de ganancias. Ejemplo: Margen de utilidad neta: se obtiene dividiendo la utilidad neta entre las ventas netas, reflejando el porcentaje de ingresos que se convierte en ganancia.
    
          .div(titulo="Indicadores de solvencia")
            p Determinan la capacidad de la empresa para afrontar sus obligaciones a largo plazo. Ejemplo: Índice de endeudamiento: se calcula dividiendo el total de pasivos entre el total de activos, indicando la proporción de activos financiados con deuda.
    
          .div(titulo="Indicadores de eficiencia")
            p Analizan cómo la empresa utiliza sus recursos para generar ingresos. Ejemplo: Rotación de inventarios: mide cuántas veces se renueva el inventario en un período determinado, ayudando a evaluar la eficiencia en la gestión del stock.
          .div(titulo="Indicadores de valor de mercado")
            p Reflejan la percepción del mercado sobre el valor de la empresa. Ejemplo: Valor contable por acción: se calcula dividiendo el patrimonio neto entre el número de acciones en circulación, proporcionando una estimación del valor de la empresa según sus estados financieros.

    .titulo-figura.mb-4
      h5 Figura 4.
      span Representación gráfica de los indicadores financieros
    .row.justify-content-center.align-items-center.mb-5.bg-color-9.p-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/7.png", data-aos="zoom-in")
      .col-lg-5
        p Representación gráfica de los <b>Indicadores Financieros</b> con valores representativos:
        ul.lista-ul--color
          li.mb-0.d-flex
            i.far.fa-arrow-alt-circle-right.bg-color-8
            p.mb-0 <b>Liquidez:</b> muestra la capacidad de la empresa para pagar sus obligaciones de corto plazo.
          li.mb-0.d-flex
            i.far.fa-arrow-alt-circle-right.bg-color-8
            p.mb-0 <b>Rentabilidad</b>: evalúa qué porcentaje de los ingresos se convierte en ganancia.
          li.mb-0.d-flex
            i.far.fa-arrow-alt-circle-right.bg-color-8
            p.mb-0 <b>Solvencia:</b> indica la proporción de los activos financiados con deuda.
          li.mb-0.d-flex
            i.far.fa-arrow-alt-circle-right.bg-color-8
            p.mb-0 <b>Eficiencia:</b> refleja la capacidad de la empresa para renovar su inventario y generar ingresos.
          li.mb-0.d-flex
            i.far.fa-arrow-alt-circle-right.bg-color-8
            p.mb-0 <b>Valor de mercado:</b> representa la percepción del valor de la empresa en función de su patrimonio neto y acciones.

    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/8.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 La correcta interpretación de estos indicadores permite a los gerentes identificar fortalezas y debilidades financieras, facilitando la implementación de estrategias adecuadas para mejorar el desempeño empresarial.
    
    
    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Aplicación de indicadores en la toma de decisiones estratégicas 
    
    p.mb-4 Los indicadores financieros son esenciales en la toma de decisiones estratégicas, ya que proporcionan información cuantificable sobre la situación económica de la empresa. A continuación, se presentan ejemplos prácticos de su aplicación:

    TabsC.color-acento-contenido.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Expansión de operaciones" :icon="require('@/assets/bullets/2.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2.align-content-center
            h4 Expansión de operaciones
            p.mb-0 <b>Contexto:</b> la empresa observa un margen de utilidad neta creciente en los últimos tres años. 
            p.mb-0 <b>Análisis:</b> este indicador sugiere una mejora en la rentabilidad, justificando la inversión en nuevos mercados o productos. 
            p.mb-0 <b>Acción:</b> se destinan recursos para expandir operaciones, anticipando un retorno positivo basado en la tendencia de rentabilidad.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/9.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Evaluación de la estructura de capital" :icon="require('@/assets/bullets/2.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2.align-content-center
            h4 Evaluación de la estructura de capital
            p.mb-0 <b>Contexto:</b> el índice de endeudamiento supera el 60%, indicando alta dependencia de financiamiento externo.
            p.mb-0 <b>Análisis:</b> un nivel elevado de endeudamiento aumenta el riesgo financiero y puede afectar la solvencia a largo plazo.
            p.mb-0 <b>Acción:</b> la gerencia reduce la adquisición de nuevas deudas y enfoca esfuerzos en generar ingresos internos para financiar proyectos.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/10.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Gestión de liquidez" :icon="require('@/assets/bullets/2.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2.align-content-center
            h4 Gestión de liquidez
            p.mb-0 <b>Contexto:</b> el índice de liquidez corriente está por debajo de 1, lo que indica dificultades para cubrir obligaciones a corto plazo. 
            p.mb-0 <b>Análisis:</b> la situación compromete la capacidad operativa y la reputación crediticia de la empresa. 
            p.mb-0 <b>Acción:</b> se implementan políticas de cobro más eficientes y se renegocian plazos con proveedores para mejorar la liquidez.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/11.png', alt='', style="width: 100%;")

    p.mb-4 La aplicación efectiva de estos indicadores permite a la empresa adaptarse a cambios en el entorno económico y mantener una ventaja competitiva en el mercado.

    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Relación entre indicadores financieros y sostenibilidad empresarial  
    
    p.mb-4 La sostenibilidad empresarial implica integrar prácticas económicas, sociales y ambientales en la gestión corporativa. Los indicadores financieros reflejan cómo las decisiones sostenibles impactan la salud financiera de la empresa.

    .titulo-figura.mb-4
      h5 Tabla 4.
      span Relación entre sostenibilidad y desempeño financiero
    
    .tabla-a.color-acento-botones.mb-5
      table.text-center
        thead
          tr
            th.bg-color-3.text-center Aspecto de sostenibilidad
            th.bg-color-3.text-center Contexto
            th.bg-color-3.text-center Indicador relevante
            th.bg-color-3.text-center Análisis
        tbody
          tr
            td.text-bold Inversión en prácticas sostenibles
            td Una empresa invierte en tecnologías limpias para reducir su huella de carbono.
            td Retorno sobre la inversión (ROI) 
            td Aunque la inversión inicial es alta, el ROI a mediano plazo muestra beneficios financieros gracias a la eficiencia energética y mejora de la imagen corporativa.

          tr
            td.text-bold Responsabilidad social corporativa (RSC)
            td Implementación de programas de bienestar para empleados y apoyo a comunidades locales.
            td Margen de utilidad operativa
            td Estas iniciativas pueden aumentar la satisfacción y productividad laboral, reflejándose en una mayor rentabilidad.
          tr
            td.text-bold Gestión ambiental y regulaciones
            td Adopción de procesos productivos que cumplen con normativas ambientales estrictas.
            td Costos operativos
            td Aunque hay un incremento inicial en costos, a largo plazo se evitan sanciones y se accede a incentivos gubernamentales, mejorando la rentabilidad.

    h2(data-aos="fade-left") Ejemplo 1. Inversión en prácticas sostenibles
    p.mb-5 <b>Contexto.</b> La empresa EcoTech Solutions decide invertir en paneles solares y sistemas de eficiencia energética en sus fábricas para reducir el consumo de electricidad y minimizar su impacto ambiental. Este tipo de inversión, aunque representa un costo inicial significativo, genera beneficios financieros a mediano y largo plazo, alineando la rentabilidad con la sostenibilidad.

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/12.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-9.p-5(data-aos="fade-left")
          h5 Indicador relevante:
          ul.lista-ul--color
            li.d-flex.mb-3
              i.far.fa-arrow-alt-circle-right.bg-color-8
              p.mb-0.text-bold Retorno sobre la Inversión (ROI)
            figure.mb-3.d-flex.justify-content-center
              img(src="@/assets/curso/tema2/19.svg", data-aos="zoom-in" style="width: 531px")
          
          h5 Análisis:
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-8
              p.mb-0 Costo de la inversión inicial: $500,000 en paneles solares y sistemas de eficiencia energética.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-8
              p.mb-0 Reducción en la factura de electricidad: 40% anual, equivalente a un ahorro de $150,000 por año.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-8
              p.mb-0 Tiempo de recuperación de la inversión: 
                P (Inversión inicial)/(Ahorro anual )=500/150=3.3 años
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-8
              p.mb-0 <b>Beneficio adicional:</b> mejora en la imagen corporativa y acceso a incentivos fiscales por sostenibilidad.
    
    .bg-color-4.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema2/13.png', alt='')
        .col-lg
          .p-4
            p(data-aos="fade-up").text-bold Decisión estratégica
            p.mb-0(data-aos="fade-up") Después del análisis, la empresa decide ampliar el uso de energías renovables en otras instalaciones y explora certificaciones de sostenibilidad para mejorar su posición en el mercado.

    h2(data-aos="fade-left") Ejemplo 2. Responsabilidad Social Corporativa (RSC)
    p.mb-5 La empresa <b>Alimentos NutriVida S.A.</b> implementa <b>programas de bienestar</b> para sus empleados, incluyendo seguro médico, capacitación y beneficios adicionales, además de un <b>programa de apoyo a comunidades locales</b> mediante donaciones y educación en nutrición.

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/14.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-9.p-5(data-aos="fade-left")
          h5 Indicador relevante:
          ul.lista-ul--color
            li.d-flex.mb-3
              i.far.fa-arrow-alt-circle-right.bg-color-8
              p.mb-0.text-bold Margen de Utilidad Operativa
            figure.mb-3.d-flex.justify-content-center
              img(src="@/assets/curso/tema2/20.svg", data-aos="zoom-in" style="width: 478px")
          
          h5 Análisis:
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-8
              p.mb-0 <b>Costo del Programa de RSC:</b> $200,000 anuales en beneficios para empleados y apoyo comunitario.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-8
              p.mb-0 <b>Incremento en la Productividad:</b> +15% debido a mayor motivación laboral.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-8
              p.mb-0 <b>Reducción en la Rotación de Personal:</b> Disminución del 20%, lo que reduce costos de contratación y formación.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-8
              p.mb-0 <b>Impacto en Ventas:</b> Clientes valoran la ética corporativa, lo que genera un aumento del 10% en ventas.
          h5 Decisión estratégica:
          p.mb-0 La empresa decide expandir el programa de RSC a más regiones, promoviendo la sostenibilidad empresarial y aumentando la fidelidad de clientes y empleados.

    h2(data-aos="fade-left") Ejemplo 3. Gestión ambiental y regulaciones
    p.mb-5 La empresa <b>Textiles Sostenibles S.A.</b> adopta procesos productivos <b>biodegradables y sin residuos tóxicos</b> para cumplir con normativas ambientales cada vez más estrictas.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/15.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-9.p-5(data-aos="fade-left")
          h5 Indicador relevante:
          ul.lista-ul--color
            li.d-flex.mb-3
              i.far.fa-arrow-alt-circle-right.bg-color-8
              p.mb-0.text-bold Costos operativos
            figure.mb-3.d-flex.justify-content-center
              img(src="@/assets/curso/tema2/21.svg", data-aos="zoom-in" style="width: 478px")
          
          h5 Análisis:
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-8
              p.mb-0 <b>Inversión Inicial:</b> $1,000,000 en nueva maquinaria ecológica.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-8
              p.mb-0 <b>Aumento de Costos Operativos en el Primer Año:</b> +15% debido a ajustes en procesos.
                ul.lista-ul--color.mb-0
                  li.mb-0.d-flex
                    p.mb-0 ●	<b>Ahorro en sanciones ambientales:</b> $250,000 anuales.
                  li.mb-0.d-flex
                    p.mb-0 ●	<b>Acceso a incentivos fiscales y subvenciones:</b> Reducción de impuestos en $300,000.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-8
              p.mb-0 <b>Diferenciación en el mercado:</b> Los productos sostenibles permiten aumentar el precio de venta en un 8%.
          
    h2(data-aos="fade-left") Decisión estratégica:

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema2/16.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") La empresa decide continuar innovando en procesos ecológicos y <b>destaca su compromiso ambiental</b> en campañas de marketing para mejorar su imagen y capturar más clientes conscientes con el medio ambiente.
    
        .bg-color-2.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/17.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La <b>sostenibilidad empresarial</b> no solo es una responsabilidad ética, sino que también genera <b>beneficios financieros tangibles.</b> Aplicando indicadores financieros como el <b>ROI, margen de utilidad operativa y costos operativos,</b> las empresas pueden medir el impacto de sus iniciativas sostenibles y optimizar su estrategia de crecimiento.

    .titulo-figura.mb-4
      h5 Tabla 5.
      span Resumen de impacto de las estrategias sostenibles
    
    .tabla-a.color-acento-botones.mb-5
      table
        thead
          tr
            th.bg-color-3.text-center Estrategia
            th.bg-color-3.text-center Indicador Financiero
            th.bg-color-3.text-center Impacto Económico
        tbody
          tr
            td Energía Renovable
            td Retorno sobre la Inversión (ROI)
            td Ahorro en costos energéticos y beneficios fiscales.

          tr
            td Programas de RSC
            td Margen de Utilidad Operativa
            td Mayor productividad y fidelización de clientes y empleados.
          tr
            td Producción Sostenible
            td Costos Operativos
            td Reducción de sanciones e incentivos fiscales.

    p.mb-4 Integrar sostenibilidad y análisis financiero permite a las empresas lograr <b>rentabilidad a largo plazo</b>, fortalecer su <b>posición en el mercado</b> y contribuir al desarrollo sostenible. 


    .bg-full-width.bg-color-3.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.order-2
            h2.mb-4(data-aos="flip-up") Modelos de diagnóstico financiero y optimización de costos
            p.mb-4(data-aos="fade-right") Los invitamos a leer el documento <b>Modelos de diagnóstico financiero y optimización de costos</b>, donde se analizan herramientas clave para evaluar el desempeño económico de una empresa y diseñar estrategias para maximizar su rentabilidad.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Modelos de diagnóstico financiero y optimización de costos.
    
          .col-lg-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/18.png', alt='')


    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://energymaster.co/blog/indicadores-de-rentabilidad" target="_blank" rel="noopener noreferrer") EnergyMaster. (2024). Indicadores de rentabilidad en la sostenibilidad empresarial. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.lazarusmanagement.es/principales-indicadores-financieros-y-de-gestion-que-debes-conocer/" target="_blank" rel="noopener noreferrer") Lazarus Management. (s.f.). Principales indicadores financieros y de gestión que debes conocer.  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://phcsoftware.com/es/artigo/indicadores-sostenibilidad-empresa/" target="_blank" rel="noopener noreferrer") PHC Software. (2024). ¿Qué indicadores miden la sostenibilidad de tu empresa?. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=I7ZNSPlwHio" target="_blank" rel="noopener noreferrer") Riveros A. (2019, 25 de octubre). Indicadores de evaluación financiera de proyectos VPN y TIR. [Archivo de video] YouTube. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema2',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de los siguientes estados financieros muestra la situación financiera de una empresa en un momento específico?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Estado de Resultados',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Balance General',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Estado de Flujos de Efectivo',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Presupuesto de Egresos',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Qué indicador financiero mide la capacidad de una empresa para cumplir con sus obligaciones a corto plazo?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Índice de Endeudamiento',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Razón Corriente',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Retorno sobre la Inversión (ROI)',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Margen de Utilidad Neta',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Cuál es la principal función del análisis horizontal en los estados financieros?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Comparar una cuenta con el total de activos o ventas',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Evaluar la rentabilidad de una empresa a largo plazo',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Comparar los estados financieros de diferentes períodos para identificar tendencias',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Determinar la estructura de costos operativos',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              'Si una empresa tiene una utilidad neta de $200,000 y ventas netas de $1,000,000, ¿cuál es su margen de utilidad neta?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: '5%',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: '15%',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: '20%',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: '25%',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Cuál de las siguientes estrategias NO es una forma efectiva de optimizar costos en una empresa?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Implementar tecnología para mejorar la eficiencia operativa',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Negociar con proveedores para obtener mejores precios',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Reducir la calidad de los productos sin evaluar el impacto',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto:
                  'Optimizar la cadena de suministro para disminuir costos logísticos',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
