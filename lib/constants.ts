interface Skill {
  name: string;
  icon: string;
}

interface Role {
  title: string;
  period: string;
  achievements: string;
  skills: Skill[];
}

interface Experience {
  company: string;
  logo: string;
  companyInfo: string;
  location: string;
  roles: Role[];
}

export const experienceData: Experience[] = [
  {
    company: 'Apollo.io',
    logo: '',
    companyInfo: 'Full-time',
    location: 'San Francisco, CA (Remote)',
    roles: [
      {
        title: 'Senior Frontend Engineer',
        period: 'JUN 2023 - PRESENT',
        achievements:
          'At Apollo.io, I contributed as a Senior Frontend Engineer to the design and development of key features within the data enrichment ecosystem, driving improvements in product adoption, automation, and user experience. I played a central role in enhancing the Chrome Extension and CRM integration workflows, building scalable frontend systems, and strengthening internal tooling to streamline development processes. I also worked closely with product and design teams to deliver impactful user-facing features while ensuring high standards of code quality and test coverage across the platform.',
        skills: [
          { name: 'React', icon: '/skill_icons/react.svg' },
          { name: 'TypeScript', icon: '/skill_icons/typescript.svg' },
          { name: 'Next.js', icon: '/skill_icons/next.js.svg' },
          { name: 'Vitest', icon: '/skill_icons/vite.svg' },
          { name: 'Chrome Extension', icon: '/skill_icons/extensions.svg' },
          { name: 'ESLint', icon: '/skill_icons/eslint.svg' },
          { name: 'Storybook', icon: '/skill_icons/storybook.svg' },
          { name: 'Cypress', icon: '/skill_icons/cypress.png' },
        ],
      },
    ],
  },
  {
    company: 'Treebo Hotels',
    logo: '',
    companyInfo: 'Full-time',
    location: 'Bangalore, India (Remote)',
    roles: [
      {
        title: 'Senior Frontend Engineer',
        period: 'MAR 2022 - FEB 2023',
        achievements:
          "At Treebo Hotels, I led several front-end initiatives aimed at improving the user experience and performance across both B2C and B2B platforms. I worked extensively on the hotel listing page, revamping its interface with modular, reusable components and optimizing mobile responsiveness. On the B2B side, I contributed to Hotel Superhero, the company's property management system, where I implemented internationalization (i18n) to support multi-language functionality. These efforts resulted in significant enhancements in usability, accessibility, and overall frontend performance.",
        skills: [
          { name: 'React', icon: '/skill_icons/react.svg' },
          { name: 'JavaScript', icon: '/skill_icons/javascript.svg' },
          { name: 'GraphQL', icon: '/skill_icons/graphql.svg' },
          { name: 'Responsive Design', icon: '/skill_icons/css.svg' },
          { name: 'i18n', icon: '/skill_icons/terminal.svg' },
          { name: 'Webpack', icon: '/skill_icons/webpack.svg' },
          { name: 'Jest', icon: '/skill_icons/jest.svg' },
          { name: 'ESLint', icon: '/skill_icons/eslint.svg' },
        ],
      },
    ],
  },
  {
    company: 'Yapsody India Pvt. Ltd.',
    logo: '',
    companyInfo: 'Full-time',
    location: 'Mumbai, India',
    roles: [
      {
        title: 'Senior Software Developer',
        period: 'MAY 2019 - MAR 2022',
        achievements:
          'At Yapsody, I led the development of version 2.0 of the ticketing platform, where I was responsible for the front-end architecture, planning, and delivery of multiple features. This included building scalable modules such as user role and permission management, as well as developing a dynamic email marketing tool with a GUI-based template editor. I also created a design system to ensure consistency and improve collaboration across the engineering and design teams, contributing to a more maintainable and efficient UI development process.',
        skills: [
          { name: 'React.js', icon: '/skill_icons/react.svg' },
          { name: 'JavaScript', icon: '/skill_icons/javascript.svg' },
          { name: 'Next.js', icon: '/skill_icons/next.js.svg' },
          { name: 'Design Systems', icon: '/skill_icons/figma.svg' },
          { name: 'Email Marketing', icon: '/skill_icons/notion.svg' },
          { name: 'Frontend Architecture', icon: '/skill_icons/webpack.svg' },
          { name: 'User Permissions', icon: '/skill_icons/git.svg' },
          { name: 'Storybook', icon: '/skill_icons/storybook.svg' },
        ],
      },
    ],
  },
  {
    company: 'Maniar Technologies Pvt. Ltd.',
    logo: '',
    companyInfo: 'Full-time',
    location: 'Mumbai, India',
    roles: [
      {
        title: 'Software Developer',
        period: 'JUL 2017 - APR 2019',
        achievements:
          'As a founding frontend developer at Maniar Technologies, I played a key role in building and launching Tallery Gallery, an asset management platform developed using React.js. I also led the development of its cross-platform mobile application using React Native, ensuring a consistent user experience across devices. In addition to Tallery Gallery, I contributed to various other projects using jQuery, and built custom, reusable UI components while optimizing performance and SEO for web applications. My work helped establish the foundation for scalable frontend development practices at the company.',
        skills: [
          { name: 'React.js & React Native', icon: '/skill_icons/react.svg' },
          { name: 'jQuery', icon: '/skill_icons/jquery.svg' },
          { name: 'Responsive Design', icon: '/skill_icons/css.svg' },
          { name: 'Asset Management', icon: '/skill_icons/figma.svg' },
          { name: 'SASS', icon: '/skill_icons/sass.svg' },
          { name: 'Storybook', icon: '/skill_icons/storybook.svg' },
        ],
      },
    ],
  },
];

interface SkillItem {
  name: string;
  icon: string;
}

interface SkillColumn {
  delay: string;
  skills: SkillItem[];
}

export const skillColumns: SkillColumn[] = [
  {
    delay: 'delay-100',
    skills: [
      {
        name: 'JavaScript',
        icon: '/skill_icons/javascript.svg',
      },
      {
        name: 'TypeScript',
        icon: '/skill_icons/typescript.svg',
      },
      {
        name: 'HTML',
        icon: '/skill_icons/html.svg',
      },
      {
        name: 'React',
        icon: '/skill_icons/react.svg',
      },
      {
        name: 'Next.js',
        icon: '/skill_icons/next.js.svg',
      },
      {
        name: 'CSS',
        icon: '/skill_icons/css.svg',
      },
      {
        name: 'Jira',
        icon: '/skill_icons/jira.svg',
      },
    ],
  },
  {
    delay: 'delay-200',
    skills: [
      {
        name: 'Tailwind',
        icon: '/skill_icons/tailwind.svg',
      },
      {
        name: 'NPM',
        icon: '/skill_icons/npm.svg',
      },
      {
        name: 'Jest',
        icon: '/skill_icons/jest.svg',
      },
      {
        name: 'Redux',
        icon: '/skill_icons/redux.svg',
      },
      {
        name: 'React Native',
        icon: '/skill_icons/react-native.svg',
      },
      {
        name: 'GraphQL',
        icon: '/skill_icons/graphql.svg',
      },
      {
        name: 'Figma',
        icon: '/skill_icons/figma.svg',
      },
    ],
  },
  {
    delay: 'delay-300',
    skills: [
      {
        name: 'Node.js',
        icon: '/skill_icons/node.js.svg',
      },
      {
        name: 'jQuery',
        icon: '/skill_icons/jquery.svg',
      },
      {
        name: 'GraphQL',
        icon: '/skill_icons/graphql.svg',
      },
      {
        name: 'SASS',
        icon: '/skill_icons/sass.svg',
      },
      {
        name: 'Extensions',
        icon: '/skill_icons/extensions.svg',
      },
      {
        name: 'Storybook',
        icon: '/skill_icons/storybook.svg',
      },
      {
        name: 'Notion',
        icon: '/skill_icons/notion.svg',
      },
    ],
  },
  {
    delay: 'delay-400',
    skills: [
      {
        name: 'Git',
        icon: '/skill_icons/git.svg',
      },
      {
        name: 'GitHub',
        icon: '/skill_icons/github.svg',
      },
      {
        name: 'GitLab',
        icon: '/skill_icons/gitlab.svg',
      },
      {
        name: 'Linux',
        icon: '/skill_icons/linux.svg',
      },
      {
        name: 'Ubuntu',
        icon: '/skill_icons/ubuntu.svg',
      },
      {
        name: 'Apple',
        icon: '/skill_icons/apple.svg',
      },
      {
        name: 'Terminal',
        icon: '/skill_icons/terminal.svg',
      },
    ],
  },
  {
    delay: 'delay-500',
    skills: [
      {
        name: 'Slack',
        icon: '/skill_icons/slack.svg',
      },
      {
        name: 'Cursor',
        icon: '/skill_icons/cursor.svg',
      },
      {
        name: 'Webpack',
        icon: '/skill_icons/webpack.svg',
      },
      {
        name: 'Vite',
        icon: '/skill_icons/vite.svg',
      },
      {
        name: 'Cypress',
        icon: '/skill_icons/cypress.png',
      },
      {
        name: 'ESLint',
        icon: '/skill_icons/eslint.svg',
      },
      {
        name: 'VS Code',
        icon: '/skill_icons/vs-code.svg',
      },
    ],
  },
];
