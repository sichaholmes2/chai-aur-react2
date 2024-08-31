import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";


export class AuthService{
    //making two properties
    client= new Client();
    account;

    //making a constructr
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
       // inserting the valuues into clients account
       this.account=new Account(this.client)

    }
    //making a wrapper for appwrite services to reduce dependencies
    //u can make with async and promises

    async createAccount({email, password, name}){
        //try catch if it fails
        try {
            
          const userAccount=  await this.account.create(ID.unique(),email, password, name)
            //checking if user account exists
            if(userAccount){
                //if user account exists i want tologin dorectly
                this.login({email, password})


            }else{
                return userAccount
            }



        } catch (error) {
            throw error;
        }
    }
   async login({email, password}){
    try {
       return await this.account.createEmailPasswordSession(email, password)
        
    } catch (error) {
        throw error;
        
    }
   }




   //checking if someone is loggedin or not
   async getCurrentUser(){
    try {
        return await this.account.get();
    } catch (error) {
        console.log("Appwrite serive :: getCurrentUser :: error", error);
    }

    return null;
   }



   //method for logout
   async logout(){
     try {
        await this.account.deleteSession('current')
        
     } catch (error) {
        console.log("appwrite service logout error", error)
        
     }
   }

}

//exporting as an object
const authService=new AuthService();


export default authService
