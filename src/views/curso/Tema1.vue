<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Herramientas de análisis financiero'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-full-width.bg-color-6.mb-3
      .px-4.px-md-5.pb-md-3 
        .row.mb-5
          .col-lg-4.order-2
            figure
              img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
          .col-lg-8.order-1.mb-3.mb-lg-0
            .bg-color-2.p-4.mb-3(data-aos="fade-left")
              .row.align-items-start
                .col-lg-auto
                  img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0 En la administración de empresas, las herramientas de análisis financiero son esenciales para evaluar la situación económica de una organización y facilitar la toma de decisiones estratégicas. Permiten examinar datos financieros, identificar tendencias y realizar comparaciones que optimizan la gestión empresarial.
            p(data-aos="fade-left") Algunas de las herramientas más relevantes incluyen:
            p.mb-0 <b>Indicadores financieros:</b> Evalúan aspectos clave como:

        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/3.svg" alt="" style="width: 90px")
              h5.text-center Liquidez
              p.mb-0.text-center Mide la capacidad de la empresa para cumplir con obligaciones a corto plazo.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/4.svg" alt="" style="width: 90px")
              h5.text-center Rentabilidad
              p.mb-0.text-center Analiza la eficiencia en la generación de utilidades en relación con ventas o inversiones.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/5.svg" alt="" style="width: 90px")
              h5.text-center Solvencia
              p.mb-0.text-center Determina la capacidad de la empresa para afrontar compromisos financieros a largo plazo.
    
    .bg-full-width.bg-color-7.mb-3.px-5.pt-5.mb-5
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-8
                    p.mb-0 <b>Análisis de tendencias:</b> examina los datos financieros en distintos periodos para detectar patrones y prever escenarios futuros.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-8
                    p.mb-0 <b>Flujo de efectivo:</b> estudia las entradas y salidas de dinero en un periodo específico, proporcionando información clave sobre la capacidad de la empresa para generar liquidez.
                p.text-bold El uso eficiente de estas herramientas no solo permite evaluar la situación actual de la organización, sino también diseñar estrategias que optimicen costos, incrementen la rentabilidad y promuevan la sostenibilidad empresarial. En un entorno competitivo, dominar estas herramientas se convierte en una competencia indispensable para los profesionales de la administración.
              .col-lg-4(data-aos="zoom-in")
                img.img-fluid(src='@/assets/curso/tema1/6.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
        

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Concepto y objetivos de la gerencia financiera
    
    p.mb-4 El análisis financiero es fundamental en la gerencia financiera, ya que facilita la toma de decisiones estratégicas en áreas como inversión, financiamiento y control de costos. Sus principales objetivos son:

    .bg-full-width.bg-color-4.mb-3.px-5.pt-5.mb-5
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0.order-lg-2
                ul.lista-ul--color
                  li.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-8
                    p.mb-0 <b>Medir la rentabilidad</b> de la empresa y su capacidad para generar beneficios.
                  li.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-8
                    p.mb-0 <b>Determinar la liquidez</b> y garantizar que la organización pueda cumplir con sus obligaciones a corto plazo.
                  li.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-8
                    p.mb-0 <b>Evaluar la solvencia</b> a largo plazo para asegurar estabilidad financiera.
                  li.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-8
                    p.mb-0 <b>Identificar fortalezas y oportunidades de mejora</b> en la estructura financiera.
                p Las decisiones financieras se basan en información obtenida de los estados financieros, los cuales permiten proyectar escenarios futuros.
            
              .col-lg-4(data-aos="zoom-in").order-lg-1
                img.img-fluid(src='@/assets/curso/tema1/7.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
        
    h2(data-aos="fade-left") Documentos clave en el análisis financiero
    p.mb-5 El análisis financiero se apoya en tres documentos fundamentales:

    TabsC.color-acento-contenido.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Balance general" :icon="require('@/assets/bullets/2.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2.align-content-center
            h4 Balance general
            p Presenta los activos, pasivos y patrimonio en un momento específico, permitiendo conocer la estabilidad financiera.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/8.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Estado de resultados" :icon="require('@/assets/bullets/2.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2.align-content-center
            h4 Estado de resultados
            p Muestra ingresos, costos y gastos en un periodo determinado, reflejando si la empresa obtiene utilidades o pérdidas.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/9.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Estado de flujos de efectivo" :icon="require('@/assets/bullets/2.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2.align-content-center
            h4 Estado de flujos de efectivo
            p Registra los movimientos de dinero dentro y fuera de la empresa, facilitando la evaluación de la liquidez.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/10.png', alt='', style="width: 100%;")
    
    .bg-full-width.bg-color-5.mb-4
      .px-4.px-md-5.pb-md-3
        .row.mb-5
          .col-lg-4.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/11.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            .bg-color-1.p-5(data-aos="fade-left")
              h5 Ejemplo práctico
              p El gerente financiero de <b>Tecnología Global S.A.</b> detecta un aumento del 30 % en ingresos respecto al año anterior. Sin embargo, al analizar el estado de resultados, se observa que los costos operativos crecieron un 35 %, afectando la rentabilidad.
              p.mb-0 <b>Acción gerencial:</b> se recomienda revisar la estructura de costos y renegociar con proveedores para mejorar los márgenes sin comprometer la calidad del producto.
        
        h2(data-aos="fade-left") Función estratégica del análisis financiero
        p.mb-5 El análisis financiero no solo permite interpretar la situación actual de la empresa, sino que también contribuye a la planificación estratégica y la gestión de riesgos.

        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/12.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Identificación de tendencias
                p.mb-0 Permite detectar patrones de crecimiento o contracción en ventas y utilidades, facilitando decisiones sobre expansión o reducción de costos.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/13.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Evaluación de riesgos
                p.mb-0 Ayuda a prever problemas financieros y gestionar el endeudamiento y la liquidez.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/14.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Planificación de estrategias futuras
                p.mb-0 Permite establecer metas financieras alcanzables y optimizar costos para mejorar la rentabilidad.

  
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/15.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-2.p-5.mb-3(data-aos="fade-left")
          h5 Ejemplo práctico
          p Una empresa del sector <b>retail</b> incrementa sus ventas un 50 %, pero su utilidad neta cae un 10 % debido al aumento de costos fijos y variables.
          p.mb-0 <b>Acción gerencial:</b> se recomienda automatizar procesos, optimizar la logística y evaluar proveedores para reducir costos sin afectar la operación.
        p El análisis financiero es una herramienta clave para la toma de decisiones estratégicas y la sostenibilidad de la empresa. Su correcta aplicación permite mantener una estructura financiera sólida, rentable y competitiva.

    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Análisis horizontal y vertical de los estados financieros
    
    p.mb-4 El análisis de los estados financieros es esencial en la gerencia financiera, ya que permite evaluar la situación económica de la empresa desde diferentes enfoques. Existen dos métodos principales para este análisis:

    TabsC.color-acento-contenido.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Análisis horizontal" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.align-content-center
            h4 Análisis horizontal
            p Compara los estados financieros de distintos períodos para identificar tendencias y cambios en el desempeño.
    
          .col-md-8.col-lg-5.col-xl-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/16.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Análisis vertical" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.align-content-center
            h4 Análisis vertical
            p Examina la estructura de los estados financieros en un solo período, expresando cada cuenta como un porcentaje del total, facilitando la comparación entre empresas o períodos.
    
          .col-md-8.col-lg-5.col-xl-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/17.png', alt='')
    
    .bg-full-width.bg-color-1.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/18.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Ambos enfoques proporcionan información clave para la toma de decisiones estratégicas y permiten anticipar oportunidades o riesgos financieros.

    .bg-full-width.bg-color-5.mb-4
      .px-4.px-md-5.pb-md-3
        h2(data-aos="fade-left") Análisis horizontal
        p.mb-5 El análisis horizontal es una técnica que evalúa la evolución financiera a lo largo del tiempo mediante la comparación de cifras de diferentes períodos. Facilita la identificación de tendencias de crecimiento, estabilidad o deterioro. Características del análisis horizontal:

        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/19.svg" alt="" style="width: 90px")
              h5.text-center Primero
              p.mb-0.text-center Permite comparar datos financieros de distintos períodos para evaluar patrones de desempeño.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/20.svg" alt="" style="width: 90px")
              h5.text-center Segundo
              p.mb-0.text-center Identifica incrementos o reducciones en ingresos, costos y utilidades.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/21.svg" alt="" style="width: 90px")
              h5.text-center Tercero
              p.mb-0.text-center Facilita la planificación estratégica al prever tendencias futuras.
    
    h2(data-aos="fade-left") Caso gerencial: Evaluación de crecimiento en "Supermercados Éxito"
    p.mb-5 El gerente financiero de <b>Supermercados Éxito</b> detecta un aumento en las ventas, pero también un incremento en los costos operativos. Para evaluar el impacto, se realiza un análisis horizontal de los últimos tres años:

    .titulo-figura.mb-4
      h5 Tabla 1.
      span Tabla de análisis horizontal
    .tabla-a.color-acento-botones.mb-5
      table.text-center
        thead
          tr
            th.bg-color-3.text-center Concepto
            th.bg-color-3.text-center Año 1 
            th.bg-color-3.text-center Año 2
            th.bg-color-3.text-center Año 3
            th.bg-color-3.text-center Variación (%) 
        tbody
          tr
            td.text-bold Ventas netas
            td 1,500,000
            td 1,800,000
            td 2,200,000
            td +46.67%
          tr
            td.text-bold Costo de ventas
            td 900,000
            td 1,100,000
            td 1,500,000
            td +66.67%
          tr
            td.text-bold Utilidad neta
            td 250,000
            td 290,000
            td 280,000
            td -4%


    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/22.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-4.p-5(data-aos="fade-left")
          p La decisión gerencial es: 
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-8
              p.mb-0 Aunque las ventas han aumentado un 46.67%, los costos han crecido un 66.67%, afectando la rentabilidad.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-8
              p.mb-0 Se recomienda mejorar la eficiencia operativa optimizando procesos internos y renegociando con proveedores para reducir costos sin comprometer la calidad.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-8
              p.mb-0 Es necesario analizar los gastos administrativos y recortar partidas innecesarias.
    
    p.mb-4 A continuación, se presenta una gráfica que ilustra la evolución de las ventas netas y los costos de ventas en los últimos tres años, permitiendo visualizar el impacto del incremento de costos en la rentabilidad

    .titulo-figura.mb-4
      h5 Figura 1.
      span Crecimiento de ventas vs. costos
    .row.justify-content-center.align-items-center.mb-5.bg-color-9.p-5
      .col-lg-6
        figure
          img(src="@/assets/curso/tema1/23.png", data-aos="zoom-in")
        

    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Análisis vertical
    
    p El análisis vertical permite evaluar la estructura de los estados financieros en un período determinado. Su objetivo es mostrar la proporción de cada cuenta dentro del total, facilitando la comparación con los estándares del sector.

    p.mb-4 Las características del análisis vertical son: 

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/24.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-1.px-5.py-4(data-aos="fade-left")
          ul.lista-ul--color
            li.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-8
              p.mb-0 Expresa cada cuenta financiera como un porcentaje de una cifra base:
                ul.lista-ul--color
                  li.mb-0.d-flex
                    p.mb-0 ● En el <b>estado de resultados</b>, se usa como base las ventas netas.
                  li.mb-0.d-flex
                    p.mb-0 ● En el <b>balance general</b>, se toman como base los activos totales.	 
            li.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-8
              p.mb-0 Permite identificar cuentas con un peso significativo dentro de la estructura financiera.
            li.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-8
              p.mb-0 Facilita la evaluación de costos y gastos en comparación con otras empresas del sector.

    h2(data-aos="fade-left") Caso gerencial. Evaluación de costos en "Industria Textil S.A."
    p.mb-5 El gerente financiero de Industria Textil S.A. analiza si los costos operativos están afectando la rentabilidad de la empresa. Para ello, se realiza un análisis vertical del estado de resultados.

    .titulo-figura.mb-4
      h5 Tabla 2.
      span Análisis vertical - estado de resultados
    .tabla-a.color-acento-botones.mb-5
      table.text-center
        thead
          tr
            th.bg-color-3.text-center Concepto
            th.bg-color-3.text-center Monto ($) 
            th.bg-color-3.text-center % sobre Ventas Netas
        tbody
          tr
            td Ventas Netas
            td 2,000,000
            td 100%
          tr
            td Costo de Ventas
            td 1,300,000
            td 65%
          tr
            td Gastos Operativos
            td 500,000
            td 25%
          tr
            td Utilidad Neta
            td 200,000
            td 10%
    
    p.mb-4 La decisión gerencial es: 

    .bg-full-width.bg-color-4.mb-3.px-5.pt-5.mb-5
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0.order-lg-2
                ul.lista-ul--color
                  li.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-8
                    p.mb-0 Se identifica que los <b>costos de producción representan el 65% de los ingresos</b>, superando el promedio del sector (50%).
                  li.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-8
                    p.mb-0 Para mejorar la rentabilidad, se recomienda implementar un <b>plan de eficiencia productiva</b>, que incluya: 
                  .row.mb-3
                    .col-lg-4.mb-3.mb-lg-0
                      div.bg-color-white.h-100.p-3
                        p.mb-0 <b>Optimización del uso de materia</b> prima para reducir desperdicios.
                    .col-lg-4.mb-3.mb-lg-0
                      div.bg-color-white.h-100.p-3
                        p.mb-0 <b>Automatización de procesos</b> en áreas donde se pueda disminuir el costo de mano de obra sin afectar la producción.
                    .col-lg-4.mb-3.mb-lg-0
                      div.bg-color-white.h-100.p-3
                        p.mb-0 <b>Revisión de proveedores</b> para negociar mejores condiciones de compra.
                  li.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-8
                    p.mb-0 Además, los <b>gastos operativos representan el 25% de las ventas</b>, por lo que se sugiere evaluar estrategias para reducir costos administrativos sin afectar la operación. 
              .col-lg-4(data-aos="zoom-in").order-lg-1
                img.img-fluid(src='@/assets/curso/tema1/26.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    p.mb-4 El análisis vertical proporciona una visión clara de la estructura financiera de la empresa, facilitando la toma de decisiones estratégicas para optimizar costos y mejorar la rentabilidad.

    .titulo-figura.mb-4
      h5 Figura 2.
      span Gráfico de distribución de costos en el estado de resultados
    .row.justify-content-center.align-items-center.mb-5.bg-color-9.p-5
      .col-lg-6
        figure
          img(src="@/assets/curso/tema1/27.png", data-aos="zoom-in")
    
    .bg-full-width.bg-color-1.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/18.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 <b>Distribución de costos en el estado de resultados:</b> representa en un gráfico de pastel cómo se distribuyen los costos de ventas, gastos operativos y utilidad neta dentro de los ingresos totales.

    #t_1_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.4] Comparación entre el Análisis Horizontal y Vertical
    
    p.mb-4 Ambos métodos de análisis financiero ofrecen perspectivas diferentes pero complementarias sobre la situación económica de una empresa.

    .titulo-figura.mb-4
      h5 Tabla 3.
      span Diferencias claves
    
    .tabla-a.color-acento-botones.mb-5
      table.text-center
        thead
          tr
            th.bg-color-3.text-center Característica
            th.bg-color-3.text-center Análisis Horizontal 
            th.bg-color-3.text-center Análisis Vertical
        tbody
          tr
            td.text-bold Objetivo
            td Analizar la evolución financiera en el tiempo.
            td Evaluar la estructura de los estados financieros en un solo período.
          tr
            td.text-bold Comparación
            td Se comparan cifras de diferentes períodos.
            td Se expresan partidas como porcentaje de una cifra base.
          tr
            td.text-bold Ejemplo de Uso
            td Evaluar el crecimiento de ingresos y costos en los últimos años.
            td Identificar qué proporción de las ventas netas representa cada costo y gasto.
    
    .bg-full-width.bg-color-5.mb-4
      .px-4.px-md-5.pb-md-3
        h2(data-aos="fade-left") Uso estratégico del análisis financiero en la gerencia
        p.mb-5 El análisis horizontal y vertical de los estados financieros es una herramienta clave para la toma de decisiones estratégicas en la gerencia financiera. Su correcta aplicación permite a los directivos:
        
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/28.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Análisis horizontal
                p.mb-0 Identifica tendencias a lo largo del tiempo, facilitando decisiones sobre expansión, reducción de costos o inversiones futuras.
          .col-lg-6.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/29.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Análisis vertical	
                p.mb-0 Evalúa la eficiencia operativa en un período específico, detectando áreas de alto costo que requieren optimización.
    
    p.mb-4 Beneficios del análisis financiero en la gerencia: 
          
    .bg-full-width.bg-color-2.mb-3.px-5.pt-5.mb-5
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0.order-lg-2
                ul.lista-ul--color
                  li.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-8
                    p.mb-0 <b>Identificación de tendencias financieras</b> que afectan la rentabilidad y sostenibilidad de la empresa.
                  li.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-8
                    p.mb-0 <b>Evaluación de la eficiencia operativa</b> mediante un análisis detallado de costos y gastos.
                  li.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-8
                    p.mb-0 <b>Implementación de estrategias de optimización</b> para mejorar los márgenes de ganancia y la competitividad en el mercado.
            
              .col-lg-4(data-aos="zoom-in").order-lg-1
                img.img-fluid(src='@/assets/curso/tema1/30.png', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    p.mb-4 El uso estratégico del análisis financiero permite a las empresas mejorar su gestión, tomar decisiones informadas y fortalecer su posición en el mercado.
        
    .titulo-figura.mb-4
      h5 Figura 3.
      span Gráfico Comparativo de Resultados Antes y Después de la Implementación de Estrategias
    .row.justify-content-center.align-items-center.mb-5.bg-color-9.p-5
      .col-lg-6
        figure
          img(src="@/assets/curso/tema1/31.png", data-aos="zoom-in")

    p.mb-4 <b>Comparación de resultados antes y después de la implementación de estrategias:</b> presenta un análisis de cómo la reducción de costos y la optimización operativa afectan la estructura financiera de la empresa, aumentando la utilidad neta. El uso de estas herramientas financieras proporciona una base sólida para la planificación y ejecución de estrategias orientadas a la <b>optimización de costos, maximización de beneficios y sostenibilidad financiera a largo plazo.</b>

    .bg-full-width.bg-color-3.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Interpretación de indicadores de liquidez, rentabilidad y solvencia
            p.mb-4(data-aos="fade-right") Los invitamos a leer el documento <b>Interpretación de indicadores de liquidez, rentabilidad y solvencia</b>, donde se detallan herramientas esenciales para evaluar la salud financiera de una empresa. A través de casos prácticos y ejemplos gerenciales, este documento le permitirá comprender cómo analizar la capacidad de una organización para cumplir con sus obligaciones, generar utilidades y mantener una estructura financiera sólida.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Interpretación de indicadores de liquidez, rentabilidad y solvencia.
    
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/32.png', alt='')


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.bbvaspark.com/contenido/es/noticias/analisis-financiero-empresarial" target="_blank" rel="noopener noreferrer") BBVA Spark. (2024). Análisis financiero empresarial: ¿para qué sirve?. BBVA.  

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://bmfschool.com/2024/06/26/analisis-economico-y-financiero" target="_blank" rel="noopener noreferrer") BMF Business School. (2024). Análisis económico y financiero: herramientas y técnicas. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.ineaf.es/tribuna/analisis-vertical-y-horizontal-de-los-estados-financieros-parte-i/" target="_blank" rel="noopener noreferrer") INEAF Business School. (2019). Análisis vertical y horizontal de los Estados Financieros. Parte I. .

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=9HhyRtNxPNA " target="_blank" rel="noopener noreferrer") Mis Finanzas U. (2020, 28 de agosto). Herramientas del diagnóstico financiero en excel. [Archivo de video] YouTube. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
