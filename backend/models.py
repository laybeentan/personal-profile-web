from pydantic import BaseModel, Field
from typing import List, Optional, Dict, Any
from datetime import datetime
from bson import ObjectId


class PyObjectId(ObjectId):
    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, v):
        if not ObjectId.is_valid(v):
            raise ValueError("Invalid objectid")
        return ObjectId(v)

    @classmethod
    def __modify_schema__(cls, field_schema):
        field_schema.update(type="string")


# Profile Models
class Profile(BaseModel):
    id: Optional[PyObjectId] = Field(default_factory=PyObjectId, alias="_id")
    name: str
    title: str
    location: str
    email: str
    linkedin: str
    years_experience: int
    current_company: str
    specialization: str
    summary: str
    key_strengths: List[str]
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}


class ProfileCreate(BaseModel):
    name: str
    title: str
    location: str
    email: str
    linkedin: str
    years_experience: int
    current_company: str
    specialization: str
    summary: str
    key_strengths: List[str]


# Experience Models
class Experience(BaseModel):
    id: Optional[PyObjectId] = Field(default_factory=PyObjectId, alias="_id")
    profile_id: PyObjectId
    company: str
    role: str
    start_date: str
    end_date: Optional[str]
    duration: str
    location: str
    description: str
    achievements: List[str]
    technologies: List[str]
    order: int = 0
    created_at: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}


class ExperienceCreate(BaseModel):
    company: str
    role: str
    start_date: str
    end_date: Optional[str]
    duration: str
    location: str
    description: str
    achievements: List[str]
    technologies: List[str]
    order: int = 0


# Skills Models
class Skill(BaseModel):
    id: Optional[PyObjectId] = Field(default_factory=PyObjectId, alias="_id")
    profile_id: PyObjectId
    category: str
    name: str
    proficiency: int
    order: int = 0
    created_at: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}


class SkillCreate(BaseModel):
    category: str
    name: str
    proficiency: int
    order: int = 0


# Projects Models
class Project(BaseModel):
    id: Optional[PyObjectId] = Field(default_factory=PyObjectId, alias="_id")
    profile_id: PyObjectId
    title: str
    category: str
    status: str
    start_date: str
    end_date: Optional[str]
    description: str
    challenges: List[str]
    solutions: List[str]
    impact: List[str]
    technologies: List[str]
    metrics: Dict[str, Any]
    order: int = 0
    created_at: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}


class ProjectCreate(BaseModel):
    title: str
    category: str
    status: str
    start_date: str
    end_date: Optional[str]
    description: str
    challenges: List[str]
    solutions: List[str]
    impact: List[str]
    technologies: List[str]
    metrics: Dict[str, Any]
    order: int = 0


# Certifications Models
class Certification(BaseModel):
    id: Optional[PyObjectId] = Field(default_factory=PyObjectId, alias="_id")
    profile_id: PyObjectId
    name: str
    issuer: str
    date_obtained: str
    status: str
    relevance: str
    order: int = 0
    created_at: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}


class CertificationCreate(BaseModel):
    name: str
    issuer: str
    date_obtained: str
    status: str
    relevance: str
    order: int = 0


# Contact Models
class ContactSubmission(BaseModel):
    id: Optional[PyObjectId] = Field(default_factory=PyObjectId, alias="_id")
    name: str
    email: str
    subject: str
    message: str
    submitted_at: datetime = Field(default_factory=datetime.utcnow)
    status: str = "new"

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}


class ContactSubmissionCreate(BaseModel):
    name: str
    email: str
    subject: str
    message: str


# Response Models
class ApiResponse(BaseModel):
    success: bool
    data: Optional[Any] = None
    message: Optional[str] = None
    error: Optional[str] = None


class Statistics(BaseModel):
    years_experience: int
    years_at_nokia: int
    projects_managed: int
    security_domains: int
    teams_managed_size: int
    budget_managed: str


# Education Models  
class Education(BaseModel):
    id: Optional[PyObjectId] = Field(default_factory=PyObjectId, alias="_id")
    profile_id: PyObjectId
    degree: str
    institution: str
    start_date: str
    end_date: str
    location: str
    order: int = 0
    created_at: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}


class EducationCreate(BaseModel):
    degree: str
    institution: str
    start_date: str
    end_date: str
    location: str
    order: int = 0