<template>
  <div class="w-full flex items-center justify-center">
    <div class="register w-1/2 h-full">
      <div class=" flex items-center justify-center px-5 py-5">
        <div class="text-gray-500 w-full">
          <div class="md:flex w-full">
            <div class="w-full py-10 px-5 md:px-10">
              <div class="text-center mb-10">
                <h1 class="font-bold text-3xl text-gray-900">REGISTER</h1>
                <p>Enter your information to register</p>
              </div>
              <form @submit.prevent="SubmitForm">
                <div class="flex -mx-3">
                  <div class="w-1/2 px-3 mb-5">
                    <label for="" class="text-xs font-semibold px-1">First name</label>
                    <div class="flex">
                      <div
                        class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                      >
                        <i class="mdi mdi-account-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="text"
                        class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="John"
                        name="first_name"
                        v-model="first_name"
                      />
                    </div>
                  </div>
                  <div class="w-1/2 px-3 mb-5">
                    <label for="" class="text-xs font-semibold px-1">Last name</label>
                    <div class="flex">
                      <div
                        class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                      >
                        <i class="mdi mdi-account-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="text"
                        class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="Smith"
                        name="last_name"
                        v-model="last_name"
                      />
                    </div>
                  </div>
                </div>
                <div class="flex -mx-3">
                  <div class="w-full px-3 mb-5">
                    <label for="" class="text-xs font-semibold px-1">Email</label>
                    <div class="flex">
                      <div
                        class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                      >
                        <i class="mdi mdi-email-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="email"
                        class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="johnsmith@example.com"
                        name="email"
                        v-model="email"
                      />
                    </div>
                  </div>
                </div>
                <input type="number" name="username" id="username" v-model="username" style="display:none">
                <div class="flex -mx-3">
                  <div class="w-full px-3 mb-12">
                    <label for="" class="text-xs font-semibold px-1">Password</label>
                    <div class="flex">
                      <div
                        class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                      >
                        <i class="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="password"
                        class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="************"
                        name="password"
                        v-model="password"
                      />
                    </div>
                  </div>
                </div>
                <div class="flex -mx-3">
                  <div class="w-full px-3 mb-5">
                    <button type="submit"
                      class="block w-full max-w-xs mx-auto bg-green-500 hover:bg-green-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                    >
                      REGISTER NOW
                    </button>
                  </div>
                </div>
                <div class="flex -mx-3">
                  <div class="w-full px-3 mb-5">
                    <router-link to="/account/login"
                      ><button
                        class="block w-full max-w-xs mx-auto bg-red-500 hover:bg-red-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                      >
                        LOG IN
                      </button>
                    </router-link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "Signup",
  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    };
  },

  methods: {
    SubmitForm(e) {
      const formData = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        username: parseInt('1000000'),
        password: this.password,
        password2: this.password,
          }

        console.log(formData)
          axios
              .post('/auth/sign-up/', formData)
              .then(response => {
                  this.$router.push('/')
                console.log(response)
              })
              .catch(error => {
                console.log(error)
              })
    },
  },
};
</script>
