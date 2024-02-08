<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
let dropactive = ref()
let user = ref(JSON.parse(localStorage.getItem('user')))

function dropdown(item) {
  if(dropactive.value == item) {
    dropactive.value = ''
  } else {
    dropactive.value = item
  }
}
function logout() {
  localStorage.removeItem('user')
  localStorage.removeItem('token')
  router.push('/student-login')
}
</script>

<template>
  <div class="sidebar">
    <div class="welcome">
      <div class="user-photo">
        <img src="@/assets/images/default/pro-pic.jpg" alt="" srcset="">
      </div>
      <div class="message">
        <p>Welcome!</p>
        <h2>{{ user.name }}</h2>
      </div>
    </div>
    <div class="menus">
      <router-link to="/dashboard"
                   :class="($route.path === '/dashboard') ? 'item active' : 'item'">
        <font-awesome-icon :icon="['fas', 'fa-bars']"/>
        Dashboard
      </router-link>


      <!-- Management System  -->

      <a @click="dropdown('teachers')" v-if="user.role_id == 6" class="dropdown-menu">
        <div class="parentmenu">
          <font-awesome-icon :icon="['fas', 'fa-graduation-cap']"/>
          <span>Teachers</span>
          <font-awesome-icon :icon="['fas', 'fa-caret-down']"/>
        </div>
        <div v-if="dropactive == 'teachers'" class="drop-items">
          <router-link to="/dashboard/old-teachers" class="item">
            <font-awesome-icon :icon="['fas', 'fa-graduation-cap']"/>
            Ex Teachers
          </router-link>
          <router-link to="/dashboard/current-teachers" class="item">
            <font-awesome-icon :icon="['fas', 'fa-graduation-cap']"/>
            Current Teachers
          </router-link>
          <router-link to="/dashboard/new-teachers" class="item">
            <font-awesome-icon :icon="['fas', 'fa-graduation-cap']"/>
            New Teachers
          </router-link>
        </div>
      </a>

      <a @click="dropdown('students')" v-if="user.role_id == 7" class="dropdown-menu">
        <div class="parentmenu">
          <font-awesome-icon :icon="['fas', 'user-graduate']"/>
          <span>Students</span>
          <font-awesome-icon :icon="['fas', 'fa-caret-down']"/>
        </div>
        <div v-if="dropactive == 'students'" class="drop-items">
          <router-link to="/dashboard/old-students" class="item">
            <font-awesome-icon :icon="['fas', 'fa-graduation-cap']"/>
            Ex Students
          </router-link>
          <router-link to="/dashboard/current-students" class="item">
            <font-awesome-icon :icon="['fas', 'fa-graduation-cap']"/>
            Current Students
          </router-link>
          <router-link to="/dashboard/new-students" class="item">
            <font-awesome-icon :icon="['fas', 'fa-graduation-cap']"/>
            New Students
          </router-link>
          <router-link to="/dashboard/in-registration-process" class="item">
            <font-awesome-icon :icon="['fas', 'fa-graduation-cap']"/>
            In Registration Process
          </router-link>
        </div>
      </a>

      <!-- //student group course managemant -->
      <router-link v-if="user.role_id == 7" to="/dashboard/student-group-course"
                   :class="($route.path === '/dashboard/student-group-course') ? 'item active' : 'item'">
        <font-awesome-icon :icon="['fas', 'user-group']"/>
        Group
      </router-link>
      <!-- //end student group course managemant -->


      <router-link v-if="user.role_id == 6" to="/dashboard/group"
                   :class="($route.path === '/dashboard/group') ? 'item active' : 'item'">
        <font-awesome-icon :icon="['fas', 'user-group']"/>
        Group
      </router-link>
      <router-link v-if="user.role_id == 6 || user.role_id == 7" to="/dashboard/advisors"
                   :class="($route.path === '/dashboard/advisors') ? 'item active' : 'item'">
        <font-awesome-icon :icon="['fas', 'user-tie']"/>
        Advisors 
      </router-link>

      <!-- End Management system  -->


      <router-link v-if="user.role_id === 4" to="/my-registration"
                   :class="($route.path === '/my-registration') ? 'item active' : 'item'">
        <font-awesome-icon :icon="['fas', 'list-check']" />
        My Registration
      </router-link>
      <router-link v-if="user.role_id === 3" to="/verify-teacher"
                   :class="($route.path === '/verify-teacher') ? 'item active' : 'item'">
        <font-awesome-icon :icon="['fas', 'list-check']" />
        My Hiring
      </router-link>
      <router-link v-if="user.role_id == 3 || user.role_id == 4" to="/dashboard/my-schedule"
                   :class="($route.path === '/dashboard/my-schedule') ? 'item active' : 'item'">
        <font-awesome-icon :icon="['fas', 'fa-clock']"/>
        My Schedule
      </router-link>
      <router-link v-if="user.role_id === 3" to="/dashboard/teacher/join-class"
                   :class="($route.path === '/dashboard/teacher/join-class') ? 'item active' : 'item'">
        <font-awesome-icon :icon="['fas', 'fa-video']"/>
        My Class
      </router-link>
      
      <a v-if="user.role_id == 3 || user.role_id == 4" @click="dropdown('my-courses')" class="dropdown-menu">
        <div class="parentmenu">
          <font-awesome-icon :icon="['fas', 'fa-graduation-cap']"/>
          <span>My Courses</span>
          <font-awesome-icon :icon="['fas', 'fa-caret-down']"/>
        </div>
        <div v-if="dropactive == 'my-courses'" class="drop-items">
          <router-link v-if="user.role_id === 4" to="/dashboard/my-courses" class="item">
            <font-awesome-icon :icon="['fas', 'fa-graduation-cap']"/>
            My Courses
          </router-link>
          <router-link v-if="user.role_id === 3" to="/dashboard/ongoing-courses" class="item">
            <font-awesome-icon :icon="['fas', 'fa-graduation-cap']"/>
            Ongoing Courses
          </router-link>
          <router-link v-if="user.role_id === 3" to="/dashboard/all-courses" class="item">
            <font-awesome-icon :icon="['fas', 'fa-graduation-cap']"/>
            All Courses
          </router-link>
        </div>
      </a>
      
      <!-- <router-link v-if="user.role_id === 4" to="/dashboard/join-class"
                   :class="($route.path === '/dashboard/join-class') ? 'item active' : 'item'">
        <font-awesome-icon :icon="['fas', 'fa-video']"/>
        My Class
      </router-link> -->
      <!-- <router-link to="/dashboard/profile" :class="($route.path == '/') ? 'item active' : 'item'"><font-awesome-icon :icon="['fas', 'fa-user']" /> Profile</router-link> -->

      

      <router-link v-if="user.role_id == 3" to="/dashboard/my-advisor"
                   :class="($route.path === '/dashboard/my-advisor') ? 'item active' : 'item'">
        <font-awesome-icon :icon="['fas', 'fa-flag']"/>
        My Advisor
      </router-link>

      <!-- <router-link to="/dashboard/my-admin"
                   :class="($route.path === '/dashboard/my-admin') ? 'item active' : 'item'">
        <font-awesome-icon :icon="['fas', 'fa-flag']"/>
        My Admin
      </router-link> -->

      <router-link v-if="user.role_id == 4" to="/dashboard/my-advisor"
                   :class="($route.path === '/dashboard/my-advisor') ? 'item active' : 'item'">
        <font-awesome-icon :icon="['fas', 'fa-flag']"/>
        My Advisor
      </router-link>
      <router-link v-if="user.role_id == 4" to="/dashboard/my-teachers"
                   :class="($route.path === '/dashboard/my-teachers') ? 'item active' : 'item'">
        <font-awesome-icon :icon="['fas', 'fa-flag']"/>
        My Teachers
      </router-link>

      <router-link v-if="user.role_id == 3" to="/dashboard/my-students"
                   :class="($route.path === '/dashboard/my-students') ? 'item active' : 'item'">
        <font-awesome-icon :icon="['fas', 'fa-flag']"/>
        My Students
      </router-link>

      <router-link v-if="user.role_id == 4" to="/dashboard/my-purchases"
                   :class="($route.path === '/dashboard/my-purchases') ? 'item active' : 'item'">
        <font-awesome-icon :icon="['fas', 'fa-money-check']"/>
        My Purchases
      </router-link>

      <!-- Advisor -->

      <a v-if="user.role_id === 2" @click="dropdown('schedule')" class="dropdown-menu">
        <div class="parentmenu">
          <font-awesome-icon :icon="['fas', 'fa-graduation-cap']"/>
          <span>Schedule</span>
          <font-awesome-icon :icon="['fas', 'fa-caret-down']"/>
        </div>
        <div v-if="dropactive == 'schedule'" class="drop-items">
          <router-link to="/advisor/dashboard/schedule/list" class="item">
            <font-awesome-icon :icon="['fas', 'fa-graduation-cap']"/>
            List
          </router-link>
<!--          <router-link to="/advisor/dashboard/schedule/create" class="item">-->
<!--            <font-awesome-icon :icon="['fas', 'fa-graduation-cap']"/>-->
<!--            Create-->
<!--          </router-link>-->
        </div>
      </a>

      <router-link v-if="user.role_id == 2" to="/advisor/dashboard/enrollment"
                   :class="($route.path === '/advisor/dashboard/enrollment') ? 'item active' : 'item'">
        <font-awesome-icon :icon="['fas', 'fa-flag']"/>
        Enrollment
      </router-link>

      <router-link v-if="user.role_id == 2" to="/advisor/dashboard/students"
                   :class="($route.path === '/advisor/dashboard/students') ? 'item active' : 'item'">
        <font-awesome-icon :icon="['fas', 'fa-user']"/>
        Students
      </router-link>

      <router-link v-if="user.role_id == 2" to="/advisor/dashboard/teachers"
                   :class="($route.path === '/advisor/dashboard/teachers') ? 'item active' : 'item'">
        <font-awesome-icon :icon="['fas', 'fa-user']"/>
        Teachers
      </router-link>

      <router-link v-if="user.role_id == 2" to="/advisor/dashboard/group-list"
                   :class="($route.path === '/advisor/dashboard/group-list') ? 'item active' : 'item'">
        <font-awesome-icon :icon="['fas', 'user-group']"/>
        Group
      </router-link>

      <router-link v-if="user.role_id == 2" to="/advisor/dashboard/courses"
                   :class="($route.path === '/advisor/dashboard/courses') ? 'item active' : 'item'">
        <font-awesome-icon :icon="['fas', 'fa-book-open']"/>
        Course
      </router-link>

      <!-- Advisor Ends -->

      <a @click="dropdown('settings')" class="dropdown-menu">
        <div class="parentmenu">
          <font-awesome-icon :icon="['fas', 'fa-gear']"/>
          <span>Settings</span>
          <font-awesome-icon :icon="['fas', 'fa-caret-down']"/>
        </div>
        <div v-if="dropactive == 'settings'" class="drop-items">
          <router-link to="/dashboard/settings/update-profile" class="item">
            <font-awesome-icon :icon="['fas', 'fa-graduation-cap']"/>
            profile update
          </router-link>
          <router-link to="/dashboard/settings/update-password" class="item">
            <font-awesome-icon :icon="['fas', 'fa-graduation-cap']"/>
            password change
          </router-link>
        </div>
      </a>

      <!-- Student Management System  -->

      <!-- End Teacher Management system  -->

      <router-link v-if="user.role_id == 3 || user.role_id == 4" to="/dashboard/help-center"
                   :class="($route.path === '/dashboard/help-center') ? 'item active' : 'item'">
        <font-awesome-icon :icon="['fas', 'fa-question-circle']"/>
        Help Center
      </router-link>
      <a class="item" @click="logout">
        <font-awesome-icon :icon="['fas', 'fa-sign-out-alt']"/>
        Logout</a>
      <!-- <router-link to="" :class="($route.path == '/dashboard') ? 'item active' : 'item'"><font-awesome-icon :icon="['fas', 'fa-money-check']" /> My Achievements</router-link>
      <router-link to="" :class="($route.path == '/dashboard') ? 'item active' : 'item'"><font-awesome-icon :icon="['fas', 'fa-record-vinyl']" /> Recording</router-link>
      <router-link to="" :class="($route.path == '/dashboard') ? 'item active' : 'item'"><font-awesome-icon :icon="['fas', 'fa-folder']" /> Resources</router-link>
      <router-link to="" :class="($route.path == '/dashboard') ? 'item active' : 'item'"><font-awesome-icon :icon="['fas', 'fa-comment']" /> Help Center</router-link>
      <router-link to="" :class="($route.path == '/dashboard') ? 'item active' : 'item'"><font-awesome-icon :icon="['fas', 'fa-bell']" /> Updates</router-link>
      <router-link to="" :class="($route.path == '/dashboard') ? 'item active' : 'item'"><font-awesome-icon :icon="['fas', 'fa-sliders']" /> Settings</router-link> -->
    </div>
  </div>
</template>

<style scoped>
.sidebar {
    background: #FFFFFF;
    box-shadow: 7px 7px 10px -3px rgba(0, 0, 0, 0.25);
    /* height: 90vh; */
    height: 100%;
    overflow: auto;
}

.welcome {
    background: #F5F5F5;
    margin: 20px 0;
    padding: 20px;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 10px;
}

.user-photo {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: 1px solid gray;
    overflow: hidden;
}

.menus .item {
    background: #F5F5F5;
    padding: 10px 20px;
    margin: 10px 0;
    font-family: 'Inter';
    font-weight: 600;
    color: #000000;
    display: flex;
    gap: 15px;
    cursor: pointer;
    text-decoration: none;
}

.dropdown-menu {
  background: #F5F5F5;
  padding: 10px 20px;
  margin: 10px 0;
  font-family: 'Inter';
  font-weight: 600;
  color: #000000;
  cursor: pointer;
  text-decoration: none;
  display: grid;
  gap: 15px;
}

.parentmenu {
    display: flex;
    gap: 15px;
}

.active {
    /* background: #FFF5D8 !important; */
    background: #0fa3b1 !important;
    color: white !important;
}
</style>