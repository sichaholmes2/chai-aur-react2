//bucket or appwrite part made separate
import conf from "../conf/conf.js";
import { Client, Account, ID , Databases, Storage, Query} from "appwrite";

export class Service{
    client = new Client()
    database;
    bucket;
    //making the constructor
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);

        this.databases=new Databases(this.client);
        this.bucket= new Storage(this.client)


    }
 async createPost({title, slug, content, featuredImage, status, userId}){
    try {
        return await this.databases.createDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            //slug is considered as document id
            slug,
            //passing the object
            {
                title,
                content,
                featuredImage,
                status,
                userId

            }
            
        )
        
    } catch (error) {
        console.log("Appwrite service :: createPost :: error", error)
        
    }

 }


 //for update document
 async updatePost(slug, {title, content, featuredImage, status}){
    try {
        return await this.databases.updateDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
            {
                title,
                content,
                featuredImage,
                status,

            }
        )
    } catch (error) {
        console.log("Appwrite serive :: updatePost :: error", error);
    }
}
 

 async deletePost(slug){
    try {
        await this.databases.deleteDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug
        )
        return true
        
    } catch (error) {
        console.log("Appwrite service:: deletePost:: error", error)
        return false
        
    }

 }

 async getPost(slug){
    try {
        return await this.databases.getDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug

        )
        
    } catch (error) {
        console.log("Appwrite service :: createPost :: error", error)
        
    }

 }


 //getting the posts with queries status type active
 async getPosts(queries =[Query.equal("status","active")]){
    try {
        return await this.databases.listDocuments(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            queries

        )
        
    } catch (error) {
        console.log("Appwrite service:: getPost:: error", error)
        return false
        
    }

 }






 //file upload services
 async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite serive :: uploadFile :: error", error);
            return false
        }
    }

 async deleteFile(fileId){
    try {
         await this.bucket.deleteFile(
            conf.appwriteDatabaseId,
           fileId


        )
        return true
        
    } catch (error) {
        console.log("Appwrite service:: deletePost:: error", error)
        return false
        
    }
 }


 getFilePreview(fileId){
    return this.bucket.getFilePreview(
        conf.appwriteBucketId,
        fileId
    )
 }




}

//making an object and xporting it
const service=new  Service()

export default service
