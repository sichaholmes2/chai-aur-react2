import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";



//making a class
export class Service{
    client= new Client();
    databases;
    bucket;

    //making the cosntructor
    constructor(){
        this.client
             .setEndpoint(conf.appwriteUrl)
             .setProject(cont.appwriteProjectId);
             // adding the client values to account
              this.databases= new Databases(this.client)
              this.bucket= new Storage(this.client)
              
   
     }

     async createPost({title, slug, content, featuredImage,status, userId}){
        try {
            //we eill return this value
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
               //considering slug as document id
                slug,
                {
                    title, 
                     content, 
                     featuredImage,
                     status, 
                     userId
                    
                }


            )

        }catch(error){
            console.log("Appwrite service :: createPost :: error", error);

        }
     }
   
//taking slug separately to take slug first
     async updatePost({title, slug, content, featuredImage,status}){

        try{
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

        }
        catch(error){
            console.log("Appwrite service :: updatePost :: error", error);
        }

     }
    

     async deletePost(slug){
        try{
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug

            )
            //if document is deleted we return true;
            return true

        }catch(error){
            console.log("Appwrite service :: deletepost :: error", error);
            return false;

        }

     }
    

     async getPost(slug){
        try{
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )

        }catch(error){
            console.log("Appwrite service :: getPost :: error", error);
            return false

        }
     }


   async getPosts(queries=[Query.equal("status","active")]){
      try{
         return await this.databases.listDocuments(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            //queries are the ones mentioned above
            queries,
            100,
            0,
         )

      }catch(error){
        console.log("Appwrite service :: getPosts :: error", error);
        //return false in case there is no value
        return false;

      }
   }



   //methods for upload and delete files
   async uploadFile(file){
    try{
        return await this.bucket.createFile(
            conf.appwriteBucketId,
            ID.unique(),
            file


        )
        
        

     }catch(error){
       console.log("Appwrite service :: uploadFile :: error", error);
       //return false in case there is no value
       return false;

     }


   }



   async deleteFile(fileId){
    try{
        await this.bucket.deleteFile(
            conf.appwriteBucketId,
            fileId
        )

    }catch(error){
        console.log("Appwrite service :: deleteFile :: error", error);
        //return false in case there is no value
        return false;

    }

    

   }


   getFilePreview(fileId){
    return this.bucket.getFilePreview(
        conf.appwriteBucketId,
        fileId
    )
   }


}

//making the object
const service = new Service()


//exporting the object
export default service