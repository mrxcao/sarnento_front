import {ref} from 'vue';
import {defineStore } from 'pinia'
import http from '/src/services/http.js';

export const useAuth = defineStore('auth', ()=> {
    const token = ref(localStorage.getItem('token'));
    const user = ref(JSON.parse(localStorage.getItem('user')));

    
    function setToken(valueToken) {        
        localStorage.setItem('token', valueToken)        
        token.value = valueToken        
    }

    function setUser(userValue) {
        localStorage.setItem('user', JSON.stringify(userValue))
        user.value = userValue
    }

    
    async function checkToken() {
        try {
        const tokenAuth = 'Bearer ' + token.value;
        const { data } = await http.get("/token/validar", {
            headers: {
                Authorization: tokenAuth,
            },
        });
        return data;
        } catch (error) {
            console.log(error.response.data);
        }
    }

    return {
        token,
        user,
        setToken, 
        setUser,
        checkToken
    }

}  )