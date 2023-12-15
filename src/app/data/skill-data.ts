import { SkillSet } from '../interfaces/skill-set';

export const SKILLS: SkillSet[] = [
  {
    id: 1,
    type: 'Informáticas',
    title: 'Programación y desarrollo web',
    description:
      'Gracias a los cursos del Ministerio de Desarrollo y mi capacidad para buscar información y resolver problemas, aprendí en poco tiempo lo necesario para ser un desarrollador Full Stack Jr. El ámbito que más me interesa dentro de este mundo es el de desarrollo Frontend.',
    tools: [
      'HTML 5',
      'CSS / SCSS / SASS',
      'JavaScript (ES6+)',
      'TypeScript',
      'Ruby',
      'Angular',
    ],
  },
  {
    id: 2,
    type: 'Creativas',
    title: 'Arquitectura y diseño industrial',
    description:
      'Desde muy joven me interesó el funcionamiento interno de las cosas, y desde siempre tengo un perfil creativo que me gusta alimentar. Mis estudios académicos me dieron habilidades para llevar adelante distintos tipos de proyectos de diseño. Estas son las herramientas que más conozco.',
    tools: ['Photoshop', 'Revit', 'AutoCAD', 'Fusion 360', 'SketchUp', 'V-Ray'],
  },
  {
    id: 3,
    type: 'Laborales',
    title: 'Trabajo y toma de decisiones',
    description:
      'Mis experiencias laborales en distintos ámbitos y la participación en numerosos proyectos académicos me han permitido desarrollar muchas habilidades de trabajo. Descubrí que tengo una tendencia al liderazgo y disfruto del trabajo en equipo comprometido y participativo.',
    tools: ['Liderazgo', 'Iniciativa', 'Compromiso'],
  },
];
