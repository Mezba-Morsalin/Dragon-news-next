🐉 Dragon News – Modern News Portal

🔗 Live Demo: https://dragon-news-next-eta.vercel.app

Dragon News is a modern, full-stack news web application built with Next.js App Router. It provides categorized news browsing, dynamic routing, authentication, and a clean responsive UI.

🚀 Features
📰 Browse news by category (/category/[id])
🔍 Dynamic news details pages
🔐 Authentication system (Login & Register with BetterAuth)
⚡ Fast and optimized with Next.js App Router
📢 Breaking news ticker using React Marquee
🎨 Responsive UI with Tailwind CSS + DaisyUI
🧭 Sidebar-based layout (Left & Right navigation)
🌐 SEO-friendly routing


🏗️ Tech Stack
Framework: Next.js
Frontend: React
Styling: Tailwind CSS + DaisyUI
Authentication: BetterAuth
Database: MongoDB
UI Effects: React Fast Marquee
Deployment:


📁 Project Structure
src/
│
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   └── register/
│   │
│   ├── (main)/
│   │   ├── about/
│   │   ├── career/
│   │   ├── category/
│   │   └── news/[id]/
│   │
│   ├── api/
│   │   └── auth/
│   │
│   ├── layout.jsx
│   ├── page.jsx
│   └── globals.css
│
├── components/
│   ├── homepage/
│   ├── shared/
│   │   ├── Navbar.jsx
│   │   ├── Header.jsx
│   │   └── BreakingNews.jsx
│
├── lib/
├── assets/
└── public/

📌 Key Routes
* / → Home
* /category/[id] → News by category
* /news/[id] → News details
* /login → Login page
* /register → Register page


⚙️ Installation & Setup

Clone the repository:

git clone https://github.com/Mezba-Morsalin/Dragon-news-next
cd dragon-news

Install dependencies:

npm install

Run the development server:

npm run dev

http://localhost:3000