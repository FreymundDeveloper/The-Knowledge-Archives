<template>
    <div class="auth-content">
        <div class="auth-modal">
            <img src="@/assets/logo.png" alt="Logo" width="200" />
            <hr>
            <div class="auth-title">{{ showSignup ? 'Register' : 'Login' }}</div>

            <input type="text" v-if="showSignup" v-model="user.name" placeholder="Name">
            <input type="text" name="email" v-model="user.email" placeholder="Email">
            <input type="password" name="password" v-model="user.password" placeholder="Password">
            <input type="password" v-if="showSignup" v-model="user.confirmPassword" placeholder="Confirm the password">

            <button v-if="showSignup" @click="signup">Register</button>
            <button v-else @click="signin">Login</button>

            <a href @click.prevent="showSignup = !showSignup">
                <span v-if="showSignup">Do you have a registration? Between here!</span>
                <span v-else>Don't have a registration? Register here!</span>
            </a>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { baseApiUrl, showError, userKey } from '@/global'

export default {
    name: 'AuthPage',
    data: function() {
        return {
            showSignup: false,
            user: {}
        }
    },
    methods: {
        signin() {
            axios.post(`${baseApiUrl}/signin`, this.user)
                .then(res => {
                    this.$store.commit('setUser', res.data)
                    localStorage.setItem(userKey, JSON.stringify(res.data))
                    this.$router.push({ path: '/' })
                })
                .catch(showError)
        },
        signup() {
            axios.post(`${baseApiUrl}/signup`, this.user)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.user = {}
                    this.showSignup = false
                })
                .catch(showError)
        }
    }
}
</script>

<style>
    .auth-content {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .auth-modal {
        background-color: #fff;
        width: 350px;
        padding: 35px;
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);

        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .auth-title {
        font-size: 1.2rem;
        font-weight: 100;
        margin-top: 10px;
        margin-bottom: 15px;
    }

    .auth-modal input {
        border: 1px solid #bbb;
        width: 100%;
        margin-bottom: 15px;
        padding: 3px 8px;
        outline: none;
    }

    .auth-modal button {
        align-self: flex-end;
        background-color: #2460ae;
        color: #fff;
        padding: 5px 15px;
    }

    .auth-modal a {
        margin-top: 35px;
    }

    .auth-modal a span {
        font-size: 0.8rem;
    }

    .auth-modal hr {
        border: 0;
        width: 90%;
        height: 1px;
        background-color:rgba(220, 220, 220, 0.75);
    }
</style>