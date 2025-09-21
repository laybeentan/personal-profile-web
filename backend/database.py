from motor.motor_asyncio import AsyncIOMotorClient
from bson import ObjectId
import os
from typing import List, Optional, Dict, Any
import logging

logger = logging.getLogger(__name__)

class Database:
    client: AsyncIOMotorClient = None
    database = None

# Database connection
def get_database():
    return Database.database

# Initialize database connection
async def connect_to_mongo():
    try:
        Database.client = AsyncIOMotorClient(os.environ['MONGO_URL'])
        Database.database = Database.client[os.environ['DB_NAME']]
        logger.info("Connected to MongoDB successfully")
    except Exception as e:
        logger.error(f"Failed to connect to MongoDB: {e}")
        raise

async def close_mongo_connection():
    if Database.client:
        Database.client.close()
        logger.info("Disconnected from MongoDB")

# Helper functions for database operations
class DatabaseService:
    
    @staticmethod
    async def create_document(collection_name: str, document: dict) -> dict:
        """Create a new document in the specified collection"""
        try:
            db = get_database()
            result = await db[collection_name].insert_one(document)
            
            # Retrieve the created document
            created_doc = await db[collection_name].find_one({"_id": result.inserted_id})
            return created_doc
        except Exception as e:
            logger.error(f"Error creating document in {collection_name}: {e}")
            raise

    @staticmethod
    async def get_document_by_id(collection_name: str, document_id: str) -> Optional[dict]:
        """Get a document by its ID"""
        try:
            db = get_database()
            if not ObjectId.is_valid(document_id):
                return None
            
            document = await db[collection_name].find_one({"_id": ObjectId(document_id)})
            return document
        except Exception as e:
            logger.error(f"Error getting document by ID from {collection_name}: {e}")
            raise

    @staticmethod
    async def get_documents(collection_name: str, filter_dict: dict = None, sort_field: str = None, sort_order: int = 1) -> List[dict]:
        """Get multiple documents from a collection"""
        try:
            db = get_database()
            filter_dict = filter_dict or {}
            
            query = db[collection_name].find(filter_dict)
            
            if sort_field:
                query = query.sort(sort_field, sort_order)
            
            documents = await query.to_list(1000)
            return documents
        except Exception as e:
            logger.error(f"Error getting documents from {collection_name}: {e}")
            raise

    @staticmethod
    async def update_document(collection_name: str, document_id: str, update_data: dict) -> Optional[dict]:
        """Update a document by its ID"""
        try:
            db = get_database()
            if not ObjectId.is_valid(document_id):
                return None
            
            result = await db[collection_name].update_one(
                {"_id": ObjectId(document_id)}, 
                {"$set": update_data}
            )
            
            if result.modified_count:
                updated_doc = await db[collection_name].find_one({"_id": ObjectId(document_id)})
                return updated_doc
            return None
        except Exception as e:
            logger.error(f"Error updating document in {collection_name}: {e}")
            raise

    @staticmethod
    async def delete_document(collection_name: str, document_id: str) -> bool:
        """Delete a document by its ID"""
        try:
            db = get_database()
            if not ObjectId.is_valid(document_id):
                return False
            
            result = await db[collection_name].delete_one({"_id": ObjectId(document_id)})
            return result.deleted_count > 0
        except Exception as e:
            logger.error(f"Error deleting document from {collection_name}: {e}")
            raise

    @staticmethod
    async def get_documents_by_profile_id(collection_name: str, profile_id: str, sort_field: str = "order") -> List[dict]:
        """Get documents filtered by profile_id"""
        try:
            db = get_database()
            if not ObjectId.is_valid(profile_id):
                return []
            
            documents = await db[collection_name].find(
                {"profile_id": ObjectId(profile_id)}
            ).sort(sort_field, 1).to_list(1000)
            
            return documents
        except Exception as e:
            logger.error(f"Error getting documents by profile_id from {collection_name}: {e}")
            raise

    @staticmethod
    async def count_documents(collection_name: str, filter_dict: dict = None) -> int:
        """Count documents in a collection"""
        try:
            db = get_database()
            filter_dict = filter_dict or {}
            count = await db[collection_name].count_documents(filter_dict)
            return count
        except Exception as e:
            logger.error(f"Error counting documents in {collection_name}: {e}")
            raise

# Collection names
class Collections:
    PROFILES = "profiles"
    EXPERIENCES = "experiences"
    SKILLS = "skills"
    PROJECTS = "projects"
    CERTIFICATIONS = "certifications"
    CONTACT_SUBMISSIONS = "contact_submissions"
    EDUCATION = "education"