import { html, unsafeStatic } from 'lit/static-html.js'
import type { Profile } from '../../../../types/eleventy.js'

export default (profile: Profile ) => {

  const iconPath = unsafeStatic('/icons.svg')
  return html`
    <section class="maf-cv-section">
      <h2 class="maf-cv-section-title">Profile</h2>
      <div class="maf-cv-entry maf-cv-entry-float">
        <p> 
          <svg width="20" height="20">
            <use href="${iconPath}#user"></use>
          </svg>  
          ${profile.name} 
        </p> 
        <p>
          <svg width="20" height="20">
            <use href="${iconPath}#email"></use>
          </svg>  
          ${profile.email}
        </p>
        <p>
          <svg width="20" height="20">
            <use href="${iconPath}#phone"></use>
          </svg>   ${profile.phone} 
        </p> 
        <p>
          <svg width="20" height="20">
            <use href="${iconPath}#location"></use>
          </svg>   
          ${profile.location} 
        </p>
        ${profile.links.map(link => html`
          <a href="${link.url}">
           <svg width="20" height="20">
            <use href="${iconPath}#${link.icon}"></use>
           </svg> 
           ${link.name}
          </a>
        `
        )}
      </div>
    </section>

  `
}