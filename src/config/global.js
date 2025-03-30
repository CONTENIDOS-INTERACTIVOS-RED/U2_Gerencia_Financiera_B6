export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Análisis financiero y aplicación de indicadores',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Herramientas de análisis financiero',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Concepto y objetivos de la gerencia financiera',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Análisis horizontal y vertical de los estados financieros',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Análisis vertical',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Comparación entre el Análisis Horizontal y Vertical',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Indicadores claves en la evaluación financiera',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Clasificación y utilidad de los indicadores financieros',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Aplicación de indicadores en la toma de decisiones estratégicas ',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Relación entre indicadores financieros y sostenibilidad empresarial ',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Título tema',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Subtítulo tema',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Subtítulo tema',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'González, M. Guzmán Vásquez, A. & Trujillo Dávila, M. A. (2020). Gerencia financiera basada en valor: hacia un proceso sistemático para la toma de decisiones financieras: (1 ed.). Colegio de Estudios Superiores de Administración - CESA. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/222487',
    },
    {
      referencia:
        'Encalada Encarnación, V. R. (2023). La gerencia y la empresa: desafíos y oportunidades: con enfoque de las Normas Internacionales de Información Financiera: (1 ed.). Editorial Universidad del Rosario. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/248674 ',
    },
    {
      referencia:
        'Muñoz Cabanes, E. & Ruíz Pelayo, P. (2020). Gestión financiera: (1 ed.). Macmillan Iberia, S.A. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/267817',
    },
    {
      referencia:
        'Tapia Iturriaga, C. K. & Jiménez Sierra, J. A. (2020). Cómo construir tu libertad financiera: ( ed.). Instituto Mexicano de Contadores Públicos. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/130925 ',
    },
    {
      referencia:
        'Sánchez Morales, F. (2024). Fundamentos de contabilidad financiera: (1 ed.). Editorial Universitaria de Chile. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/271541',
    },
  ],
  glosario: [
    {
      termino: 'Activo',
      significado:
        'recurso económico que posee una empresa y que tiene valor, como efectivo, propiedades o inventarios.',
    },
    {
      termino: 'Análisis de rentabilidad',
      significado:
        'evaluación de la eficiencia de una empresa para generar ganancias en relación con sus ventas, activos o patrimonio.',
    },
    {
      termino: 'Análisis vertical',
      significado:
        'método de análisis financiero que compara las partidas de un estado financiero como un porcentaje de una cifra base (por ejemplo, las ventas netas o el total de activos).',
    },
    {
      termino: 'Balance general',
      significado:
        'estado financiero que muestra los activos, pasivos y el patrimonio de la empresa en un momento específico.',
    },
    {
      termino: 'Capital de trabajo:',
      significado:
        'diferencia entre los activos corrientes y los pasivos corrientes, que indica la liquidez a corto plazo de la empresa.',
    },
    {
      termino: 'Costos fijos:',
      significado:
        'costos que permanecen constantes independientemente del nivel de producción o ventas de la empresa, como el alquiler o los salarios.',
    },
    {
      termino: 'Costos variables',
      significado:
        'costos que cambian proporcionalmente con el volumen de producción o ventas, como las materias primas.',
    },
    {
      termino: 'Deuda a largo plazo:',
      significado:
        'pasivo que se debe pagar en un período superior a un año, como préstamos o bonos.',
    },
    {
      termino: 'Diversificación',
      significado:
        'estrategia de inversión que implica expandir el alcance de la empresa a nuevas áreas o productos para reducir el riesgo',
    },
    {
      termino: 'Eficiencia operativa',
      significado:
        'capacidad de una empresa para utilizar sus recursos de manera efectiva en la producción de bienes o servicios.',
    },
    {
      termino: 'Flujo de efectivo',
      significado:
        'movimientos de dinero dentro y fuera de la empresa, esencial para evaluar su capacidad para cubrir gastos y financiar operaciones.',
    },
    {
      termino: 'Indicador de liquidez',
      significado:
        'ratio financiera que mide la capacidad de una empresa para cumplir con sus obligaciones a corto plazo.',
    },
    {
      termino: 'Indicador de rentabilidad',
      significado:
        'mide la capacidad de una empresa para generar ganancias en relación con sus ventas, activos o capital invertido.',
    },
    {
      termino: 'Índice de endeudamiento',
      significado:
        'proporción de los activos de una empresa que están financiados mediante deuda, lo que indica su nivel de apalancamiento financiero.',
    },
    {
      termino: 'Inventario',
      significado:
        'bienes o productos almacenados para ser vendidos o utilizados en el proceso de producción.',
    },
    {
      termino: 'Liquidez',
      significado:
        'capacidad de la empresa para cumplir con sus obligaciones a corto plazo sin afectar su operación.',
    },
    {
      termino: 'Margen de utilidad neta',
      significado:
        'porcentaje de las ventas netas que se convierte en ganancia después de deducir todos los costos y gastos operativos.',
    },
    {
      termino: 'Rentabilidad sobre el Patrimonio (ROE)',
      significado:
        'ratio que mide la rentabilidad de la empresa en relación con el capital invertido por sus accionistas.',
    },
    {
      termino: 'Sostenibilidad financiera',
      significado:
        'capacidad de una empresa para generar suficientes ingresos para cubrir sus costos operativos, deudas y seguir creciendo a largo plazo.',
    },
    {
      termino: 'Valor contable por acción',
      significado:
        'monto que representa el valor neto de la empresa dividido por el número de acciones en circulación, utilizado para valorar una acción según sus activos.',
    },
  ],
}
