# Backend Integration Contracts - Lay Been Tan Portfolio

## Overview
This document outlines the API contracts, mock data structure, and integration plan for transitioning from frontend-only portfolio to full-stack application.

## Current Mock Data Structure (mock.js)
The frontend currently uses structured mock data including:
- Personal information and professional summary
- Experience timeline with achievements and technologies
- Skills categorized by domain with proficiency levels
- Project portfolios with detailed metrics and impact
- Certifications and education information
- Contact and statistics data

## Required Backend API Endpoints

### 1. Profile Management
```
GET /api/profile
- Returns: Complete profile information
- Used by: Hero, About, Contact components
```

### 2. Professional Experience
```
GET /api/experience
- Returns: Array of work experience entries
- Used by: Experience component
- Includes: roles, achievements, technologies, metrics
```

### 3. Skills & Certifications
```
GET /api/skills
- Returns: Categorized skills with proficiency levels
- Used by: Skills component

GET /api/certifications  
- Returns: Professional certifications
- Used by: Skills component
```

### 4. Project Portfolio
```
GET /api/projects
- Returns: Array of key projects with detailed information
- Used by: Projects component
- Includes: challenges, solutions, impact, technologies, metrics
```

### 5. Contact Management
```
POST /api/contact
- Accepts: Contact form submissions
- Returns: Success/error response
- Used by: Contact component (if contact form added)
```

### 6. Statistics & Analytics
```
GET /api/statistics
- Returns: Career statistics and metrics
- Used by: About component for stats display
```

## Database Collections (MongoDB)

### profiles
```javascript
{
  _id: ObjectId,
  name: String,
  title: String,
  location: String,
  email: String,
  linkedin: String,
  yearsExperience: Number,
  currentCompany: String,
  specialization: String,
  summary: String,
  keyStrengths: [String],
  createdAt: Date,
  updatedAt: Date
}
```

### experiences
```javascript
{
  _id: ObjectId,
  profileId: ObjectId,
  company: String,
  role: String,
  startDate: String,
  endDate: String,
  duration: String,
  location: String,
  description: String,
  achievements: [String],
  technologies: [String],
  order: Number,
  createdAt: Date
}
```

### skills
```javascript
{
  _id: ObjectId,
  profileId: ObjectId,
  category: String,
  name: String,
  proficiency: Number,
  order: Number,
  createdAt: Date
}
```

### projects
```javascript
{
  _id: ObjectId,
  profileId: ObjectId,
  title: String,
  category: String,
  status: String,
  startDate: String,
  endDate: String,
  description: String,
  challenges: [String],
  solutions: [String],
  impact: [String],
  technologies: [String],
  metrics: Object,
  order: Number,
  createdAt: Date
}
```

### certifications
```javascript
{
  _id: ObjectId,
  profileId: ObjectId,
  name: String,
  issuer: String,
  dateObtained: String,
  status: String,
  relevance: String,
  order: Number,
  createdAt: Date
}
```

### contact_submissions
```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  subject: String,
  message: String,
  submittedAt: Date,
  status: String // 'new', 'read', 'responded'
}
```

## Integration Steps

### Phase 1: Backend Setup
1. Create MongoDB models for all collections
2. Implement basic CRUD operations
3. Set up API routes with proper error handling
4. Populate database with mock data

### Phase 2: Frontend Integration
1. Replace mock.js imports with actual API calls
2. Add loading states and error handling
3. Implement proper state management
4. Add contact form functionality

### Phase 3: Data Migration
1. Create seed script to populate database with current mock data
2. Ensure data consistency and proper relationships
3. Test all API endpoints

## API Response Format
```javascript
// Success Response
{
  success: true,
  data: {...},
  message: "Optional success message"
}

// Error Response
{
  success: false,
  error: "Error message",
  code: "ERROR_CODE"
}
```

## Environment Variables Required
- MONGO_URL: Already configured
- DB_NAME: Already configured  
- PORT: 8001 (already configured)

## Frontend Integration Points
- Replace all `import { mockAPI }` with actual fetch calls to backend
- Update components to handle loading states
- Add error boundaries for API failures
- Implement proper caching where appropriate

## Notes
- All API routes must use `/api` prefix for proper routing
- Maintain existing data structure for seamless integration
- Preserve all current functionality while adding backend persistence
- Consider adding admin interface for portfolio updates in future phases