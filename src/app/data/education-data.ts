import { Education } from '../interfaces/education';

export const EDUCATIONS: Education[] = [
  {
    id: 4,
    button: 'Arquitectura',
    occupation: 'Carrera de',
    title: 'Arquitectura',
    link: 'https://www.fadu.uba.ar/categoria/49-arquitectura',
    subtitle: 'FADU, Universidad de Buenos Aires',
    duration: '2015 - act.',
    description: [
      'Siempre tuve curiosidad por el funcionamiento interno de las cosas y afinidad con el dibujo',
      'Junto a un docente y otros colegas participamos de un concurso de ideas y ganamos el primer premio.',
    ],
  },
  {
    id: 3,
    button: 'Diseño Industrial',
    occupation: 'Carrera de',
    title: 'Diseño Industrial',
    link: 'https://www.fadu.uba.ar/categoria/53-diseo-industrial',
    subtitle: 'FADU, Universidad de Buenos Aires',
    duration: '2021 - 2022',
    description: [
      "En la cátedra Sanguinetti realicé un organizador de 'objetos nómades', una regadera como objeto háptico, un cover de diseño argentino y creé un biomaterial para un producto biodegradable.",
      'Mi nota final de la cursada fue 10.',
    ],
  },
  {
    id: 2,
    button: 'Inglés',
    occupation: 'Curso avanzado en ',
    title: 'Clover',
    link: 'https://laguia.online/businesses/clover-english-language-centre',
    subtitle: 'Instituto de Inglés',
    duration: '2010 - 2014',
    description: [
      'Terimé con la calificación más alta todos los exámenes anuales.',
      'Mi nota en el First Certificate Exam fue "A".',
    ],
  },
  {
    id: 1,
    button: 'Colegio Secundario',
    occupation: 'Secundario en el',
    title: 'Colegio Marianista',
    link: 'http://sitio.marianista.edu.ar/',
    subtitle: 'Bachiller en Humanidades y Ciencias Sociales',
    duration: '2010 - 2014',
    description: [
      'Tuve muchas experiencias de servicio social en distintos voluntariados: comedor comunitario, acompañamiento en psicopatología del Hospital Piñero, grupo misionero en Río Tala. El más importante para mi fue el de apoyo escolar y acción barrial en Villa Los Piletones, Soldati.',
      'Mi promedio final fue de 8,09',
    ],
  },
];
