<script setup>
const user = JSON.parse(localStorage.getItem('user'))
</script>

<template>
  <div class="main-header">
    <router-link to="/" class="logo">
      <img src="@/assets/islamic-digital-lane/images/brand/logo.png" alt="" srcset="" />
    </router-link>
    <router-link to="/learning-center" class="logo">
      Islamic Digital Lane <br />
      Learning <br />
      Center
    </router-link>
    <div class="dashboard-type">
      <span v-if="user.role_id == 3">Teacher's Dashboard</span>
      <span v-if="user.role_id == 6">Teacher Management Dashboard</span>
      <span v-if="user.role_id == 7">Student Management Dashboard</span>
      <span v-if="user.role_id == 2">Advisor Dashboard</span>
    </div>
    <div class="right-menu">
      <router-link
        v-if="!user"
        to="/teacher-login"
        class="login-btn text-white bg-blue-500 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-sm rounded text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Teacher Login
      </router-link>
      <router-link
        v-if="!user"
        to="/student-login"
        class="login-btn text-white bg-green-500 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-sm rounded text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Student Login
      </router-link>
      <a
        v-if="!user"
        href="https://learningcenter.islamicdigitallane.com/login"
        class="login-btn text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-sm rounded text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Advisor Login
      </a>
      <a
        v-if="!user"
        href="https://learningcenter.islamicdigitallane.com/login"
        class="login-btn text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-sm rounded text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Administrator Login
      </a>
      <div v-if="user && user - role_id == 4" class="filter">
        <font-awesome-icon :icon="['fas', 'fa-magnifying-glass']" />
      </div>
      <div v-if="user && user - role_id == 4" class="favorite">
        <font-awesome-icon :icon="['fas', 'fa-heart']" />
      </div>
      <div v-if="user && user - role_id == 4" class="cart">
        <font-awesome-icon :icon="['fas', 'fa-cart-shopping']" />
      </div>
      <div class="notification">
        <font-awesome-icon :icon="['fas', 'fa-bell']" />
      </div>
      <router-link v-if="user" to="/dashboard" class="float-right">
        <font-awesome-icon :icon="['fas', 'fa-user']" />
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.dashboard-type {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 25px;
  /* font-size: 2vw; */
  /* overflow: hidden; */
}

.dashboard-type > * {
  margin-left: 15%;
}

.login-btn {
  font-size: 12px !important;
}
.main-header {
  display: grid;
  grid-template-columns: 0.1fr 0.1fr 0.4fr 0.4fr;
  background: #0fa3b1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 0 50px;
  position: relative;
}
.logo {
  display: flex;
  align-items: center;
  color: white;
  line-height: 1;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
}

/* Category */

.categories {
  background: white;
  color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.category-items {
  display: grid;
  width: 300px;
  position: absolute;
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  top: 10vh;
  left: 15.1vw;
  z-index: 99999;
}

.category-items > * {
  text-decoration: none;
  color: inherit;
  padding: 10px;
  font-family: 'Inter';
  cursor: pointer;
}

.category-items *:last-child {
  text-decoration: none;
  color: inherit;
  padding: 10px;
  border-bottom: none;
  cursor: pointer;
}

.category-items > *:hover {
  background-color: rgb(240, 240, 240);
}

/* Right menu */

.right-menu {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
}

.right-menu > * {
  color: white;
  cursor: pointer;
  font-size: 18px;
}

.right-menu > *:hover {
  color: rgb(236, 236, 236);
}
.logo {
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
}

.logo img {
  height: 100%;
  width: 80px;
}
</style>
