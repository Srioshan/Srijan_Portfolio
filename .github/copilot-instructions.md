# Copilot Instructions - Tarun's Portfolio

## Project Overview
This is a **React + Vite portfolio website** deployed on Vercel. It's a single-page application (SPA) showcasing professional experience, skills, and education with animations and responsive design. The codebase prioritizes **custom Tailwind styling** over component libraries and **data-driven UI** via `constants.js`.

## Architecture & Data Flow

### Section-Based Component Structure
- **Single-entry point**: `App.jsx` stacks 7 full-width sections (Navbar, About, Skills, Experience, Education, Contact, Footer)
- **Unique section IDs**: Each section (`id="about"`, `id="experience"`, etc.) enables smooth scrolling from Navbar
- **Data source**: `constants.js` exports `SkillsInfo`, `experiences`, and `education` arrays
- **Components import data**: Example - `Experience.jsx` imports `{ experiences }` and maps over it

### Example Data Pattern
```javascript
// constants.js structure
export const experiences = [
  {
    id: 0,
    img: pwclogo,           // Imported asset
    role: "Salesforce Developer",
    company: "PWC",
    date: "September 2023 - February 2024",
    desc: "...",            // Long description
    skills: ["HTML", "CSS", "JavaScript", "Apex", "LWC"]  // Array of strings
  }
];

// Usage in Experience.jsx
experiences.map((experience, index) => (
  <div key={experience.id}>
    {/* Render experience data */}
  </div>
))
```

## Styling Conventions

### Tailwind + Custom Extensions
- **Custom keyframes**: `blob` animation defined in `tailwind.config.js` for scaling effects
- **Custom gradient**: `bg-skills-gradient` (purples/blues) applied to Skills & Experience sections
- **Responsive pattern**: Use `sm:`, `md:`, `lg:` prefixes consistently (e.g., `sm:flex-row` for layout shifts)
- **Color scheme**: Dark background `bg-[#050414]` with purple accent `text-[#8245ec]`
- **Special utilities**: `clip-path-custom-2` applied to some sections (CSS custom property, likely in `App.css`)

### Common Class Patterns
```jsx
// Section wrapper
className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient"

// Card container
className="p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"

// Responsive text
className="text-xl sm:text-2xl font-semibold text-white"

// Hover effects
className="transform transition-transform duration-300 hover:scale-105"
```

## Build & Development

### Commands
- `npm run dev` → Start Vite dev server (hot reload)
- `npm run build` → Production bundle
- `npm run lint` → ESLint check
- `npm run preview` → Preview production build locally

### Build Configuration
- **Vite**: Configured with `@vitejs/plugin-react` (Fast Refresh for JSX)
- **PostCSS**: `autoprefixer` for vendor prefixes (see `postcss.config.js`)
- **Deployment**: Vercel (configured for auto-deploy on push)

## Key Dependencies & Usage

| Dependency | Purpose | Common Pattern |
|-----------|---------|-----------------|
| `react-icons` | Icon library (FiMenu, FaGithub, etc.) | `import { FiMenu } from "react-icons/fi"` |
| `@emailjs/browser` | Email contact form backend | Used in Contact.jsx for form submission |
| `react-parallax-tilt` | 3D tilt animation component | Wraps interactive elements for depth |
| `react-typing-effect` | Text typing animation | About section hero text |
| `react-toastify` | Toast notifications | Form success/error messages |
| `react-router-dom` | Routing (though mostly unused - SPA uses scroll) | May be used for future multi-page features |

## Component-Specific Patterns

### Navbar.jsx
- Manages smooth scroll navigation via `document.getElementById(sectionId).scrollIntoView()`
- Tracks scroll state to add backdrop blur when scrolled > 50px
- Mobile menu uses state toggle with conditional rendering
- Logo format: `<brand>/</brand>` with purple accent tags

### Experience.jsx
- Alternating timeline layout: even indices right-align, odd left-align (desktop only)
- Uses `index % 2 === 0` to conditionally apply `sm:justify-end` or `sm:justify-start`
- Vertical timeline line uses absolute positioning on left edge
- Skills rendered as small purple pill badges with borders

### Skills.jsx
- Grid layout using Tailwind grid utilities
- Categories (Frontend, Backend, Languages, Tools) are headings
- Each skill has name + logo - logos imported from `assets/tech_logo/`

## Developer Workflow

### Adding New Content
1. **Add data to `constants.js`**: Define new object with required fields (id, img, role, date, etc.)
2. **Import in component**: `import { newData } from "../../constants"`
3. **Map & render**: `.map()` over array with JSX
4. **Assets**: Place logos in appropriate folder under `assets/` and import at top of `constants.js`

### Common Customizations
- **Color changes**: Replace `#8245ec` (purple) or `#050414` (dark bg) with hex values
- **Gradient changes**: Edit `backgroundImage` in `tailwind.config.js`
- **Section padding**: Adjust `px-[12vw]` and `py-24` values in section wrappers
- **Animations**: Add keyframes to `tailwind.config.js` `theme.extend.keyframes`

## Important Files Reference

| File | Purpose |
|------|---------|
| `src/App.jsx` | Main layout - imports all sections, manages dark bg & grid bg |
| `src/constants.js` | Single source of truth for portfolio data (experiences, skills, education) |
| `tailwind.config.js` | Tailwind theme extensions (blob animation, skills gradient) |
| `src/components/Navbar/Navbar.jsx` | Navigation with smooth scroll & mobile menu |
| `postcss.config.js` | PostCSS plugins (autoprefixer for CSS compatibility) |

## Anti-Patterns to Avoid

- ❌ Don't hardcode strings in components - add to `constants.js` instead
- ❌ Don't use inline styles - use Tailwind utilities
- ❌ Don't forget to add `key={id}` props in `.map()` renders
- ❌ Don't mix component-specific CSS files - keep styles in Tailwind classes
- ❌ Don't add new section IDs without updating Navbar's `menuItems` array

## Notes for AI Agents

- **Responsive-first mindset**: Design mobile first, then add `md:` and `lg:` breakpoints
- **Import discipline**: Always import assets in `constants.js`, then reference via object properties
- **Tailwind proficiency**: This project relies heavily on Tailwind - understand arbitrary values like `bg-[#050414]` and color stops
- **Section-based SPA**: Each section is full-width with its own padding - maintain visual consistency
- **Performance**: Images (logos) are pre-imported and reused via data objects - avoid dynamic requires
