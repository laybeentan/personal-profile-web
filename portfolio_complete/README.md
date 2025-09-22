# Lay Been Tan - Professional Portfolio

A modern, responsive portfolio website for Lay Been Tan, Senior Program Manager specializing in vulnerability management in telecommunications.

## 🚀 Features

- **Modern Tech-Focused Design** - Professional blue/slate color scheme
- **Responsive Layout** - Optimized for desktop, tablet, and mobile
- **Smooth Animations** - Professional micro-interactions and transitions
- **Full-Stack Architecture** - React frontend with FastAPI backend
- **Professional Content** - 31+ years telecommunications experience showcase

## 🛠 Tech Stack

### Frontend
- **React 18** - Modern functional components with hooks
- **Tailwind CSS** - Utility-first styling framework
- **Radix UI** - Accessible component library
- **Lucide React** - Professional icon system
- **React Router** - Client-side routing

### Backend
- **FastAPI** - Modern Python web framework
- **MongoDB** - Document database
- **Motor** - Async MongoDB driver
- **Pydantic** - Data validation and serialization

## 📦 Project Structure

```
lay-been-tan-portfolio/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/           # Radix UI components
│   │   │   ├── Hero.jsx      # Landing section
│   │   │   ├── About.jsx     # Professional summary
│   │   │   ├── Experience.jsx # Career timeline
│   │   │   ├── Skills.jsx    # Technical skills
│   │   │   ├── Projects.jsx  # Key projects
│   │   │   ├── Contact.jsx   # Contact information
│   │   │   ├── Header.jsx    # Navigation
│   │   │   └── Footer.jsx    # Footer
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── tailwind.config.js
├── backend/
│   ├── server.py         # FastAPI application
│   ├── models.py         # Pydantic models
│   ├── database.py       # MongoDB connection
│   ├── seed_data.py      # Database seeding
│   └── requirements.txt
└── README.md
```

## 🏃‍♀️ Quick Start

### Prerequisites
- Node.js 18+
- Python 3.8+
- MongoDB

### Frontend Setup
```bash
cd frontend
npm install
npm start
```

### Backend Setup
```bash
cd backend
pip install -r requirements.txt
python seed_data.py
uvicorn server:app --reload --port 8001
```

## 🌐 Deployment

### Netlify (Frontend)
1. Build: `npm run build`
2. Deploy: Drag `build` folder to Netlify
3. Environment: Set `REACT_APP_BACKEND_URL`

### Railway (Backend)
1. Connect GitHub repository
2. Auto-deploy FastAPI application
3. Configure MongoDB connection

## 📱 Features Showcase

### Professional Sections
- **Hero** - Compelling introduction with 31+ years experience highlight
- **About** - Professional summary with key statistics and strengths
- **Experience** - Detailed Nokia career progression with achievements
- **Skills** - Categorized technical expertise with proficiency levels
- **Projects** - Flagship vulnerability management initiatives
- **Contact** - Professional contact methods (email & LinkedIn)

### Technical Highlights
- **Modern Architecture** - Component-based React with TypeScript support
- **Professional Design** - Industry-appropriate telecommunications theme
- **Performance Optimized** - Lazy loading and efficient rendering
- **SEO Ready** - Semantic markup and meta tags
- **Accessibility** - WCAG compliant components

## 👩‍💼 About Lay Been Tan

Senior Program Manager at Nokia with 31+ years of telecommunications leadership experience, specializing in:

- **Vulnerability Management** - Enterprise security frameworks
- **Program Leadership** - Cross-functional team management
- **5G Security** - Network infrastructure compliance
- **Risk Assessment** - Strategic security planning

## 📧 Contact

- **Email**: laybeentan@yahoo.com
- **LinkedIn**: [lay-been-tan-1262502](https://www.linkedin.com/in/lay-been-tan-1262502)
- **Location**: Ottawa, ON Canada

## 📄 License

This project is created for professional portfolio purposes.

---

**Built with ❤️ for professional telecommunications leadership**