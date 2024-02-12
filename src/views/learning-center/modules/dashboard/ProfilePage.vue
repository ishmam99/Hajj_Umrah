<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useCommonStore } from '@/stores/common'

const commonStore = useCommonStore()
let user = ref({})

async function userInfo(){
    user.value = JSON.parse(localStorage.getItem('user'))
    commonStore.loading = false
}

onMounted(() => {
  userInfo()
})

onUnmounted(() => {
  commonStore.loading = true
})
</script>

<template>
    <div class="dashboard-content">
        <div class="dashboard-title">
            <font-awesome-icon :icon="['fas', 'fa-user']" /> Personal Details
        </div>

        <div class="personal-details">
            <div class="personal-info">
                <div class="form-element">
                    <label for="">Full Name</label>
                    <input type="text" v-model="user.name">
                </div>
                <div class="form-element">
                    <label for="">Email</label>
                    <input type="text" v-model="user.email">
                </div>
                <div class="form-element">
                    <label for="">Phone</label>
                    <input type="text" v-model="user.phone_no">
                </div>
                <div class="form-element">
                    <label for="">Address</label>
                    <input type="text" v-model="user.address">
                </div>
            </div>
            <div class="photo">
                <div class="image">
                    <img src="@/assets/images/default/profile-pic.png" alt="">
                </div>
                <div class="edit-button">
                    <button>Edit Details</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.dashboard-content {
    padding: 20px;
    height: 70vh;
    overflow: auto;
}
.dashboard-title {
    display: flex;
    justify-content: start;
    gap: 10px;
    font-size: 20px;
    font-weight: bold;
}
.personal-details {
    background: #F5F5F5;
    box-shadow: 4px 4px 7px -2px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    margin: 30px 0;
    padding: 20px;

    display: grid;
    grid-template-columns: 1fr 0.4fr;
    gap: 20px;
}

.form-element {
    display: grid;
    gap: 10px;
    margin: 20px;
    font-family: math;
}

.form-element input {
    padding: 15px;
    border-radius: 5px;
}

.form-element label {
    font-weight: bold;
    font-size: 14px;
}

.photo {
    position: relative;
    padding: 20px;
}

.photo .image {
    border-radius: 50%;
    width: 100%;
    overflow: hidden;
}

.photo .image img {
    width: 100%;
}

.photo .edit-button {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -50%);
}

.photo .edit-button button {
    background: #FFC700;
    border-radius: 5px;
    padding: 10px 20px;
    font-weight: 600;
    font-size: 20px;
    color: #FFFFFF;
}
</style>