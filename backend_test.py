#!/usr/bin/env python3
"""
Backend API Testing Suite for Lay Been Tan Portfolio
Tests all backend endpoints for proper functionality and data integrity
"""

import asyncio
import aiohttp
import json
import sys
import os
from typing import Dict, Any, List
from datetime import datetime

# Backend URL from frontend environment
BACKEND_URL = "https://project-pro-profile.preview.emergentagent.com/api"

class PortfolioAPITester:
    def __init__(self):
        self.session = None
        self.test_results = []
        self.failed_tests = []
        
    async def __aenter__(self):
        self.session = aiohttp.ClientSession()
        return self
        
    async def __aexit__(self, exc_type, exc_val, exc_tb):
        if self.session:
            await self.session.close()
    
    def log_test(self, endpoint: str, status: str, message: str, data: Any = None):
        """Log test results"""
        result = {
            "endpoint": endpoint,
            "status": status,
            "message": message,
            "timestamp": datetime.now().isoformat(),
            "data": data
        }
        self.test_results.append(result)
        
        if status == "FAIL":
            self.failed_tests.append(result)
            
        print(f"[{status}] {endpoint}: {message}")
        
    async def make_request(self, method: str, endpoint: str, **kwargs) -> tuple:
        """Make HTTP request and return status, response data"""
        url = f"{BACKEND_URL}{endpoint}"
        try:
            async with self.session.request(method, url, **kwargs) as response:
                try:
                    data = await response.json()
                except:
                    data = await response.text()
                return response.status, data
        except Exception as e:
            return 0, {"error": str(e)}
    
    def validate_response_structure(self, data: Dict, endpoint: str) -> bool:
        """Validate standard API response structure"""
        if not isinstance(data, dict):
            self.log_test(endpoint, "FAIL", "Response is not a JSON object")
            return False
            
        required_fields = ["success", "data", "message"]
        missing_fields = [field for field in required_fields if field not in data]
        
        if missing_fields:
            self.log_test(endpoint, "FAIL", f"Missing required fields: {missing_fields}")
            return False
            
        if not isinstance(data["success"], bool):
            self.log_test(endpoint, "FAIL", "Success field must be boolean")
            return False
            
        return True
    
    async def test_health_endpoint(self):
        """Test /api/health endpoint"""
        status, data = await self.make_request("GET", "/health")
        
        if status != 200:
            self.log_test("/health", "FAIL", f"HTTP {status}: {data}")
            return
            
        if not self.validate_response_structure(data, "/health"):
            return
            
        if not data["success"]:
            self.log_test("/health", "FAIL", f"Health check failed: {data.get('error', 'Unknown error')}")
            return
            
        # Validate health check data
        health_data = data["data"]
        required_health_fields = ["status", "database", "api_version"]
        missing_fields = [field for field in required_health_fields if field not in health_data]
        
        if missing_fields:
            self.log_test("/health", "FAIL", f"Missing health data fields: {missing_fields}")
            return
            
        if health_data["status"] != "healthy":
            self.log_test("/health", "FAIL", f"API status is not healthy: {health_data['status']}")
            return
            
        if health_data["database"] != "connected":
            self.log_test("/health", "FAIL", f"Database not connected: {health_data['database']}")
            return
            
        self.log_test("/health", "PASS", "Health check successful", health_data)
    
    async def test_profile_endpoint(self):
        """Test /api/profile endpoint"""
        status, data = await self.make_request("GET", "/profile")
        
        if status != 200:
            self.log_test("/profile", "FAIL", f"HTTP {status}: {data}")
            return
            
        if not self.validate_response_structure(data, "/profile"):
            return
            
        if not data["success"]:
            self.log_test("/profile", "FAIL", f"Profile request failed: {data.get('error', 'Unknown error')}")
            return
            
        # Validate profile data structure
        profile = data["data"]
        required_profile_fields = ["name", "title", "location", "email", "linkedin", "years_experience", 
                                 "current_company", "specialization", "summary", "key_strengths"]
        
        missing_fields = [field for field in required_profile_fields if field not in profile]
        if missing_fields:
            self.log_test("/profile", "FAIL", f"Missing profile fields: {missing_fields}")
            return
            
        # Validate Lay Been Tan specific data
        if "Lay Been Tan" not in profile["name"]:
            self.log_test("/profile", "FAIL", f"Profile name incorrect: {profile['name']}")
            return
            
        if profile["years_experience"] < 30:  # She has 31+ years experience
            self.log_test("/profile", "FAIL", f"Years experience seems low: {profile['years_experience']}")
            return
            
        if "Nokia" not in profile.get("current_company", ""):
            self.log_test("/profile", "FAIL", f"Current company should mention Nokia: {profile.get('current_company')}")
            return
            
        self.log_test("/profile", "PASS", "Profile data retrieved successfully", 
                     {"name": profile["name"], "experience": profile["years_experience"]})
    
    async def test_experience_endpoint(self):
        """Test /api/experience endpoint"""
        status, data = await self.make_request("GET", "/experience")
        
        if status != 200:
            self.log_test("/experience", "FAIL", f"HTTP {status}: {data}")
            return
            
        if not self.validate_response_structure(data, "/experience"):
            return
            
        if not data["success"]:
            self.log_test("/experience", "FAIL", f"Experience request failed: {data.get('error', 'Unknown error')}")
            return
            
        experiences = data["data"]
        if not isinstance(experiences, list):
            self.log_test("/experience", "FAIL", "Experience data should be a list")
            return
            
        if len(experiences) == 0:
            self.log_test("/experience", "FAIL", "No experience entries found")
            return
            
        # Validate experience structure
        required_exp_fields = ["company", "role", "start_date", "duration", "description", "achievements"]
        
        nokia_found = False
        for exp in experiences:
            missing_fields = [field for field in required_exp_fields if field not in exp]
            if missing_fields:
                self.log_test("/experience", "FAIL", f"Missing experience fields: {missing_fields}")
                return
                
            if "Nokia" in exp["company"]:
                nokia_found = True
                
        if not nokia_found:
            self.log_test("/experience", "FAIL", "Nokia experience not found")
            return
            
        self.log_test("/experience", "PASS", f"Experience data retrieved successfully ({len(experiences)} entries)")
    
    async def test_skills_endpoint(self):
        """Test /api/skills endpoint"""
        status, data = await self.make_request("GET", "/skills")
        
        if status != 200:
            self.log_test("/skills", "FAIL", f"HTTP {status}: {data}")
            return
            
        if not self.validate_response_structure(data, "/skills"):
            return
            
        if not data["success"]:
            self.log_test("/skills", "FAIL", f"Skills request failed: {data.get('error', 'Unknown error')}")
            return
            
        skills_data = data["data"]
        if not isinstance(skills_data, dict):
            self.log_test("/skills", "FAIL", "Skills data should be a dictionary")
            return
            
        # Check for expected skill categories
        expected_categories = ["Vulnerability Management", "Telecommunications", "Project Management", "Technical Leadership"]
        found_categories = list(skills_data.keys())
        
        if len(found_categories) == 0:
            self.log_test("/skills", "FAIL", "No skill categories found")
            return
            
        # Validate skill structure
        for category, category_data in skills_data.items():
            if not isinstance(category_data, dict) or "skills" not in category_data:
                self.log_test("/skills", "FAIL", f"Invalid structure for category: {category}")
                return
                
            skills_list = category_data["skills"]
            if not isinstance(skills_list, list):
                self.log_test("/skills", "FAIL", f"Skills should be a list for category: {category}")
                return
                
            for skill in skills_list:
                if "name" not in skill or "proficiency" not in skill:
                    self.log_test("/skills", "FAIL", f"Invalid skill structure in category: {category}")
                    return
        
        self.log_test("/skills", "PASS", f"Skills data retrieved successfully ({len(found_categories)} categories)")
    
    async def test_projects_endpoint(self):
        """Test /api/projects endpoint"""
        status, data = await self.make_request("GET", "/projects")
        
        if status != 200:
            self.log_test("/projects", "FAIL", f"HTTP {status}: {data}")
            return
            
        if not self.validate_response_structure(data, "/projects"):
            return
            
        if not data["success"]:
            self.log_test("/projects", "FAIL", f"Projects request failed: {data.get('error', 'Unknown error')}")
            return
            
        projects = data["data"]
        if not isinstance(projects, list):
            self.log_test("/projects", "FAIL", "Projects data should be a list")
            return
            
        if len(projects) == 0:
            self.log_test("/projects", "FAIL", "No projects found")
            return
            
        # Validate project structure
        required_project_fields = ["title", "category", "status", "description", "challenges", "solutions", "impact"]
        
        for project in projects:
            missing_fields = [field for field in required_project_fields if field not in project]
            if missing_fields:
                self.log_test("/projects", "FAIL", f"Missing project fields: {missing_fields}")
                return
                
        self.log_test("/projects", "PASS", f"Projects data retrieved successfully ({len(projects)} projects)")
    
    async def test_certifications_endpoint(self):
        """Test /api/certifications endpoint"""
        status, data = await self.make_request("GET", "/certifications")
        
        if status != 200:
            self.log_test("/certifications", "FAIL", f"HTTP {status}: {data}")
            return
            
        if not self.validate_response_structure(data, "/certifications"):
            return
            
        if not data["success"]:
            self.log_test("/certifications", "FAIL", f"Certifications request failed: {data.get('error', 'Unknown error')}")
            return
            
        certifications = data["data"]
        if not isinstance(certifications, list):
            self.log_test("/certifications", "FAIL", "Certifications data should be a list")
            return
            
        if len(certifications) == 0:
            self.log_test("/certifications", "FAIL", "No certifications found")
            return
            
        # Validate certification structure
        required_cert_fields = ["name", "issuer", "date_obtained", "status"]
        
        safe_found = False
        for cert in certifications:
            missing_fields = [field for field in required_cert_fields if field not in cert]
            if missing_fields:
                self.log_test("/certifications", "FAIL", f"Missing certification fields: {missing_fields}")
                return
                
            if "SAFe" in cert["name"] or "Product Manager" in cert["name"]:
                safe_found = True
                
        if not safe_found:
            self.log_test("/certifications", "FAIL", "Expected SAFe or Product Manager certification not found")
            return
            
        self.log_test("/certifications", "PASS", f"Certifications data retrieved successfully ({len(certifications)} certifications)")
    
    async def test_statistics_endpoint(self):
        """Test /api/statistics endpoint"""
        status, data = await self.make_request("GET", "/statistics")
        
        if status != 200:
            self.log_test("/statistics", "FAIL", f"HTTP {status}: {data}")
            return
            
        if not self.validate_response_structure(data, "/statistics"):
            return
            
        if not data["success"]:
            self.log_test("/statistics", "FAIL", f"Statistics request failed: {data.get('error', 'Unknown error')}")
            return
            
        stats = data["data"]
        if not isinstance(stats, dict):
            self.log_test("/statistics", "FAIL", "Statistics data should be a dictionary")
            return
            
        # Validate statistics structure
        required_stats_fields = ["years_experience", "years_at_nokia", "projects_managed", "security_domains"]
        missing_fields = [field for field in required_stats_fields if field not in stats]
        
        if missing_fields:
            self.log_test("/statistics", "FAIL", f"Missing statistics fields: {missing_fields}")
            return
            
        # Validate reasonable values
        if stats["years_experience"] < 30:
            self.log_test("/statistics", "FAIL", f"Years experience seems low: {stats['years_experience']}")
            return
            
        if stats["years_at_nokia"] < 10:
            self.log_test("/statistics", "FAIL", f"Years at Nokia seems low: {stats['years_at_nokia']}")
            return
            
        self.log_test("/statistics", "PASS", "Statistics data retrieved successfully", stats)
    
    async def run_all_tests(self):
        """Run all API endpoint tests"""
        print(f"Starting Portfolio API Tests for Lay Been Tan")
        print(f"Backend URL: {BACKEND_URL}")
        print("=" * 60)
        
        # Test all endpoints
        await self.test_health_endpoint()
        await self.test_profile_endpoint()
        await self.test_experience_endpoint()
        await self.test_skills_endpoint()
        await self.test_projects_endpoint()
        await self.test_certifications_endpoint()
        await self.test_statistics_endpoint()
        
        # Print summary
        print("\n" + "=" * 60)
        print("TEST SUMMARY")
        print("=" * 60)
        
        total_tests = len(self.test_results)
        passed_tests = len([t for t in self.test_results if t["status"] == "PASS"])
        failed_tests = len(self.failed_tests)
        
        print(f"Total Tests: {total_tests}")
        print(f"Passed: {passed_tests}")
        print(f"Failed: {failed_tests}")
        print(f"Success Rate: {(passed_tests/total_tests)*100:.1f}%")
        
        if self.failed_tests:
            print("\nFAILED TESTS:")
            print("-" * 40)
            for test in self.failed_tests:
                print(f"❌ {test['endpoint']}: {test['message']}")
        else:
            print("\n✅ All tests passed!")
        
        return failed_tests == 0

async def main():
    """Main test runner"""
    async with PortfolioAPITester() as tester:
        success = await tester.run_all_tests()
        return 0 if success else 1

if __name__ == "__main__":
    exit_code = asyncio.run(main())
    sys.exit(exit_code)