import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Ajay Pratap Singh',
  lang: 'en',
  description: 'Ajay Pratap Singh Portfolio', 
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Ajay Pratap Singh',
  subtitle: 'Python Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://ajay9411.github.io/test/', 
};

// PROJECTS DATA
export const projectsData = [
  
  {
    id: nanoid(),
    img: 'project.png',
    title: 'Fake Profile Detection',
    info: 'Developed a Machine learning model which detect fake user profile on social media platform.',
    info2: '',
    url: 'https://ajay9411.github.io/fakeprofileweb/index.html',
    repo: 'https://github.com/ajay9411/fakeprofileweb', 
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'MEDDON',
    info: 'Developed a website to donate un-used medicines directly to trust, Orphanage, old age home, NGOs.',
    info2: '',
    url: 'https://ajay9411.github.io/test/',
    repo: 'https://ajay9411.github.io/test/', 
  },
  {
    id: nanoid(),
    img: 'project1.png',
    title: 'Portfolio',
    info: 'Own portfolio',
    info2: '',
    url: 'https://ajay9411.github.io/test/',
    repo: 'https://ajay9411.github.io/test/', 
  }
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'pratap9411@gmail\.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ajay9411/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/ajay9411',
    },
  ],
};


