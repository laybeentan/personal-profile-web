from database import DatabaseService, Collections, connect_to_mongo
from bson import ObjectId
import asyncio
import logging
import os
from dotenv import load_dotenv
from pathlib import Path

# Load environment variables
ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

logger = logging.getLogger(__name__)

# Sample data for Lay Been Tan's portfolio
async def seed_database():
    """Seed the database with Lay Been Tan's portfolio data"""
    try:
        # Connect to MongoDB
        await connect_to_mongo()
        
        # Create profile
        profile_data = {
            "name": "Lay Been Tan",
            "title": "Senior Program Manager | Vulnerability Management Expert",
            "location": "Ottawa, ON Canada",
            "email": "laybeentan@yahoo.com",
            "linkedin": "https://www.linkedin.com/in/lay-been-tan-1262502",
            "years_experience": 31,
            "current_company": "Nokia",
            "specialization": "Vulnerability Management for Telecommunications",
            "summary": "Seasoned telecommunications professional with over three decades of experience in program management, specializing in vulnerability management and security initiatives across enterprise-level telecom infrastructure.",
            "key_strengths": [
                "Quick learner who adapts rapidly to new technologies",
                "Dedicated professional with unwavering commitment to excellence", 
                "Independent worker who delivers results with minimal supervision"
            ]
        }
        
        profile = await DatabaseService.create_document(Collections.PROFILES, profile_data)
        profile_id = profile["_id"]
        logger.info(f"Created profile with ID: {profile_id}")

        # Create experiences
        experiences = [
            {
                "profile_id": profile_id,
                "company": "Nokia",
                "role": "Senior Program Manager",
                "start_date": "2010-01",
                "end_date": None,
                "duration": "15 years",
                "location": "Ottawa, Canada",
                "description": "Lead comprehensive vulnerability management programs for Nokia's telecommunications portfolio, overseeing security initiatives across multiple product lines and ensuring compliance with international security standards.",
                "achievements": [
                    "Established enterprise-wide vulnerability assessment frameworks reducing security incidents by 40%",
                    "Managed cross-functional teams of 25+ engineers across multiple time zones",
                    "Implemented automated vulnerability scanning processes increasing detection efficiency by 60%",
                    "Led security compliance initiatives for 5G network infrastructure deployments"
                ],
                "technologies": ["Vulnerability Management", "Risk Assessment", "Security Frameworks", "5G Security", "Compliance Management"],
                "order": 1
            },
            {
                "profile_id": profile_id,
                "company": "Nokia",
                "role": "Technical Project Manager",
                "start_date": "2006-01",
                "end_date": "2010-01",
                "duration": "4 years",
                "location": "Ottawa, Canada",
                "description": "Managed technical projects focused on telecommunications infrastructure development, coordinating between engineering teams and ensuring project deliverables met quality and timeline requirements.",
                "achievements": [
                    "Successfully delivered 15+ critical telecom infrastructure projects on time and within budget",
                    "Introduced agile project management methodologies improving team productivity by 35%",
                    "Coordinated with international teams across North America and Europe",
                    "Established quality assurance processes that reduced post-deployment issues by 50%"
                ],
                "technologies": ["Project Management", "Agile Methodologies", "Quality Assurance", "Team Leadership", "Process Improvement"],
                "order": 2
            },
            {
                "profile_id": profile_id,
                "company": "Nokia",
                "role": "Technical Project Manager",
                "start_date": "1994-01",
                "end_date": "2006-01", 
                "duration": "12 years",
                "location": "Ottawa, Canada",
                "description": "Started career managing technical projects in telecommunications, developing expertise in GSM, Ethernet, and SIP technologies while building strong foundation in project management and team leadership.",
                "achievements": [
                    "Managed migration projects from legacy systems to modern telecom infrastructure",
                    "Developed standardized project management processes adopted company-wide",
                    "Led technical training programs for junior project managers",
                    "Maintained 98% project success rate across diverse technical initiatives"
                ],
                "technologies": ["GSM", "Ethernet", "SIP", "Legacy System Migration", "Technical Training", "Process Development"],
                "order": 3
            },
            {
                "profile_id": profile_id,
                "company": "Alcatel Canada",
                "role": "Software Development Engineering Manager",
                "start_date": "2000-01",
                "end_date": "2006-01",
                "duration": "6 years",
                "location": "Canada",
                "description": "Led software development engineering teams, overseeing the design and implementation of telecommunications software solutions while managing engineering resources and project timelines.",
                "achievements": [
                    "Managed engineering teams developing next-generation telecom software platforms",
                    "Implemented software development lifecycle improvements reducing time-to-market by 25%",
                    "Established quality metrics and testing frameworks for software products",
                    "Mentored 20+ junior engineers in software development best practices"
                ],
                "technologies": ["Software Engineering", "Team Management", "SDLC", "Quality Metrics", "Mentoring", "Product Development"],
                "order": 4
            },
            {
                "profile_id": profile_id,
                "company": "Newbridge Networks Corporation",
                "role": "Software Design Manager",
                "start_date": "1994-01",
                "end_date": "2000-01",
                "duration": "6 years",
                "location": "Canada",
                "description": "Beginning of telecommunications career, managing software design projects and building foundational expertise in network technologies and software development management.",
                "achievements": [
                    "Led design of innovative network software solutions for enterprise clients",
                    "Established design review processes improving software quality and reliability",
                    "Collaborated with hardware teams on integrated network solutions",
                    "Built expertise in networking protocols and telecommunications standards"
                ],
                "technologies": ["Network Software Design", "Software Architecture", "Design Reviews", "Hardware Integration", "Networking Protocols"],
                "order": 5
            }
        ]

        for exp in experiences:
            await DatabaseService.create_document(Collections.EXPERIENCES, exp)
        logger.info(f"Created {len(experiences)} experience records")

        # Create skills
        skills = [
            # Vulnerability Management
            {"profile_id": profile_id, "category": "Vulnerability Management", "name": "Risk Assessment", "proficiency": 95, "order": 1},
            {"profile_id": profile_id, "category": "Vulnerability Management", "name": "Security Frameworks", "proficiency": 90, "order": 2},
            {"profile_id": profile_id, "category": "Vulnerability Management", "name": "Threat Analysis", "proficiency": 92, "order": 3},
            {"profile_id": profile_id, "category": "Vulnerability Management", "name": "Compliance Management", "proficiency": 88, "order": 4},
            {"profile_id": profile_id, "category": "Vulnerability Management", "name": "Incident Response", "proficiency": 85, "order": 5},
            
            # Telecommunications
            {"profile_id": profile_id, "category": "Telecommunications", "name": "Ethernet", "proficiency": 95, "order": 1},
            {"profile_id": profile_id, "category": "Telecommunications", "name": "GSM", "proficiency": 92, "order": 2},
            {"profile_id": profile_id, "category": "Telecommunications", "name": "SIP", "proficiency": 90, "order": 3},
            {"profile_id": profile_id, "category": "Telecommunications", "name": "5G Infrastructure", "proficiency": 85, "order": 4},
            {"profile_id": profile_id, "category": "Telecommunications", "name": "Network Architecture", "proficiency": 88, "order": 5},
            
            # Project Management
            {"profile_id": profile_id, "category": "Project Management", "name": "Agile Methodologies", "proficiency": 92, "order": 1},
            {"profile_id": profile_id, "category": "Project Management", "name": "Team Leadership", "proficiency": 95, "order": 2},
            {"profile_id": profile_id, "category": "Project Management", "name": "Stakeholder Management", "proficiency": 90, "order": 3},
            {"profile_id": profile_id, "category": "Project Management", "name": "Resource Planning", "proficiency": 88, "order": 4},
            {"profile_id": profile_id, "category": "Project Management", "name": "Quality Assurance", "proficiency": 90, "order": 5},
            
            # Technical Leadership
            {"profile_id": profile_id, "category": "Technical Leadership", "name": "Software Engineering", "proficiency": 85, "order": 1},
            {"profile_id": profile_id, "category": "Technical Leadership", "name": "System Architecture", "proficiency": 82, "order": 2},
            {"profile_id": profile_id, "category": "Technical Leadership", "name": "Process Improvement", "proficiency": 92, "order": 3},
            {"profile_id": profile_id, "category": "Technical Leadership", "name": "Technical Mentoring", "proficiency": 88, "order": 4},
            {"profile_id": profile_id, "category": "Technical Leadership", "name": "Innovation Management", "proficiency": 85, "order": 5}
        ]

        for skill in skills:
            await DatabaseService.create_document(Collections.SKILLS, skill)
        logger.info(f"Created {len(skills)} skill records")

        # Create projects
        projects = [
            {
                "profile_id": profile_id,
                "title": "Enterprise Vulnerability Management Framework",
                "category": "Security Infrastructure",
                "status": "Completed",
                "start_date": "2022-01",
                "end_date": "2024-12",
                "description": "Led the design and implementation of a comprehensive vulnerability management framework across Nokia's global telecommunications infrastructure, covering 500+ network components and serving millions of users.",
                "challenges": [
                    "Integrating disparate legacy security systems across multiple product lines",
                    "Establishing unified vulnerability assessment standards for global teams",
                    "Ensuring minimal disruption to ongoing telecommunications services"
                ],
                "solutions": [
                    "Developed phased migration strategy reducing system downtime by 85%",
                    "Created automated vulnerability scanning protocols increasing detection speed by 60%",
                    "Established cross-regional security review boards ensuring consistent standards"
                ],
                "impact": [
                    "40% reduction in critical security incidents across the portfolio",
                    "Improved compliance ratings from regulatory bodies by 35%",
                    "Enhanced threat response time from 48 hours to 6 hours average"
                ],
                "technologies": ["Vulnerability Scanning", "Risk Assessment", "Compliance Frameworks", "Automation Tools", "Security Analytics"],
                "metrics": {
                    "budget": "$2.5M",
                    "teamSize": "25+ Engineers", 
                    "timeline": "24 Months",
                    "coverage": "500+ Components"
                },
                "order": 1
            },
            {
                "profile_id": profile_id,
                "title": "5G Network Security Compliance Initiative",
                "category": "Network Infrastructure",
                "status": "Ongoing",
                "start_date": "2023-01",
                "end_date": None,
                "description": "Spearheading security compliance efforts for Nokia's 5G network infrastructure deployment, ensuring adherence to international security standards and regulatory requirements across North American markets.",
                "challenges": [
                    "Navigating complex international security regulations for 5G deployment",
                    "Coordinating security assessments across multiple vendor partnerships",
                    "Balancing security requirements with performance optimization needs"
                ],
                "solutions": [
                    "Established comprehensive security assessment protocols for 5G components",
                    "Created vendor security certification program reducing evaluation time by 50%",
                    "Implemented continuous monitoring systems for real-time compliance tracking"
                ],
                "impact": [
                    "Successfully achieved security certification for 12 major 5G deployments",
                    "Reduced regulatory approval timeline by 30% through proactive compliance",
                    "Established Nokia as industry leader in 5G security best practices"
                ],
                "technologies": ["5G Security", "Regulatory Compliance", "Vendor Management", "Continuous Monitoring", "Risk Analysis"],
                "metrics": {
                    "budget": "$1.8M",
                    "teamSize": "18 Specialists",
                    "timeline": "Ongoing",
                    "coverage": "12 Deployments"
                },
                "order": 2
            }
        ]

        for project in projects:
            await DatabaseService.create_document(Collections.PROJECTS, project)
        logger.info(f"Created {len(projects)} project records")

        # Create certifications
        certifications = [
            {
                "profile_id": profile_id,
                "name": "Certified SAFe® 4 Product Owner",
                "issuer": "Scaled Agile",
                "date_obtained": "2020-03",
                "status": "Current",
                "relevance": "Agile Program Management",
                "order": 1
            },
            {
                "profile_id": profile_id,
                "name": "Product Manager Certification",
                "issuer": "Professional Certification Body",
                "date_obtained": "2019-08",
                "status": "Current",
                "relevance": "Strategic Product Leadership",
                "order": 2
            }
        ]

        for cert in certifications:
            await DatabaseService.create_document(Collections.CERTIFICATIONS, cert)
        logger.info(f"Created {len(certifications)} certification records")

        # Create education
        education_data = {
            "profile_id": profile_id,
            "degree": "Bachelor's Degree",
            "institution": "Acadia University",
            "start_date": "1990",
            "end_date": "1994",
            "location": "Nova Scotia, Canada",
            "order": 1
        }
        
        await DatabaseService.create_document(Collections.EDUCATION, education_data)
        logger.info("Created education record")

        logger.info("Database seeding completed successfully!")
        return profile_id

    except Exception as e:
        logger.error(f"Error seeding database: {e}")
        raise

if __name__ == "__main__":
    asyncio.run(seed_database())