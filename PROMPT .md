# Portfolio Website — Mehmet Ali Ayran
## Claude Code Multi-Agent Task

You are the lead agent. Spawn sub-agents for each major area:
- **Agent 1 (UI/Design):** Visual design system, layout, animations, responsive
- **Agent 2 (Content):** All text in English and Turkish (bilingual)
- **Agent 3 (Features):** AI chat, language switcher, CV download, GitHub links
- **Agent 4 (Backend):** Netlify serverless function for Anthropic API proxy
- **Agent 5 (QA):** Review all files for bugs, broken links, missing content

Produce the following file structure:

```
portfolio-mehmetali/
├── index.html
├── Mehmet_Ali_Ayran_CV.pdf        ← already exists, do not modify
├── netlify.toml
└── netlify/
    └── functions/
        └── chat.js
```

---

## Owner Info

| Field | Value |
|---|---|
| Full Name | Mehmet Ali Ayran |
| Title | Full Stack Developer |
| Location | Istanbul, Turkey (open to remote) |
| Email | m.aliayran@gmail.com |
| Phone | +90 531 010 09 11 |
| GitHub | https://github.com/mehmetaliayran |
| LinkedIn | https://linkedin.com/in/mehmetaliayran |
| Website | volvena.com |

---

## Design System

### Aesthetic Direction
- Dark mode only (`#0A0A0F` background)
- Accent: `#6C63FF` (purple), secondary: `#8B83FF`
- Text: `#E2E8F0` primary, `#64748B` muted
- Cards: `#111118` background, `#1e1e2e` border
- Font: `Space Grotesk` (headings), `Inter` (body) — load from Google Fonts
- Border radius: 12–14px cards, 8px buttons
- NO gradients, NO heavy shadows — flat and clean

### Design References (for inspiration only)
- https://brittanychiang.com — gold standard developer portfolio layout
- https://leerob.io — minimalist developer portfolio

### Signature Element
Hero typewriter animation cycling through:
- "Full Stack Developer"
- "Problem Solver"  
- "Always Learning"
- "Open to Work"

### Animations
- Scroll-triggered fade-in using IntersectionObserver
- Smooth hover on cards (border-color → accent)
- Typewriter cursor blink
- Keep minimal — do NOT overdo effects

---

## Site Structure (Single Page)

### 1. Navigation (sticky)
- Logo: `MA.` in accent color left side
- Links: About · Skills · Experience · Projects · Contact
- Right side: `EN | TR` language toggle button
- Mobile: hamburger menu (≤768px)

### 2. Hero Section
- Eyebrow badge: "Full Stack Developer · Open to Work"
- H1: "Hi, I'm Mehmet Ali Ayran"
- Typewriter line below H1
- Bio (2 lines): "Software Engineering graduate based in Istanbul. I build scalable web applications and love creating immersive digital experiences."
- Buttons: `[ View Projects ]` `[ Download CV ]`
- Social row: GitHub icon · LinkedIn icon (SVG icons, no icon library)

### 3. About Section
- 2-column: text left, stats right
- Text: Software Engineering grad from Istanbul Nişantaşı University. Started at Istanbul Gelişim University (Computer Engineering, 2020–2022), transferred and graduated Jan 2026. 2 international internships. Founder of Volvena Studios (indie game dev, hobby).
- Stats (2x2 grid):
  - `2` Internships
  - `4+` Years Coding
  - `2` Games Built
  - `∞` Curiosity

### 4. Skills Section
- Grid of category cards:
  - **Frontend:** HTML, CSS, JavaScript, React
  - **Backend:** Node.js, Express, REST API, Python, Django
  - **Game Dev:** Unreal Engine 5, C++, Blueprint
  - **Database:** SQL, PostgreSQL, MongoDB
  - **Tools:** Git, GitHub, Linux, Docker
  - **Languages:** Turkish (Native), English (B2), French (A1)

### 5. Experience Section (vertical timeline)
**Project Specialist Intern** — TNC Group / Human Ports · Belgrade, Serbia · Oct 2025 – Apr 2026
- Completed training in HR Management, Project Management, Company Law, Brand Design
- Received 2 official reference letters from HR Specialist and Chairman of the Board
- Hands-on experience in project planning, resource and risk management

**Software Engineering Intern** — Fil Filtre A.Ş · İskenderun, Hatay · Sep 2025 – Jan 2026
- Assisted Software Engineer in day-to-day development tasks
- Gained exposure to professional software development workflows
- Supported internal operations and contributed to ongoing projects

**Founder** — Volvena Studios · Istanbul · 2023 – Present
- Independent game development studio for PC and mobile platforms
- Building original game IP using Unreal Engine 5 and C++

### 6. Projects Section
Card grid (3 col desktop, 1 col mobile):

**Parkour Game**
- Tag: `Game Dev`
- Stack: UE5 · C++ · Blueprint
- Description: Third-person parkour platformer with floating platform level design and custom character movement system. Gameplay demo available.
- Links: [ GitHub ] [ Demo ]

**Lane Rush** *(In Development)*
- Tag: `Game Dev · Mobile`
- Stack: UE5 · C++ · Blueprint
- Description: Hyper-casual mobile endless runner in a low-poly city environment. Features enemy system, skill mechanics and health system.
- Links: [ GitHub ]

**Portfolio Website** *(This site)*
- Tag: `Full Stack`
- Stack: HTML · CSS · JavaScript · Claude AI · Netlify
- Description: Personal portfolio with AI-powered assistant, bilingual EN/TR support, and serverless backend proxy.
- Links: [ GitHub ]

**E-Commerce App** *(In Development)*
- Tag: `Full Stack`
- Stack: React · Node.js · PostgreSQL
- Description: Full-featured e-commerce platform with product listings, cart management and user authentication.
- Links: [ GitHub ]

### 7. "Hire Me" CTA Banner
Full-width section between Projects and Contact:
- Headline: "Currently Open to Opportunities"
- Subtitle: "Looking for a Full Stack Developer role · Istanbul or Remote"
- 3 buttons: `[ Download CV ]` `[ View LinkedIn ]` `[ Send Email ]`
- Distinct background: slightly lighter than page bg, accent left border

### 8. Contact Section
- 2-column: left = contact links, right = AI chat invite card
- Contact: Email · GitHub · LinkedIn · Phone
- AI card: "Ask my AI assistant anything about me →" opens chat drawer

### 9. Footer
- `© 2025 Mehmet Ali Ayran · Istanbul, Turkey`
- GitHub · LinkedIn icons

---

## Backend — Netlify Serverless Function

### File: `netlify/functions/chat.js`

```javascript
const fetch = require('node-fetch');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { message } = JSON.parse(event.body);

  const SYSTEM_PROMPT = `You are the AI assistant on Mehmet Ali Ayran's personal portfolio website.

PERSONAL:
- Full name: Mehmet Ali Ayran
- Location: Istanbul, Turkey (open to remote)
- Email: m.aliayran@gmail.com
- Phone: +90 531 010 09 11
- GitHub: github.com/mehmetaliayran
- LinkedIn: linkedin.com/in/mehmetaliayran

EDUCATION:
- BSc Software Engineering — Istanbul Nişantaşı University (Sep 2022 – Jan 2026, Graduated)
- Computer Engineering (Transferred) — Istanbul Gelişim University (Sep 2020 – 2022)

WORK EXPERIENCE:
- Project Specialist Intern — TNC Group / Human Ports, Belgrade, Serbia (Oct 2025 – Apr 2026)
- Software Engineering Intern — Fil Filtre A.Ş, İskenderun, Hatay (Sep 2025 – Jan 2026)
- Founder — Volvena Studios (indie game dev studio, ongoing hobby)

TECHNICAL SKILLS:
Frontend: HTML, CSS, JavaScript, React
Backend: Node.js, Express, REST API, Python, Django (learning)
Game Dev: Unreal Engine 5, C++, Blueprint
Database: SQL, PostgreSQL, MongoDB
Tools: Git, GitHub, Linux, Docker

PROJECTS:
- Parkour Game (UE5, C++) — third-person parkour platformer, gameplay demo available
- Lane Rush (UE5, C++, in development) — hyper-casual mobile endless runner
- Portfolio website with AI assistant (this site)
- E-Commerce app (React, Node.js, PostgreSQL, in development)

COURSES:
- The Complete Full Stack Web Development Bootcamp — Udemy (in progress)
- Python & Programming (Django, Data Analysis) — Udemy (expected Q4 2026)
- Unreal Engine 5 C++ Developer — Udemy, Ben Tristem (expected Q4 2026)

LANGUAGES: Turkish (Native), English (B2), French (A1)
CAREER GOAL: Seeking Full Stack Developer roles in Istanbul or remote. Open to junior/mid-level positions.

Answer in the same language the visitor uses (Turkish or English). Keep answers short and professional. Never make up information. If unsure, say "You can reach Mehmet Ali directly at m.aliayran@gmail.com".`;

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-6',
      max_tokens: 1000,
      system: SYSTEM_PROMPT,
      messages: [{ role: 'user', content: message }]
    })
  });

  const data = await response.json();
  const reply = data.content?.[0]?.text || 'Sorry, something went wrong.';

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ reply })
  };
};
```

### File: `netlify.toml`

```toml
[build]
  functions = "netlify/functions"

[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/:splat"
  status = 200
```

### In `index.html` — chat sends to:
```javascript
const res = await fetch('/api/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ message: userMessage })
});
const data = await res.json();
// use data.reply
```

API key is stored as Netlify environment variable `ANTHROPIC_API_KEY` — never hardcoded in frontend.

---

## Language Switcher (EN / TR)

Default language: **English**. Toggle in nav switches instantly (no reload).

All visible text must have both versions stored in a JS translation object. On toggle, swap all `data-i18n` elements.

Key translations:

| Key | English | Turkish |
|---|---|---|
| nav.about | About | Hakkımda |
| nav.skills | Skills | Yetenekler |
| nav.experience | Experience | Deneyim |
| nav.projects | Projects | Projeler |
| nav.contact | Contact | İletişim |
| hero.eyebrow | Full Stack Developer · Open to Work | Full Stack Developer · İş Arıyorum |
| hero.h1 | Hi, I'm Mehmet Ali Ayran | Merhaba, ben Mehmet Ali Ayran |
| hero.bio | Software Engineering graduate based in Istanbul. I build scalable web applications and love creating immersive digital experiences. | İstanbul'da yaşayan yazılım mühendisliği mezunuyum. Ölçeklenebilir web uygulamaları geliştiriyor, etkileyici dijital deneyimler yaratmayı seviyorum. |
| hero.cta1 | View Projects | Projeleri Gör |
| hero.cta2 | Download CV | CV İndir |
| hire.title | Currently Open to Opportunities | Şu An İş Fırsatlarına Açığım |
| hire.sub | Looking for a Full Stack Developer role · Istanbul or Remote | Full Stack Developer pozisyonu arıyorum · İstanbul veya Remote |
| hire.cv | Download CV | CV İndir |
| hire.linkedin | View LinkedIn | LinkedIn'i Gör |
| hire.email | Send Email | E-posta Gönder |
| chat.btn | Ask Mehmet Ali | Mehmet Ali'ye Sor |
| chat.placeholder | Ask me anything... | Bir şey sor... |
| chat.greeting | Hi! I'm Mehmet Ali's AI assistant. Ask me anything about his experience, projects, or skills 👋 | Merhaba! Ben Mehmet Ali'nin AI asistanıyım. Deneyimleri, projeleri veya yetenekleri hakkında her şeyi sorabilirsin 👋 |

Translate ALL section titles, labels, descriptions, and button texts.

---

## CV Download

Reference file as `Mehmet_Ali_Ayran_CV.pdf` (same directory as index.html).
All "Download CV" buttons: `<a href="Mehmet_Ali_Ayran_CV.pdf" download>`.
Add HTML comment: `<!-- Ensure Mehmet_Ali_Ayran_CV.pdf is in the root folder -->`

---

## Technical Requirements

- Single `index.html` — all CSS and JS inline, no build tools
- Fully responsive: mobile (≤768px), tablet, desktop
- `scroll-behavior: smooth` on html element
- IntersectionObserver for section fade-in animations
- Hamburger menu on mobile
- All external links: `target="_blank" rel="noopener noreferrer"`
- Meta tags: title, description, og:title, og:description
- Emoji favicon: `<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👨‍💻</text></svg>">`
- AI chat drawer: fixed bottom-right, 360px wide, 480px tall, opens on button click

---

## Deployment Notes (for developer reference, add as HTML comment at top of index.html)

```
DEPLOYMENT STEPS:
1. Push all files to GitHub repo: mehmetaliayran.github.io
   OR connect repo to Netlify (recommended for AI chat to work)
2. On Netlify: Site Settings → Environment Variables → Add ANTHROPIC_API_KEY
3. Get API key from: https://console.anthropic.com
4. Redeploy after adding the key
5. AI chat will NOT work on GitHub Pages (needs serverless backend)
   Use Netlify for full functionality.
```

---

## Final Checklist for QA Agent

- [ ] All sections render correctly on mobile, tablet, desktop
- [ ] Language switcher toggles ALL text (no hardcoded strings missed)
- [ ] CV download link works (`Mehmet_Ali_Ayran_CV.pdf`)
- [ ] All external links open in new tab
- [ ] AI chat sends to `/api/chat` (not directly to Anthropic)
- [ ] Typing indicator shows while waiting for API response
- [ ] Hamburger menu opens/closes on mobile
- [ ] Scroll animations trigger correctly
- [ ] No console errors
- [ ] All project GitHub links point to `https://github.com/mehmetaliayran`
- [ ] Footer year is 2025
- [ ] `netlify.toml` and `netlify/functions/chat.js` are present and correct
