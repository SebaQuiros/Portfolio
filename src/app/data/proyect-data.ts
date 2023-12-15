import { Proyect } from '../interfaces/proyect';

export const PROYECTS: Proyect[] = [
  {
    id: 1,
    type: 'Proyecto de Arquitectura',
    link: 'https://www.behance.net/gallery/62157555/PROYECTO-Escuela-nautica-en-Puerto-de-Olivos',
    title: 'Escuela náutica en Puerto de Olivos',
    description:
      'Este proyecto arquitectónico es un edificio implantado junto al Río de la Plata. El programa incluye la escuela, un bar y una sala de exposiciones.',
    tools: ['AutoCAD', 'SketchUp', 'Photoshop'],
    img: 'https://user-images.githubusercontent.com/61209612/183125839-17285953-09a4-4214-86e5-7a0a6a165807.jpg',
    imgAlt: 'Corte arquitectónico del proyecto.',
  },
  {
    id: 2,
    type: 'Proyecto de Diseño Industrial',
    link: 'https://www.behance.net/gallery/143944709/PROYECTO-Biomateriales',
    title: 'Producto descartable biodegradable',
    description:
      'Para este proyecto final tuve que diseñar primero un biomaterial y segundo un producto descartable que permita comer de pie.',
    tools: ['Biomateriales', 'Photoshop'],
    img: 'https://user-images.githubusercontent.com/61209612/183125794-b10d23f1-1ee3-4864-a19d-976ee5b0429e.jpg',
    imgAlt: 'Producto biodegradabke hecho a base de alcaucil.',
  },
  {
    id: 3,
    type: 'Trabajos',
    link: 'https://www.behance.net/gallery/85577341/TRABAJO-Ejemplos-de-renders',
    title: 'Renders profesionales',
    description:
      'Me desarrollé laboralmente haciendo renders arquitectónicos. Estos son algunos ejemplos de trabajos realizados.',
    tools: ['SketchUp', 'V-Ray', 'Photoshop'],
    img: 'https://user-images.githubusercontent.com/61209612/183125744-9029c6fd-5536-4a76-b3fb-378375163ad8.png',
    imgAlt:
      'Render de una sala de reuniones de oficina con equipamiento de madera y vidrio.',
  },
  {
    id: 4,
    type: 'Emprendimiento',
    link: 'https://www.instagram.com/plan.3d/',
    title: 'Plan 3D',
    description:
      'Mi emprendimiento personal de impresión 3D. Hago productos, como lámparas de planetas o un Tateti especial, y diseños a pedido como organizadores de juegos de mesa.',
    tools: ['Fusion 360', 'PrusaSlicer', 'Impresión 3D'],
    img: 'https://user-images.githubusercontent.com/61209612/183125020-1320c52e-a789-4ee8-8a1b-99ad9fda7bcb.jpg',
    imgAlt: 'Lunas de Plan 3D.',
  },
];
