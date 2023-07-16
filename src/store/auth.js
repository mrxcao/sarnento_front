import {ref} from 'vue';
import {defineStore } from 'pinia'

export const useAuth = defineStore('auth', ()=> {
    const token = ref(localStorage.getItem('token'));
    const user = ref(JSON.parse(localStorage.getItem('user')));

    
    function setToken(valueToken) {        
        localStorage.setItem('token', valueToken)        
        token.value = valueToken        
    }

    function setUser(userValue) {
        localStorage.setItem('user', JSON.stringify(userValue))
        user.value = value
    }

    return {
        setToken, 
        setUser
    }

}  )