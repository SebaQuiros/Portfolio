import { SkillSet } from './interfaces/skill-set';

export const SKILLS: SkillSet[] = [
  {
    id: 1,
    type: 'Informáticas',
    title: 'Programación y desarrollo',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptas corporis nemo quas illo.',
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
    title: 'Arquitectura y Diseño',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptas corporis nemo quas illo.',
    tools: ['HTML 5', 'CSS / SCSS / SASS', 'JavaScript (ES6+)'],
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
