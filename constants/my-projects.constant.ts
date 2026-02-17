import izapay2 from 'public/izapay2.png';
import izatecplay from 'public/izatecplay.png';
import type { CardProjectProps } from '../components/projects/Card.vue';

export const MyProjects: CardProjectProps[] = [
    {
        name: 'IzaPlay',
        descriptionKey: 'projects.izaplay.description',
        externalUrl: 'https://izaplay.com.br',
        image: izatecplay,
        stacks: [
            { name: 'Nuxt', color: 'green' },
            { name: 'Nuxt UI', color: 'green' },
            { name: 'Tailwind CSS', color: 'blue' },
            { name: 'TypeScript', color: 'blue' },
            { name: 'SSR', color: 'gray' },
        ],
    },
    {
        name: 'IzaPay',
        descriptionKey: 'projects.izapay.description',
        externalUrl: 'https://izapay.com.br',
        github: 'https://github.com/izatecbr/org-izatec-pay-web',
        image: izapay2,
        stacks: [
            { name: 'Vue.js', color: 'green' },
            { name: 'Shadcn UI', color: 'gray' },
            { name: 'Spring Boot', color: 'green' },
            { name: 'Java', color: 'red' },
            { name: 'PostgreSQL', color: 'blue' },
        ],
    },
];