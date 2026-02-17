import type { CardExperienceProps } from "~/components/experience/Card.vue";

export const MyExperiences: CardExperienceProps[] = [
  {
    company: 'SASGP',
    positionKey: 'experiences.sasgp.position',
    dateKey: 'experiences.sasgp.date',
    periodKey: 'experiences.sasgp.period',
    descriptionKey: 'experiences.sasgp.description',
    current: true,
    logo: '/logos/sasgp.jpeg',
    stacks: ['Nuxt', 'Vue', 'Node', 'PostgreSQL', 'UX', 'Arquitetura']
  },
  {
    company: 'Izatec',
    positionKey: 'experiences.izatec.position',
    dateKey: 'experiences.izatec.date',
    periodKey: 'experiences.izatec.period',
    descriptionKey: 'experiences.izatec.description',
    current: true,
    logo: '/logos/izatec.jpeg',
    stacks: ['Nuxt', 'Pinia', 'SSR', 'UI/UX', 'Performance']
  },
  {
    company: 'AML Reputacional',
    positionKey: 'experiences.aml.position',
    dateKey: 'experiences.aml.date',
    periodKey: 'experiences.aml.period',
    descriptionKey: 'experiences.aml.description',
    logo: '/logos/aml.jpeg',
    stacks: ['Vue', 'Nuxt', 'Risk Platform', 'Compliance', 'UI']
  }
]

