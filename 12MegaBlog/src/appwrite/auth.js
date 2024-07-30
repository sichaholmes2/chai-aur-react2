import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";


//exporting a class AuthService
export class AuthService{
 //making two properties
  client= new Client();
  account;

  //making a constructor so that methods are automatically called when object is made
  constructor(){
     this.client
          .setEndpoint(conf.appwriteUrl)
          .setProject(conf.appwriteProjectId);
          // adding the client values to account
           this.account= new Account(this.client)

  }


  //creating a method for the wrapper
 // if u switch from appwrite to firebase for e.g just change this

  async createAccount({email, password, name}){

    //using trycatch in case account is not created
    try{
        const userAccount=await this .account.create(ID.unique(),email, password, name);

        //check if user acc exits then try for login. 
        if(userAccount){
            //call another method
            return this.login({email, password})
            
        }
        else{
            return userAccount
        }

        

    }catch(error){
        throw error;

    }

  }


 //creating another method for login
  async login({email, password}){

    try{
      return  await this.account.createEmailPasswordSession(email, password)


    } catch(error){

    }

  }

  //if i land on home page i need to know if i am already logged in
  async getCurrentUser(){
    try {
        return await this.account.get()

    }catch(error){
        
        console.log("Appwrite service :: getCurrentUser :: error", error)


    }


    //i fthere is no error present
    return null
  }


 



  async logout(){
    try {
        await this.account.deleteSessions()

    }catch(error){
        console.log("Appwrite service :: getCurrentUser :: error", error)

    }

  }

}


//making object authService
const authService = new AuthService()

//exporting the object authService
export default authService


