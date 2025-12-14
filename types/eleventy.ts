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

export interface EleventyData {
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