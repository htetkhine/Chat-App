import { signInWithEmailAndPassword} from 'firebase/auth';       
import { appAuth } from '@/firebase/config';
import {ref } from 'vue'; 

let error = ref(null);
let signInUser = async(email,password)=>{
    try{
        let res = await signInWithEmailAndPassword(appAuth, email,password)
        if(!res){
            throw new Error("Can't Login Account")
            return res;
        }
    }catch(err){
        error.value = err.message
    }
}

let getSignInUser = ()=>{
    return{error,signInUser}
}

export default getSignInUser;