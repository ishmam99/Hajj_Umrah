<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import { useCommonStore } from '@/stores/common'
import { useCourseStore } from '@/stores/learning-center/course'

const areaListApi = 'area-list'
const dataApi = 'get-area-of-programs-courses/'
const router = useRouter()
const commonStore = useCommonStore()
const courseStore = useCourseStore()
const user = JSON.parse(localStorage.getItem('user'))

let menuTitle = user && user.role_id == 4 ? 'Enroll Me' : 'Area of Study'
let getAreas = ref([])
let navmenu = ref([])

async function menu() {
  await axios
    .get(import.meta.env.VITE_ELEARNING_BASE_API + areaListApi)
    .then((response) => {
      getAreas.value = response.data
    })
  navmenu.value = await Promise.all(
    getAreas.value.map(async (object) => {
      const response = await axios.get(
        import.meta.env.VITE_ELEARNING_BASE_API + dataApi + object.id
      )
      return {
        menu: response.data.data.area,
        child_menu: response.data.data.programs.map((object) => object),
      }
    })
  )
}

function onMenuSelect(menuType, id) {
  if (menuType == 'parent') {
    courseStore.getCourseList(id)
    courseStore.getAreaPrograms(id)
    router.push('/learning-center/areas/' + id)
  } else if (menuType == 'child') {
    courseStore.getProgramDetails(id)
    courseStore.getCourseList(id)
    router.push('/learning-center/programs/' + id)
  }
  commonStore.loading = true
}
onMounted(() => {
  menu()
})
</script>

<template>
  <div class="programs">
    <nav>
      <menu>
        <menuitem id="demo1">
          <a class="menu-item"
            >{{ menuTitle }} &nbsp;
            <font-awesome-icon :icon="['fas', 'fa-caret-down']"
          /></a>
          <menu>
            <menuitem v-for="area in navmenu" :key="area">
              <router-link
                class="menu-item"
                @click="onMenuSelect('parent', area.menu.id)"
                :to="'/learning-center/areas/' + area.menu.id"
                >{{ area.menu.title }}
                <span v-if="area.child_menu != ''"
                  ><font-awesome-icon :icon="['fas', 'fa-caret-right']" /></span
              ></router-link>
              <menu v-if="area.child_menu != ''">
                <menuitem
                  ><a
                    v-for="program in area.child_menu"
                    :key="program"
                    class="menu-item"
                    @click="onMenuSelect('child', program.id)"
                    >{{ program.name }}</a
                  ></menuitem
                >
              </menu>
            </menuitem>
          </menu>
        </menuitem>
      </menu>
    </nav>
  </div>
</template>

<style scoped>
#demo1 menuitem,
menuitem .menu-item {
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}

* {
  font-family: math;
}
.programs {
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.programs > nav > menu > menuitem > .menu-item {
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

nav {
  box-shadow: none;
}

nav menuitem {
  position: relative;
  display: block;
  opacity: 0;
  cursor: pointer;
}

nav menuitem > menu {
  position: absolute;
  pointer-events: none;
  margin-top: 0;
  padding: 0;
  min-width: 250px;
}
nav > menu {
  display: flex;
  margin: 0;
  padding: 0;
}

nav > menu > menuitem {
  pointer-events: all;
  opacity: 1;
}
menu menuitem .menu-item {
  white-space: nowrap;
  display: block;
  margin: 0;
}

menuitem:hover > menu {
  pointer-events: initial;
}
menuitem:hover > menu > menuitem,
menu:hover > menuitem {
  opacity: 1;
}
nav > menu > menuitem menuitem menu {
  transform: translateX(100%);
  top: 0;
  right: 0;
}

nav .menu-item {
  background-color: white;
  color: inherit;
  transition: background 0.5s, color 0.5s, transform 0.5s;
  margin: 0px 6px 6px 0px;
  padding: 6px 30px;
  box-sizing: border-box;
  position: relative;
  text-decoration: none;
}

nav .menu-item:hover:before {
  content: '';
  top: 0;
  left: 0;
  position: absolute;
  background: rgba(6, 228, 236, 0.2);
  width: 100%;
  height: 100%;
}

nav > menu > menuitem > menu > menuitem {
  transition: transform 0.6s, opacity 0.6s;
  transform: translateY(150%);
  opacity: 0;
}
nav > menu > menuitem:hover > menu > menuitem,
nav > menu > menuitem.hover > menu > menuitem {
  transform: translateY(0%);
  opacity: 1;
}

menuitem > menu > menuitem > menu > menuitem {
  transition: transform 0.6s, opacity 0.6s;
  transform: translateX(195px) translateY(0%);
  opacity: 0;
}
menuitem > menu > menuitem:hover > menu > menuitem,
menuitem > menu > menuitem.hover > menu > menuitem {
  transform: translateX(0) translateY(0%);
  opacity: 1;
}

nav menuitem menu menuitem {
  z-index: 99999;
}
</style>
