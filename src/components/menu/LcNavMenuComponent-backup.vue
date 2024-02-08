<script setup>
import { useCourseStore } from '@/stores/learning-center/course'

const courseStore = useCourseStore()

let getAreas = ref([])

async function areas() {
  await axios
    .get(import.meta.env.VITE_ELEARNING_BASE_API + areaListApi)
    .then((response) => {
      getAreas.value = response.data
    })
}
</script>

<template>
  <div class="programs">
    <nav>
      <menu>
        <menuitem id="demo1">
          <a class="menu-item"
            >Area of Study &nbsp;
            <font-awesome-icon :icon="['fas', 'fa-caret-down']"
          /></a>
          <menu>
            <menuitem>
              <router-link class="menu-item" to="/learning-center/areas/1"
                >English Study
                <font-awesome-icon :icon="['fas', 'fa-caret-right']"
              /></router-link>
              <menu>
                <menuitem
                  ><router-link
                    class="menu-item"
                    to="/learning-center/programs/1"
                    >Qurrouter-linkn Recitation</router-link
                  ></menuitem
                >
                <menuitem><a class="menu-item">Quran Recitation</a></menuitem>
                <menuitem><a class="menu-item">Quran Recitation</a></menuitem>
                <menuitem><a class="menu-item">Quran Recitation</a></menuitem>
              </menu>
            </menuitem>
            <menuitem>
              <a class="menu-item"
                >Math Study
                <font-awesome-icon :icon="['fas', 'fa-caret-right']"
              /></a>
              <menu>
                <menuitem><a class="menu-item">Quran Recitation</a></menuitem>
                <menuitem><a class="menu-item">Quran Recitation</a></menuitem>
                <menuitem><a class="menu-item">Quran Recitation</a></menuitem>
                <menuitem><a class="menu-item">Quran Recitation</a></menuitem>
              </menu>
            </menuitem>
            <menuitem>
              <a class="menu-item"
                >Science Study
                <font-awesome-icon :icon="['fas', 'fa-caret-right']"
              /></a>
              <menu>
                <menuitem><a class="menu-item">Quran Recitation</a></menuitem>
                <menuitem><a class="menu-item">Quran Recitation</a></menuitem>
                <menuitem><a class="menu-item">Quran Recitation</a></menuitem>
                <menuitem><a class="menu-item">Quran Recitation</a></menuitem>
              </menu>
            </menuitem>
            <menuitem id="demo2">
              <a class="menu-item"
                >Islamic Study
                <font-awesome-icon :icon="['fas', 'fa-caret-right']"
              /></a>
              <menu>
                <menuitem id="demo3">
                  <a class="menu-item"
                    >Quran Recitation
                    <font-awesome-icon :icon="['fas', 'fa-caret-right']"
                  /></a>
                  <menu>
                    <menuitem
                      ><a class="menu-item"
                        >Noorani Recitation Course</a
                      ></menuitem
                    >
                    <menuitem><a class="menu-item">deep 2</a></menuitem>
                    <menuitem><a class="menu-item">deep 3</a></menuitem>
                  </menu>
                </menuitem>
                <menuitem><a class="menu-item">test</a></menuitem>
              </menu>
            </menuitem>
          </menu>
        </menuitem>
      </menu>
    </nav>
  </div>
</template>

<style scoped>
#demo1 menuitem {
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
  padding: 15px 30px;
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
