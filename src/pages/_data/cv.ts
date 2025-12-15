import type { WorkExperience, Education, Skill, Profile, Project } from '../../../types/eleventy.js'

const profile: Profile = {
  name: 'Malene Andrä-Fredsted',
  title: 'M.Sc. in Software Design',
  email: 'Andra_Fredsted@proton.me',
  phone: '+45 42 52 31 57',
  location: 'Valby, Copenhagen',
  summary: 'I am a curious and motivated developer about to finish my Masters Degree at ITU in Software Design in January with practical experience in fullstack application development from my job as a student developer at the Danish Agency for Climate Data (KDS). During my studies, I have built a foundation in computer science and participated in multiple projects building fullstack applications for domains such as the Web and IoT in Javascript, Java, C/C++, which have been built and deployed using CI/CD pipelines and hosted in Linux environments with docker swarm. At work, I have applied my skills for developing user oriented web apps with frontends written in Vue.js, backends in Java Springboot and CI/CD pipelines in Jenkins. I enjoy working in small teams and learning by delving into the technical details of a project, discussing design decisions and implementation details along the way, before deciding on a sound, scalable and user oriented solution.',
  links: [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/andreas-andrä-fredsted-338bb6150', icon: 'linkedin' },
    { name: 'GitHub', url: 'https://github.com/MAFredsted', icon: 'github' }
  ]
}

const kdsProjects: Project[] = [
  {
    id: 'dataforsyningen',
    name: 'Dataforsyningen',
    description: 'Search and access all open geospatial data made available by KDS',
    link: 'https://dataforsyningen.dk/'
  },
  {
    id: 'historical-maps',
    name: 'Historical Maps',
    description: 'Search, display and download Historical maps of Denmark dating back to the 1500\'s',
    link: 'https://historiskekort.dk/'
  },
  {
    id: 'hip',
    name: 'Hydrological Index and Forecast System',
    description: 'Access, visualize and analyze hydological forecasts for Denmark',
    link: 'https://hip.dataforsyningen.dk/'
  },
  {
    id: 'coordinate-transformation',
    name: 'Coordinate Transformation',
    description: 'Coordinate system transformation tool used for internal projects',
    link: 'https://koordinattransformation.dk/Denmark'
  },
  {
    id: 'dawa',
    name: 'DAWA (Danish Address Web API)',
    description: 'Backend service providing access to danish adresses through REST-API',
    link: 'https://dawadocs.dataforsyningen.dk/'
  }
]

const workExperience: WorkExperience[] = [
  {
    id: 'kds-student-dev',
    company: 'The Agency for Climate Data (KDS)',
    position: 'Student Developer',
    location: 'Copenhagen, Denmark',
    startDate: new Date('2024-01-01'),
    endDate: 'Present',
    description: 'Feature development and ongoing maintenance of public map and data services',
    responsibilities: [
      'Frontend: Feature development and ongoing maintenance of public map and data services',
      'DevOps: Development and operation of CI/CD pipelines and e2e/unit tests in Jenkins for container-based deploys',
      'Backend & GIS: Maintenance and further development of backend services and databases with focus on geospatial data in PostgreSQL/PostGIS'
    ],
    technologies: ['Vue.js', 'Lit', 'JavaScript', 'TypeScript', 'OpenLayers', 'Jenkins', 'GitHub Actions', 'Docker', 'Docker Swarm', 'Node.js', 'Express', 'PostgreSQL', 'PostGIS', 'SQL', 'ArcGIS Pro'],
    achievements: [
      'Developed and maintained multiple public-facing map services',
      'Implemented CI/CD pipelines for automated testing and deployment',
      'Worked with geospatial data and PostGIS databases'
    ],
    projects: kdsProjects
  },
  {
    id: 'kds-it-support',
    company: 'The Agency for Climate Data (KDS)',
    position: 'Student IT Support, Danish Placename Registry',
    location: 'Copenhagen, Denmark',
    startDate: new Date('2021-01-01'),
    endDate: new Date('2024-01-01'),
    description: 'Provided IT support and assistance for websites and services such as Dataforsyningen, LER and DAWA, and worked on maintaining and expanding the danish place name registry through ArcGIS Pro.',
    responsibilities: []
  }
]

const ituProjects: Project[] = [
  {
    id: 'pchor-analyzer',
    name: 'PchorAnalyzer',
    description: 'Developed a static analysis tool for C++ for verifying asynchronous code using session type theory. Grade: 10',
    role: 'Thesis Project',
    technologies: ['C++', 'Clang/LLVM', 'Static Analysis'],
    link: 'https://github.com/AAFredsted/PChorAnalyzer'
  },
  {
    id: 'muelli',
    name: 'Muelli',
    description: 'System for collecting fill data from smart garbage bins and calculating collection routes for garbage trucks displayed in a web app',
    role: 'Group Project (TUM Exchange)',
    technologies: ['IoT', 'Java', 'C++', 'C', 'Openthreads', 'Edge Computing'],
    link: 'https://github.com/AAFredsted/Muelli-Clone'
  },
  {
    id: 'maxitwit',
    name: 'Maxitwit',
    description: 'Set up a fullstack web app along with containerized infrastructure with Load Balancing, CI/CD, Monitoring and Logging',
    role: 'DevOps Course Project',
    technologies: ['Docker', 'CI/CD', 'PostgreSQL', 'Express.js', 'Pug', 'Prometheus', 'Grafana', 'ELK'],
    link: 'https://github.com/AAFredsted/maxitwit_org'
  }
]

const cbsProjects: Project[] = [
  {
    id: 'energy-market-reform',
    name: 'EU Energy Market Reform Analysis',
    description: 'Econometric analysis of 2023 EU Energy Market Reform. Collected Eurostat data and estimated effects on energy prices using an econometric model in Python. Grade: 12',
    role: 'Bachelor Thesis',
    technologies: ['Python', 'Econometrics', 'System GMM', 'Panel Data'],
    link: 'https://github.com/dazhwu/pydynpd'
  },
  {
    id: 'electricity-forecasting',
    name: 'Electricity Spot Price Forecasting',
    description: 'Work with econometric models such as ARIMA and Exponential Smoothing for forecasts of electricity spot prices in the Danish market',
    role: 'Course Project',
    technologies: ['R', 'ARIMA', 'Forecasting', 'Econometrics', 'Smoothing']
  }
]

const education: Education[] = [
  {
    id: 'itu-msc',
    institution: 'IT University of Copenhagen (ITU)',
    degree: 'M.Sc.',
    title: 'Software Design (Cand.IT. Software Technology and Development)',
    location: 'Copenhagen, Denmark',
    startDate: new Date('2023-09-01'),
    endDate: new Date('2026-01-31'),
    description: 'Master\'s degree in Software Design with focus on advanced programming, DevOps, and software architecture',
    projects: ituProjects
  },
  {
    id: 'cbs-bsc',
    institution: 'Copenhagen Business School (CBS)',
    degree: 'B.Sc.',
    title: 'Business, Language and Culture (German)',
    location: 'Copenhagen, Denmark',
    startDate: new Date('2020-09-01'),
    endDate: new Date('2023-07-31'),
    description: 'Bachelor\'s degree with exchange semesters at UZH & ETH Zurich, including introductory courses in programming and mathematics',
    projects: cbsProjects
  }
]

const skills: Skill[] = [
  {
    category: 'Programming Languages',
    items: ['C++', 'C', 'Java', 'Python', 'JavaScript', 'TypeScript', 'F#', 'R', 'SQL', 'Bash']
  },
  {
    category: 'Frontend Technologies',
    items: ['Vue.js', 'Lit', 'Vite', 'OpenLayers']
  },
  {
    category: 'Backend Technologies',
    items: ['Node.js', 'Express', 'Java Spring Boot', 'PostgreSQL', 'PostGIS']
  },
  {
    category: 'DevOps & Tools',
    items: ['Jenkins', 'GitHub Actions', 'Docker', 'Docker Swarm', 'Git', 'GitHub', 'Prometheus', 'Grafana', 'ELK']
  },
  {
    category: 'Other Technologies',
    items: ['QGIS', 'ArcGIS Pro', 'Clang/LLVM', 'CMake', 'Gradle', 'Maven', '.NET']
  },
  {
    category: 'Spoken Languages',
    items: ['Danish (native)', 'German (C1)', 'English (C2)']
  }
]

// Export as structure matching WorkExperiencePageData.cv
export default {
  profile,
  workExperience,
  education,
  skills
}