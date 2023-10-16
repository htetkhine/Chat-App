import { createUserWithEmailAndPassword } from 'firebase/auth';    
import { appAuth } from '@/firebase/config';
import { ref } from 'vue'; 

let error = ref(null);
let createAccount = async(email,password,displayName)=>{
    try{
        let res = await createUserWithEmailAndPassword(appAuth, email,password);
        if(!res){
          throw new Error('Could not create new user!');          
        }
        await res.user.updateProfile({displayName});
        return res;
      }catch(err){
        error.value = err.message;
      }  
}
let userSignUp = ()=>{
    return {error,createAccount};
}

export default userSignUp;