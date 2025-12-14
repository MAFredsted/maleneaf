export interface SiteData {
  title: string
  description: string
}

export interface NavigationItem {
  key: string
  order: number
}

export interface PageData {
  url: string
  data: {
    title: string
    eleventyNavigation?: NavigationItem
    [key: string]: any
  }
}


/* Work Experience section */

export interface Project {
  id: string
  name: string
  description: string
  role?: string
  technologies?: string[]
  link?: string
}

export interface WorkExperience {
  id: string
  company: string
  position: string
  location: string
  startDate: Date
  endDate: Date | 'Present'
  description: string
  responsibilities?: string[]
  technologies?: string[]
  achievements?: string[]
  projects?: Project[]
}

export interface Education {
  id: string
  institution: string
  degree: string
  title: string
  location: string
  startDate: Date
  endDate: Date
  description?: string
  projects: Project[]
}

export interface Skill {
  category: string
  items: string[]
}

export interface Link {
  name: string
  url: string
  icon: string
}

export interface Profile {
  name: string
  title: string
  email: string
  phone: string
  location: string
  summary: string
  links: Link[]
}


/* pages */

export interface MainPage {
  // Page-specific data
  title: string
  content: string
  layout?: string
  
  // Site-wide data
  site: SiteData
  
  // Page metadata
  page: {
    url: string
    date: Date
    inputPath: string
    outputPath: string
  }
  
  // Collections
  collections: {
    all: PageData[]
    [key: string]: PageData[]
  }
  
  // Allow additional properties
  [key: string]: any
}


export interface WorkExperiencePageData extends MainPage {
  cv: {
    profile: Profile
    workExperience: WorkExperience[]
    education: Education[]
    skills: Skill[]
  }
}