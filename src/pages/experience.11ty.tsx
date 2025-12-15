import { html } from 'lit/static-html.js'
import type { WorkExperiencePageData } from '../../types/eleventy.js'
import cvWorkExperience from './_includes/cv/workExperience.11ty.js'
import cvEducation from './_includes/cv/education.js'
import cvSkills from './_includes/cv/skills.js'
import cvProfile from './_includes/cv/profile.js'

export const data = {
  title: 'Professional Profile',
  description: 'vocational and educational experience',
  layout: 'base.11ty.tsx',
  eleventyNavigation: {
    key: 'CV',
    order: 2
  }
}

export default (data: WorkExperiencePageData) => {
  const { workExperience, education, skills, profile } = data.cv
  
  const formatDate = (date: Date | 'Present') => {
    if (date === 'Present') return 'Present'
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
  }
  
  return html`
    <main class="maf-cv-container">
      ${cvProfile(profile)}
      ${cvWorkExperience(workExperience, formatDate)}
      ${cvEducation(education, formatDate)}
      ${cvSkills(skills)}
    </main>
  `
}