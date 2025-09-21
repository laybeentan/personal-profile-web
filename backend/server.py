from fastapi import FastAPI, APIRouter, HTTPException, Query
from fastapi.responses import JSONResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from typing import List, Optional, Dict, Any
import os
import logging
from pathlib import Path

# Import our models and database services
from models import *
from database import DatabaseService, Collections, connect_to_mongo, close_mongo_connection

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Create the main app without a prefix
app = FastAPI(title="Lay Been Tan Portfolio API", version="1.0.0")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Startup and shutdown events
@app.on_event("startup")
async def startup_db_client():
    await connect_to_mongo()
    logger.info("Portfolio API started successfully")

@app.on_event("shutdown")
async def shutdown_db_client():
    await close_mongo_connection()
    logger.info("Portfolio API shutdown complete")

# Helper function to create API responses
def create_response(success: bool, data: Any = None, message: str = None, error: str = None) -> dict:
    return {
        "success": success,
        "data": data,
        "message": message,
        "error": error
    }

# Profile endpoints
@api_router.get("/profile", response_model=dict)
async def get_profile():
    """Get complete profile information"""
    try:
        profiles = await DatabaseService.get_documents(Collections.PROFILES)
        if not profiles:
            raise HTTPException(status_code=404, detail="Profile not found")
        
        profile = profiles[0]  # Get the first (and should be only) profile
        
        # Convert ObjectId to string for JSON serialization
        if profile.get('_id'):
            profile['id'] = str(profile['_id'])
            del profile['_id']
            
        return create_response(True, profile, "Profile retrieved successfully")
    except Exception as e:
        logger.error(f"Error getting profile: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@api_router.get("/experience", response_model=dict)
async def get_experience():
    """Get all work experience entries"""
    try:
        # Get profile first to get profile_id
        profiles = await DatabaseService.get_documents(Collections.PROFILES)
        if not profiles:
            return create_response(True, [], "No profile found")
        
        profile_id = str(profiles[0]['_id'])
        experiences = await DatabaseService.get_documents_by_profile_id(Collections.EXPERIENCES, profile_id, "order")
        
        # Convert ObjectIds to strings
        for exp in experiences:
            exp['id'] = str(exp['_id'])
            exp['profile_id'] = str(exp['profile_id'])
            del exp['_id']
            
        return create_response(True, experiences, "Experience retrieved successfully")
    except Exception as e:
        logger.error(f"Error getting experience: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@api_router.get("/skills", response_model=dict)
async def get_skills():
    """Get all skills categorized by domain"""
    try:
        # Get profile first to get profile_id
        profiles = await DatabaseService.get_documents(Collections.PROFILES)
        if not profiles:
            return create_response(True, {}, "No profile found")
        
        profile_id = str(profiles[0]['_id'])
        skills = await DatabaseService.get_documents_by_profile_id(Collections.SKILLS, profile_id, "order")
        
        # Group skills by category
        categorized_skills = {}
        for skill in skills:
            category = skill['category']
            if category not in categorized_skills:
                categorized_skills[category] = {
                    'category': category,
                    'skills': []
                }
            
            skill_data = {
                'name': skill['name'],
                'proficiency': skill['proficiency']
            }
            categorized_skills[category]['skills'].append(skill_data)
            
        return create_response(True, categorized_skills, "Skills retrieved successfully")
    except Exception as e:
        logger.error(f"Error getting skills: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@api_router.get("/projects", response_model=dict)
async def get_projects():
    """Get all key projects"""
    try:
        # Get profile first to get profile_id
        profiles = await DatabaseService.get_documents(Collections.PROFILES)
        if not profiles:
            return create_response(True, [], "No profile found")
        
        profile_id = str(profiles[0]['_id'])
        projects = await DatabaseService.get_documents_by_profile_id(Collections.PROJECTS, profile_id, "order")
        
        # Convert ObjectIds to strings
        for project in projects:
            project['id'] = str(project['_id'])
            project['profile_id'] = str(project['profile_id'])
            del project['_id']
            
        return create_response(True, projects, "Projects retrieved successfully")
    except Exception as e:
        logger.error(f"Error getting projects: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@api_router.get("/certifications", response_model=dict)
async def get_certifications():
    """Get all professional certifications"""
    try:
        # Get profile first to get profile_id
        profiles = await DatabaseService.get_documents(Collections.PROFILES)
        if not profiles:
            return create_response(True, [], "No profile found")
        
        profile_id = str(profiles[0]['_id'])
        certifications = await DatabaseService.get_documents_by_profile_id(Collections.CERTIFICATIONS, profile_id, "order")
        
        # Convert ObjectIds to strings
        for cert in certifications:
            cert['id'] = str(cert['_id'])
            cert['profile_id'] = str(cert['profile_id'])
            del cert['_id']
            
        return create_response(True, certifications, "Certifications retrieved successfully")
    except Exception as e:
        logger.error(f"Error getting certifications: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@api_router.get("/education", response_model=dict)
async def get_education():
    """Get education information"""
    try:
        # Get profile first to get profile_id
        profiles = await DatabaseService.get_documents(Collections.PROFILES)
        if not profiles:
            return create_response(True, [], "No profile found")
        
        profile_id = str(profiles[0]['_id'])
        education = await DatabaseService.get_documents_by_profile_id(Collections.EDUCATION, profile_id, "order")
        
        # Convert ObjectIds to strings
        for edu in education:
            edu['id'] = str(edu['_id'])
            edu['profile_id'] = str(edu['profile_id'])
            del edu['_id']
            
        return create_response(True, education, "Education retrieved successfully")
    except Exception as e:
        logger.error(f"Error getting education: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@api_router.get("/statistics", response_model=dict)
async def get_statistics():
    """Get career statistics and metrics"""
    try:
        # Get profile first
        profiles = await DatabaseService.get_documents(Collections.PROFILES)
        if not profiles:
            return create_response(True, {}, "No profile found")
        
        profile = profiles[0]
        profile_id = str(profile['_id'])
        
        # Count projects
        project_count = await DatabaseService.count_documents(Collections.PROJECTS, {"profile_id": profile['_id']})
        
        # Get skills count by category
        skills = await DatabaseService.get_documents_by_profile_id(Collections.SKILLS, profile_id)
        skill_categories = set(skill['category'] for skill in skills)
        
        statistics = {
            "years_experience": profile.get('years_experience', 31),
            "years_at_nokia": 15,
            "projects_managed": max(project_count * 50, 100),  # Estimate based on actual projects
            "security_domains": len(skill_categories),
            "teams_managed_size": 25,
            "budget_managed": "$2.5M+"
        }
        
        return create_response(True, statistics, "Statistics retrieved successfully")
    except Exception as e:
        logger.error(f"Error getting statistics: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@api_router.post("/contact", response_model=dict)
async def submit_contact_form(contact_data: ContactSubmissionCreate):
    """Submit contact form"""
    try:
        contact_dict = contact_data.dict()
        created_contact = await DatabaseService.create_document(Collections.CONTACT_SUBMISSIONS, contact_dict)
        
        # Convert ObjectId to string
        if created_contact.get('_id'):
            created_contact['id'] = str(created_contact['_id'])
            del created_contact['_id']
        
        return create_response(True, created_contact, "Thank you for your message. I will respond within 24-48 hours.")
    except Exception as e:
        logger.error(f"Error submitting contact form: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@api_router.get("/")
async def root():
    return create_response(True, {"message": "Lay Been Tan Portfolio API"}, "API is running successfully")

@api_router.get("/health")
async def health_check():
    """Health check endpoint"""
    try:
        # Test database connection
        profiles = await DatabaseService.get_documents(Collections.PROFILES, limit=1)
        db_status = "connected" if profiles is not None else "disconnected"
        
        return create_response(True, {
            "status": "healthy",
            "database": db_status,
            "api_version": "1.0.0"
        }, "API health check passed")
    except Exception as e:
        logger.error(f"Health check failed: {e}")
        return create_response(False, None, None, f"Health check failed: {str(e)}")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)