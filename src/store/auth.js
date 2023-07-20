import {ref, computed} from 'vue';
import {defineStore } from 'pinia'
import http from '/src/services/http.js';
import router from '../router'

export const useAuth = defineStore('auth', ()=> {
    const token = ref(localStorage.getItem('token'));
    const user = ref(JSON.parse(localStorage.getItem('user')));
    const authOk  = ref(false)

    function setAuthOk(isAuth) {
         authOk.value = isAuth
    }
    
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
            clear();
            console.log(error.response.data);
        }
    }

    
    function isAuth() {
        return token.value && user.value
    }

    const fullName = computed(()=> {
        return user.value?.username    
    }) 
        
    const avatar = computed(()=> {
        return user.value?.avatar
    }) 

    function clear() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');        
        token.value = '';
        user.value = '';
        setAuthOk(false)
        router.push({name:'home'})
      }

    return {
        token,
        user,
        setToken, 
        setUser,
        checkToken,
        isAuth,
        fullName,
        avatar,
        clear,
        authOk,
        setAuthOk
    }

})