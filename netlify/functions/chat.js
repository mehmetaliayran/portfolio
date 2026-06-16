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

  try {
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

    if (!response.ok) {
      throw new Error(`Anthropic API error: ${response.status}`);
    }

    const data = await response.json();
    const reply = data.content?.[0]?.text || 'Sorry, something went wrong.';

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ reply })
    };
  } catch (err) {
    console.error('chat.js error:', err);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ reply: 'Sorry, the AI assistant is temporarily unavailable. You can reach Mehmet Ali directly at m.aliayran@gmail.com' })
    };
  }
};
