import { html } from 'lit/static-html.js'
import type { Skill } from '../../../../types/eleventy.js'

export default (skills: Skill[]) => {
  const technicalSkills = skills.filter(s => s.category !== 'Spoken Languages')
  const languageSkills = skills.filter(s => s.category === 'Spoken Languages')
  
  return html`
    <section class="maf-cv-section">
      <h2 class="maf-cv-section-title">Technical Skills</h2>
      <div class="maf-cv-entry">
        ${technicalSkills.map(skill => html`
          <div class="maf-cv-skill-row">
            <strong>${skill.category}:</strong> ${skill.items.join(', ')}
          </div>
        `)}
      </div>
    </section>

    ${languageSkills.length > 0 ? html`
      <section class="maf-cv-section">
        <h2 class="maf-cv-section-title">Language Proficiencies</h2>
        <div class="maf-cv-section">
          <p class="text-orange">${languageSkills[0].items.join(', ')}</p>
        </div>
      </section>
    ` : ''}
  `
}