import { html } from 'lit/static-html.js'
import type { WorkExperience } from '../../../../types/eleventy.js'

export default (experiences: WorkExperience[], formatDate: (date: Date | 'Present') => string) => {
  return html`
    <section class="maf-cv-section">
      <h2 class="maf-cv-section-title">Professional Experience</h2>
      ${experiences.map(exp => html`
        <article class="maf-cv-entry">
          <div class="maf-cv-entry-header">
            <div>
              <h3 class="maf-cv-entry-title">${exp.position}</h3>
              <h4 class="maf-cv-entry-subtitle">${exp.company}</h4>
            </div>
            <p class="maf-cv-entry-meta">
              ${exp.location} | 
              ${formatDate(exp.startDate)} - 
              ${formatDate(exp.endDate)}
            </p>
          </div>
          
          <p class="maf-cv-entry-description">${exp.description}</p>
          
          ${exp.responsibilities && exp.responsibilities.length > 0 ? html`
            <div>
              <h4 class="maf-cv-entry-list-title">Responsibilities</h4>
              <ul class="maf-cv-entry-list">
                ${exp.responsibilities.map(resp => html`<li>${resp}</li>`)}
              </ul>
            </div>
          ` : ''}

          ${exp.technologies && exp.technologies.length > 0 ? html`
            <div class="maf-cv-entry-tags">
              <strong>Technologies:</strong> ${exp.technologies.join(', ')}
            </div>
          ` : ''}
          
          ${exp.projects && exp.projects.length > 0 ? html`
            <div>
              <h4 class="maf-cv-entry-list-title">Projects</h4>
              <ul class="maf-cv-entry-list">
                ${exp.projects.map(project => html`
                  <li>
                    ${project.link ? html`
                      <a href="${project.link}" target="_blank">${project.name}</a>
                    ` : project.name}
                    - ${project.description}
                  </li>
                `)}
              </ul>
            </div>
          ` : ''}
        </article>
      `)}
    </section>
  `
}