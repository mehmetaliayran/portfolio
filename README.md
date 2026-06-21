# mehmetaliayran.dev — Personal Portfolio

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Netlify](https://img.shields.io/badge/Deployed%20on-Netlify-00C7B7?style=flat&logo=netlify&logoColor=white)
![Claude AI](https://img.shields.io/badge/AI-Claude%20API-6B46C1?style=flat)

Personal portfolio website with an AI-powered chat assistant, bilingual support (EN/TR), and sections for experience, skills, and projects.

**Live Site:** [aliayran-portfolio.netlify.app](https://aliayran-portfolio.netlify.app)

---

## Screenshots

**Hero**
![Hero](https://github.com/user-attachments/assets/5255da84-2e54-4f22-b6f6-e5a6dd827499)

**About Me**
![About](https://github.com/user-attachments/assets/c105d37b-4881-4e45-8574-d83e1dc1fb0f)

**Skills**
![Skills](https://github.com/user-attachments/assets/56e5b5bd-3bab-4ccc-8650-53b6ca043e40)

**AI Assistant & Contact**
![Contact](https://github.com/user-attachments/assets/f264afe9-55bb-4eb5-99f7-2d6aabe9f861)

---

## Features

- 🤖 **AI Chat Assistant** — Ask anything about my background, skills, or projects; powered by Claude (Anthropic API) via a serverless proxy
- 🌐 **Bilingual** — Full English / Turkish language switcher
- 🌙 **Dark Theme** — Developer-focused dark UI
- 📱 **Responsive** — Mobile-first layout
- 📄 **CV Download** — Direct PDF download from the hero section
- **Sections:** Hero, About, Skills, Experience (timeline), Projects, Contact

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | HTML5, CSS3, Vanilla JavaScript |
| AI Integration | Anthropic Claude API (`claude-sonnet-4-6`) |
| Serverless Proxy | Netlify Functions |
| Deployment | [Netlify](https://netlify.com) |

---

## Project Structure

```
portfolio-mehmetali/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── netlify/
    └── functions/
        └── chat.js       # Serverless proxy — keeps API key off the client
```

---

## Running Locally

```bash
# Clone the repository
git clone https://github.com/mehmetaliayran/portfolio.git
cd portfolio

# Install Netlify CLI
npm install -g netlify-cli

# Set up environment variable
# Create a .env file:
ANTHROPIC_API_KEY=your_anthropic_api_key

# Start local dev server with Functions support
netlify dev
```

> **Note:** The AI chat requires an Anthropic API key. Without it, the rest of the site works fine.

---

## Environment Variables

| Variable | Description |
|----------|-------------|
| `ANTHROPIC_API_KEY` | Set in Netlify dashboard → Site Settings → Environment Variables |

---

## Deployment

Deployed on Netlify with automatic deploys from the `main` branch. The `netlify/functions/chat.js` serverless function proxies requests to the Anthropic API so the key is never exposed to the client.

---

## Author

**Mehmet Ali Ayran** — Full Stack Developer, Istanbul

- GitHub: [@mehmetaliayran](https://github.com/mehmetaliayran)
- LinkedIn: [linkedin.com/in/mehmetaliayran](https://linkedin.com/in/mehmetaliayran)
- GameLog Project: [gamelog-xc03.onrender.com](https://gamelog-xc03.onrender.com)
