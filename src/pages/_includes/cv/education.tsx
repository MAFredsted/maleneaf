import { html } from 'lit/static-html.js'
import type { Education } from '../../../../types/eleventy.js'

export default (education: Education[], formatDate: (date: Date | 'Present') => string) => {
  return html`
    <section class="maf-cv-section">
      <h2 class="maf-cv-section-title">Education</h2>
      ${education.map(edu => html`
        <article class="maf-cv-entry">
          <div class="maf-cv-entry-header">
            <div>
              <h3 class="maf-cv-entry-title">${edu.degree} ${edu.title}</h3>
              <h4 class="maf-cv-entry-subtitle">${edu.institution}</h4>
            </div>
            <p class="maf-cv-entry-meta">
              ${edu.location}<br/>
              ${formatDate(edu.startDate)} - ${formatDate(edu.endDate)}
            </p>
          </div>
          
          ${edu.description ? html`<p class="maf-cv-entry-description">${edu.description}</p>` : ''}
          
          ${edu.projects && edu.projects.length > 0 ? html`
            <ul class="maf-cv-entry-list">
              ${edu.projects.map(project => html`
                <li>
                  <strong>${project.role}:</strong>
                  ${project.description}
                  ${project.link ? html`
                    <a href="${project.link}" target="_blank">${project.name}</a>
                  ` : ''}
                </li>
              `)}
            </ul>
          ` : ''}
        </article>
      `)}
    </section>
  `
}
