<template>
    <div class="bg-white text-lg w-1/4 p-5 h-fit flex flex-col gap-2 rounded-md shadow-md font-semibold">
        <router-link to="/Membar_Dashboard">Profile</router-link>
        <div class="flex flex-col gap-2 overflow-hidden ">
            <router-link to="/Membar_Event_History">Event</router-link>
            <router-link to="/Select_Imam">Imam</router-link>
            <router-link to="/Select_Volunteer">Volunteer</router-link>
            <router-link to="/Membar_Donation_History">Donation</router-link>
            <router-link to="/Membar_Payment_History" class="">Payment</router-link>
            <router-link to="/" class="">Appointment</router-link>
            <router-link to="/" class="">Change Password</router-link>
            <button type="button" @click="store.logout()" class="py-2 px-5 bg-yellow-600 rounded-md text-white">Log out</button>
        </div>
    </div>
</template>

<script setup>
import { watch,ref } from 'vue'
import { useAuthStore } from '/src/stores/AuthStore'
import { useRouter } from 'vue-router';

const router = useRouter();
const store = useAuthStore()

watch(() => store.isAuthenticated, (newIsAuthenticated) => {
    console.log( newIsAuthenticated);

    if (!newIsAuthenticated) {
        router.push('/');
    }
})

</script>
<style scoped>
.router-link-active{
 color: rgb(201, 130, 0);
}
</style>