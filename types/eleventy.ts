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

  styles: string[]

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

/*
Blog Types

We need a type to represent a the blogoverview, (a spezialisation of mainpage that contains blogentries)

Blogentries are a spezialisation of mainpage with

header, date, content (some markdown), tags, language and more

The idea for the structure is

blog.11ty.tsx in src

which has blogtool.txt from components (lit component that uses blog entries for searching etc)

and a lot of blogentries
*/

export interface BlogEntry {
  title: string
  url: string
  author: string
  tags: string[]
  date: Date
  image: string
  language: 'DA' | 'EN' | 'DE'
  description: string
  highlight: boolean
}
export interface BlogEntriesOverview extends MainPage {
  collections: {
    all: PageData[]
    posts: BlogEntry[]
    // allow other collections whose members are plain serializable arrays
    [key: string]: any[]
  }
}




