<template>
    <div class="bg-white text-lg w-1/4 p-5 flex flex-col gap-2 rounded-md shadow-md font-semibold">
        <router-link to="/Membar_Dashboard">Profile</router-link>
        <router-link to="/Membar_Event_History">Event History</router-link>
        <router-link to="/Membar_Donation_History">Donation History</router-link>
        <router-link to="/Membar_Payment_History">Payment History</router-link>
        <router-link to="/Membar_Change_Password">Change Password</router-link>
        <router-link to="/">Log out</router-link>
    </div>
</template>
<script setup>

</script>
<style scoped>
.router-link-active{
 color: rgb(201, 130, 0);
}
</style>