<template>
  <Default-Layout>
    <div
      class="w-full pt-[120px] 2xl:h-screen py-[50px] 2xl:py-[0px] flex justify-center flex-row-reverse gap-4 items-center bg-slate-50"
    >
      <form @submit.prevent="login()">
        <div class="h-[550px] w-[500px] bg-[#ffffff] px-5 py-10 rounded-lg shadow-md">
          <img src="/src/assets/image/common/n1.png" alt="" class="w-20 m-auto" />
         
        <p class="text-2xl font-bold text-center text-[#0b2036]">{{ route.name.replace(/_/g, ' ') }}</p>
        <div v-if="errorData?.message" class="text-red-500 bg-red-100 rounded-lg p-2 my-2 text-center flex justify-center">
          {{ errorData.message}} !!
        </div>
          <div>
            <p class="font-semibold py-1.5">Email</p>
          <input
            @change="error = false"
            v-model="loginData.email"
            type="email"
            class="border border-gray-300 focus:outline-yellow-600 rounded-md w-full py-1.5 px-3"
          />
          </div>
          <div class="relative">
            <p class="font-semibold py-1.5">Password</p>
          <input
            v-model="loginData.password"
            :type="showPassword ? 'text' : 'password'"
            class="border border-gray-300 focus:outline-yellow-600 rounded-md w-full py-1.5 px-3"
          />
          <button type="button" @click="togglePasswordVisibility" class="absolute right-2 top-10">
            <span v-if="showPassword">Hide</span>
            <span v-else>Show</span>
          </button>
          </div>
          <div class="flex justify-between items-center gap-5 my-3">
            <div class="flex items-center gap-2">
              <input type="checkbox" class="" />
              <p class="text-xs">Remember me</p>
            </div>
            <p class="text-xs text-gray-400">Forgot Password?</p>
          </div>
          <p v-if="error" class="text-red-600 text-center font-bold">No user found</p>
          <button
            type="submit"
            class="bg-[#0b2036] w-full px-3 py-2 rounded-md my-3 text-white font-semibold flex justify-center items-center gap-2"
            :disabled="loginload"
          >
          <svg
              v-if="loginload"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="w-6 h-6 animate-spin"
              fill="currentColor"
            >
              <path
                d="M18.364 5.63604L16.9497 7.05025C15.683 5.7835 13.933 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12H21C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C14.4853 3 16.7353 4.00736 18.364 5.63604Z"
              ></path>
            </svg>
            Login
          </button>

          <div class="flex text-sm justify-between gap-2">
            <p class="text-gray-500">Don't have an account ?</p>
            <router-link
              to="/Signup"
              class="text-gray-500 font-semibold hover:text-[#0b2036] cursor-pointer"
              >Register</router-link
            >
          </div>
        </div>
      </form>

      <div>
        <img
          v-if="route.name == 'Member Login'"
          src="@/assets/image/common/n21.avif"
          alt=""
          class="bg-white rounded-lg h-[550px] w-[500px]"
        />
        <img
          v-if="route.name == 'Student Login'"
          src="@/assets/image/common/n21.avif"
          alt=""
          class="bg-white rounded-lg h-[550px] w-[500px]"
        />
        <img
          v-if="route.name == 'Teacher Login'"
          src="@/assets/image/common/n21.avif"
          alt=""
          class="bg-white rounded-lg h-[550px] w-[500px]"
        />
        <img
          v-if="route.name == 'Admin Login'"
          src="@/assets/image/common/login.png"
          alt=""
          class="bg-white rounded-lg h-[550px] w-[500px]"
        />
        <img
          v-if="route.name == 'Customer Login'"
          src="@/assets/image/common/login-2.png"
          alt=""
          class="bg-white rounded-lg h-[550px] w-[500px]"
        />
        <img
          v-if="route.name == 'Vendor Login'"
          src="@/assets/image/common/login-9.png"
          alt=""
          class="bg-white rounded-lg h-[550px] w-[500px]"
        />
        <img
          v-if="route.name == 'Agent Login'"
          src="@/assets/image/common/login-2.png"
          alt=""
          class="bg-white rounded-lg h-[550px] w-[500px]"
        />
        <img
          v-if="route.name == 'Imam Login'"
          src="@/assets/image/common/login-8.png"
          alt=""
          class="bg-white rounded-lg h-[550px] w-[500px]"
        />
        <img
          v-if="route.name == 'Support_Login'"
          src="@/assets/image/common/login-8.png"
          alt=""
          class="bg-white rounded-lg h-[550px] w-[500px]"
        />
        <img
          v-if="route.name == 'Finance Login'"
          src="@/assets/image/common/login-4.png"
          alt=""
          class="bg-white rounded-lg h-[550px] w-[500px]"
        />
        <img
          v-if="route.name == 'Learning Center Login'"
          src="@/assets/image/common/login-5.png"
          alt=""
          class="bg-white rounded-lg h-[550px] w-[500px]"
        />
        <img
          v-if="route.name == 'Supply Chain Management Login'"
          src="@/assets/image/common/login-6.png"
          alt=""
          class="bg-white rounded-lg h-[550px] w-[500px]"
        />
        <img
          v-if="route.name == 'Imam Management Login'"
          src="@/assets/image/common/login-2.png"
          alt=""
          class="bg-white rounded-lg h-[550px] w-[500px]"
        />
        <img
          v-if="route.name == 'Agent Management Login'"
          src="@/assets/image/common/login-7.png"
          alt=""
          class="bg-white rounded-lg h-[550px] w-[500px]"
        />
        <img
          v-if="route.name == 'HR Login'"
          src="@/assets/image/common/login-7.png"
          alt=""
          class="bg-white rounded-lg h-[550px] w-[500px]"
        /><img
          v-if="route.name == 'Customer Management Login'"
          src="@/assets/image/common/login-7.png"
          alt=""
          class="bg-white rounded-lg h-[550px] w-[500px]"
        />
        <img
          v-if="route.name == 'Operation Login'"
          src="@/assets/image/common/login-8.png"
          alt=""
          class="bg-white rounded-lg h-[550px] w-[500px]"
        />
      </div>
    </div>
  </Default-Layout>
</template>
<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { useAuthStore } from '@/stores/AuthStore'
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Tilt from 'vanilla-tilt-vue'
import { useToast } from "/components/ui/toast/use-toast";
const { toast } = useToast();
const errorData = ref()
const loginload = ref(false)
const route = useRoute()
const router = useRouter()
const error = ref(false)
const showPassword = ref(false);
  const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const loginData = ref({
  email: '',
  password: ''
})
const authStore = useAuthStore()
const login =async () => {
  if (loginData.value.email == '' || loginData.value.password == '') {
    alert('Email or password is missing')
  } else {

    loginload.value = true
    try {
      const data = await api().post("user/login", loginData.value);
      console.log(data.data, "logdata");
      console.log(data.data.user, data.data.token, data.data.role[0].name)
      authStore.login(data.data.user, data.data.token, data.data.role[0].name,)
      console.log(authStore.role);
      if (authStore.role == 'Admin') {
        authStore.currentDashboard = "Admin_Dashboard"
        router.push({ name: 'Admin_Dashboard' })
      }
      else if (authStore.role == 'Hajj') {
        console.log('ssd')
        authStore.currentDashboard = "Hajj_Management_System"
        router.push('Hajj_Management_System')
      }
      else if (authStore.role == 'Umrah') {
        authStore.currentDashboard = "Umrah_Management_System"
        router.push({ name: 'Umrah_Management_System' })
      }
      else if (authStore.role == 'Travel') {
        authStore.currentDashboard = "Travel_Management_System"
        router.push({ name: 'Travel_Management_System' })
      }
      else if (authStore.role == 'Service') {
        authStore.currentDashboard = "Social_Service_Dashboard_Profile"
        router.push({ name: 'Social_Service_Dashboard_Profile' })
      }
      else if (authStore.role == 'Media') {
        authStore.currentDashboard = "Media_And_Com_Profile"
        router.push({ name: 'Media_And_Com_Profile' })
      }
      else if (authStore.role == 'Operation') {
        authStore.currentDashboard = "Opration_Management_profile"
        router.push({ name: 'Opration_Management_profile' })
      }
      else if (authStore.role == 'Vendor') {
        authStore.currentDashboard = "vendor_profile"
        router.push({ name: 'vendor_profile' })
      }
      else if (authStore.role == 'Agent') {
        authStore.currentDashboard = "Agent_Dashboard_Profile"
        router.push({ name: 'Agent_Dashboard_Profile' })
      }
      else if (authStore.role == 'AdminImam') {
        authStore.currentDashboard = "Imam_Management_Dashboard_Profile"
        router.push({ name: 'Imam_Management_Dashboard_Profile' })
      }
      else if (authStore.role == 'AdminCustomer') {
        authStore.currentDashboard = "Customer_Management_Profile"
        router.push({ name: 'Customer_Management_Profile' })
      }
      else if (authStore.role == 'AdminAgent') {
        authStore.currentDashboard = "Agent_Management_Profile"
        router.push({ name: 'Agent_Management_Profile' })
      }
      else if (authStore.role == 'Imam') {
        authStore.currentDashboard = "imam_Dashboard_Profile"
        router.push({ name: 'imam_Dashboard_Profile' })
      }
      else if (authStore.role == 'Support') {
        authStore.currentDashboard = "Support_Dashboard_Profile"
        router.push({ name: 'Support_Dashboard_Profile' })
      }
      else if (authStore.role == 'Finance') {
        authStore.currentDashboard = "/Finance_Dashboard/Profile"
        router.push({ name: 'Finance_Dashboard_Profile' })
      }
      else if (authStore.role == 'Supply') {
        authStore.currentDashboard = "Supply_Admin_Profile"
        router.push({ name: 'Supply_Admin_Profile' })
      }
      else if (authStore.role == 'Hr') {
        authStore.currentDashboard = "HR_Dashboard_Proile"
        router.push({ name: 'HR_Dashboard_Proile' })
      }
      else if (authStore.role == 'Volunteer') {
        authStore.currentDashboard = "/volunteer_management"
        router.push({ name: 'volunteer_profile' })
      }
      else if (authStore.role == 'Member') {
        authStore.currentDashboard = "Member_Profile"
        router.push({ name: 'Member_Profile' })
      }
       else if (authStore.role == 'Learning-center') {
      authStore.currentDashboard = "/lms_Management_profile"
      router.push({ name: 'LMS_profile' })
      }
      
    } catch (error) {
      console.log(error);
      errorData.value = error.response.data
      console.log(errorData.value.message);
    }
    loginload.value = false

  }
}
</script>
