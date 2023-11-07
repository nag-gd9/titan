import axios from 'axios';
import { defineStore } from 'pinia';
import { router } from '@/routers';

export const AUTH = defineStore({
    id: 'auth',
    state: () => ({
        // initialize state from local storage to enable user to stay logged in
        user: {
            'token': JSON.parse(localStorage.getItem('token')),
            'username': null,
            'roles': []
        },
        returnUrl: null
    }),
    actions: {
        async login(username, password) {
            const response = await axios.post('/auth/jwt/create/', { username, password })
            if (response) {
                this.user.token = response.data;
                // store user details and jwt in local storage to keep user logged in between page refreshes
                localStorage.setItem('token', JSON.stringify(response.data));
                // redirect to previous url or default to home page
                router.push(this.returnUrl || '/');
            }
            return response
        },
        logout() {
            console.log('user logged out')
            this.user.token = null;
            localStorage.removeItem('token');
            this.returnUrl = '/'
            router.push('/login');
        },
        register(data) {
            return axios.post('/signup', {
              username: data.username,
              email: data.email,
              password: data.password
            });
        },
        user_data() {
            let roles = []
            axios.get('/api/v1/profile/', {}).then(function (response) {
                console.log(response);
                roles = response.data.groups
            })
            this.user.roles = roles
        }
    }
});
