import { Proyect } from './interfaces/proyect';

export const PROYECTS: Proyect[] = [
  {
    id: 1,
    type: 'Emprendimiento',
    link: 'https://www.instagram.com/plan.3d/',
    title: 'Plan 3D',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur tempora aliquid.',
    tools: ['Fusion 360', 'PrusaSlicer'],
    img: '../assets/img/proyects/plan 3d.jpg',
    imgAlt: 'Lunas de Plan 3D.',
  },
  {
    id: 2,
    type: 'Trabajos',
    link: 'https://www.behance.net/gallery/85577341/TRABAJO-Ejemplos-de-renders',
    title: 'Renders profesionales',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur tempora aliquid.',
    tools: ['SketchUp', 'V-Ray', 'Photoshop'],
    img: '../assets/img/proyects/renders.png',
    imgAlt:
      'Render de una sala de reuniones de oficina con equipamiento de madera y vidrio.',
  },
  {
    id: 3,
    type: 'Proyecto de Diseño Industrial',
    link: 'https://www.behance.net/gallery/143944709/PROYECTO-Biomateriales',
    title: 'Producto descartable biodegradable',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur tempora aliquid.',
    tools: ['Biomateriales', 'Photoshop'],
    img: '../assets/img/proyects/conoflex.jpg',
    imgAlt: 'Lunas de Plan 3D',
  },
  {
    id: 4,
    type: 'Proyecto de Arquitectura',
    link: 'https://www.behance.net/gallery/62157555/PROYECTO-Escuela-nautica-en-Puerto-de-Olivos',
    title: 'Escuela náutica en Puerto de Olivos',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur tempora aliquid.',
    tools: ['AutoCAD', 'SketchUp', 'Photoshop'],
    img: '../assets/img/proyects/escuela en puerto de olivos.jpg',
    imgAlt: 'Corte arquitectónico del proyecto.',
  },
];
