import { Education } from '../interfaces/education';

export const EDUCATIONS: Education[] = [
  {
    id: 4,
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
    id: 3,
    button: 'Arquitectura',
    occupation: 'Carrera de',
    title: 'Arquitectura',
    link: 'https://www.fadu.uba.ar/categoria/49-arquitectura',
    subtitle: 'FADU, Universidad de Buenos Aires',
    duration: '2015 - Presente',
    description: ['Item 1', 'Item 2', 'Item 56'],
  },
  {
    id: 2,
    button: 'Inglés',
    occupation: 'Curso avanzado en ',
    title: 'Clover',
    link: 'https://laguia.online/businesses/clover-english-language-centre',
    subtitle: 'Instituto de Inglés',
    duration: '2010 - 2014',
    description: ['Item 1', 'Item 2', 'Item 56'],
  },
  {
    id: 1,
    button: 'Colegio Secundario',
    occupation: 'Secundario en el',
    title: 'Colegio Marianista',
    link: 'http://sitio.marianista.edu.ar/',
    subtitle: 'Bachiller en Humanidades y Ciencias Sociales',
    duration: '2010 - 2014',
    description: ['Promedio de 8,09', 'Item 2', 'Item 56'],
  },
];
