<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useProductStore } from '@/stores/islamic-digital-lane/product'
import { useCommonStore } from '@/stores/common'
import axios from 'axios'

const productStore = useProductStore()
const commonStore = useCommonStore()
const router = useRouter()
const productListApi = 'product-category'

let pathMatch = ref(
  router.currentRoute.value.path.split('/')[0] + '/' + router.currentRoute.value.path.split('/')[1]
)
let productList = ref([])

function ifMenuActive(menu, path) {
  productStore.details(path.split('/')[2])
  pathMatch.value = menu
  router.push(path.toString())
  commonStore.loading = true
}

async function getNavProducts() {
  await axios.get(import.meta.env.VITE_DIGITAL_LANE_BASE_API + productListApi).then((response) => {
    productList.value = response.data
  })
}

onMounted(() => {
  getNavProducts()
})
</script>

<template>
  <div class="navmenu">
    <nav>
      <menu>
        <menuitem
          ><a
            @click="ifMenuActive('/', '/')"
            :class="pathMatch == '/' ? 'menu-item active-menu' : 'menu-item'"
            >Home</a
          ></menuitem
        >

        <!--              <menuitem><a @click="ifMenuActive('/vision-mission', '/vision-mission')" :class="(pathMatch == '/vision-mission') ? 'menu-item active-menu' : 'menu-item'">Vision and Mission</a></menuitem>-->

        <menuitem id="demo1">
          <router-link
            :class="pathMatch == '/products' ? 'menu-item active-menu' : 'menu-item'"
            to=""
            >Products <font-awesome-icon :icon="['fas', 'fa-caret-down']"
          /></router-link>
          <menu>
            <menuitem v-for="cat in productList" :key="cat">
              <router-link class="menu-item" to=""
                >{{ cat.category.title }} <font-awesome-icon :icon="['fas', 'fa-caret-right']"
              /></router-link>
              <menu>
                <menuitem v-for="product in cat.product" :key="product"
                  ><a
                    @click="ifMenuActive('/products', '/product/' + product.id + '/details')"
                    class="menu-item"
                    >{{ product.title }}</a
                  ></menuitem
                >
              </menu>
            </menuitem>
          </menu>
        </menuitem>

        <menuitem
          ><a
            @click="ifMenuActive('/islamic-apps', '/islamic-apps')"
            :class="pathMatch == '/islamic-apps' ? 'menu-item active-menu' : 'menu-item'"
            >Islamic apps</a
          ></menuitem
        >
        <menuitem
          ><router-link class="menu-item" to="/learning-center"
            >Learning Center</router-link
          ></menuitem
        >

        <!--              <menuitem><a @click="ifMenuActive('/it-support-and-services', '/it-support-and-services')" :class="(pathMatch == '/it-support-and-services') ? 'menu-item active-menu' : 'menu-item'">IT Support and Services</a></menuitem>-->
        <menuitem>
          <a :class="pathMatch == '/idl-library' ? 'menu-item active-menu' : 'menu-item'">
            IDl Library <font-awesome-icon :icon="['fas', 'fa-caret-down']"
          /></a>
          <menu>
            <menuitem>
              <a @click="ifMenuActive('/idl-library', '/idl-library/quran')" class="menu-item"
                >Quran</a
              ></menuitem
            >
            <menuitem>
              <a @click="ifMenuActive('/idl-library', '/idl-library/quran')" class="menu-item"
                >Hadith</a
              ></menuitem
            >
            <menuitem>
              <a @click="ifMenuActive('/idl-library', '/idl-library/quran')" class="menu-item"
                >Scholars</a
              ></menuitem
            >
            <menuitem>
              <a @click="ifMenuActive('/idl-library', '/idl-library/quran')" class="menu-item"
                >Books</a
              ></menuitem
            >
            <menuitem>
              <a @click="ifMenuActive('/idl-library', '/idl-library/quran')" class="menu-item"
                >Video</a
              ></menuitem
            >
            <menuitem>
              <a @click="ifMenuActive('/idl-library', '/idl-library/quran')" class="menu-item"
                >Publications</a
              ></menuitem
            >
          </menu>
        </menuitem>

        <menuitem>
          <a :class="pathMatch == '/islamic-news-events' ? 'menu-item active-menu' : 'menu-item'"
            >Islamic News and Events <font-awesome-icon :icon="['fas', 'fa-caret-down']"
          /></a>
          <menu>
            <menuitem>
              <a
                @click="ifMenuActive('/islamic-news-events', '/islamic-news-events/news')"
                class="menu-item"
                >Islamic News</a
              ></menuitem
            >
            <menuitem
              ><a
                @click="ifMenuActive('/islamic-news-events', '/islamic-news-events/events')"
                class="menu-item"
                >Islamic Events</a
              ></menuitem
            >
          </menu>
        </menuitem>

        <menuitem
          ><a
            @click="ifMenuActive('/e-commerce', '/e-commerce')"
            :class="pathMatch == '/e-commerce' ? 'menu-item active-menu' : 'menu-item'"
            >E-commerce</a
          ></menuitem
        >

        <menuitem
          ><a
            @click="ifMenuActive('/about-us', '/about-us')"
            :class="pathMatch == '/about-us' ? 'menu-item active-menu' : 'menu-item'"
            >About Us</a
          ></menuitem
        >
        <menuitem
          ><a
            @click="ifMenuActive('/career', '/career')"
            :class="pathMatch == '/career' ? 'menu-item active-menu' : 'menu-item'"
            >Career</a
          ></menuitem
        >
        <menuitem
          ><a
            @click="ifMenuActive('/contact-us', '/contact-us')"
            :class="pathMatch == '/contact-us' ? 'menu-item active-menu' : 'menu-item'"
            >Contact Us</a
          ></menuitem
        >
      </menu>
    </nav>
  </div>
  <div class="navmenu-responsive">
    <nav>
      <menu>
        <menuitem id="demo1">
          <router-link
            :class="pathMatch == '/products' ? 'menu-item active-menu' : 'menu-item'"
            to=""
            >Products <font-awesome-icon :icon="['fas', 'fa-caret-down']"
          /></router-link>
          <menu>
            <menuitem v-for="cat in productList" :key="cat">
              <router-link class="menu-item" to=""
                >{{ cat.category.title }} <font-awesome-icon :icon="['fas', 'fa-caret-right']"
              /></router-link>
              <menu>
                <menuitem v-for="product in cat.product" :key="product"
                  ><a
                    @click="ifMenuActive('/products', '/product/' + product.id + '/details')"
                    class="menu-item"
                    >{{ product.title }}</a
                  ></menuitem
                >
              </menu>
            </menuitem>
          </menu>
        </menuitem>
        <menuitem
          ><router-link class="menu-item" to="/islamic-apps">Islamic apps</router-link></menuitem
        >
        <menuitem
          ><router-link class="menu-item" to="/learning-center"
            >Learning Center</router-link
          ></menuitem
        >
        <menuitem
          ><router-link class="menu-item" to="/it-support-and-services"
            >IT Support and Services</router-link
          ></menuitem
        >
        <menuitem>
          <a :class="pathMatch == '/islamic-news-events' ? 'menu-item active-menu' : 'menu-item'"
            >Islamic News and Events <font-awesome-icon :icon="['fas', 'fa-caret-down']"
          /></a>
          <menu>
            <menuitem
              ><a
                @click="ifMenuActive('/islamic-news-events', '/islamic-news-events/news')"
                class="menu-item"
                >Islamic News</a
              ></menuitem
            >
            <menuitem
              ><a
                @click="ifMenuActive('/islamic-news-events', '/islamic-news-events/events')"
                class="menu-item"
                >Islamic Events</a
              ></menuitem
            >
          </menu>
        </menuitem>
        <menuitem>
          <a :class="pathMatch == '/more' ? 'menu-item active-menu' : 'menu-item'"
            >More <font-awesome-icon :icon="['fas', 'fa-caret-down']"
          /></a>
          <menu>
            <menuitem
              ><a
                @click="ifMenuActive('/more', '/vision-mission')"
                :class="pathMatch == '/vision-mission' ? 'menu-item active-menu' : 'menu-item'"
                >Vision and Mission</a
              ></menuitem
            >
            <menuitem
              ><a
                @click="ifMenuActive('/more', '/about-us')"
                :class="pathMatch == '/about-us' ? 'menu-item active-menu' : 'menu-item'"
                >About Us</a
              ></menuitem
            >
            <menuitem
              ><a
                @click="ifMenuActive('/more', '/career')"
                :class="pathMatch == '/career' ? 'menu-item active-menu' : 'menu-item'"
                >Career</a
              ></menuitem
            >
            <menuitem
              ><a
                @click="ifMenuActive('/more', '/contact-us')"
                :class="pathMatch == '/contact-us' ? 'menu-item active-menu' : 'menu-item'"
                >Contact Us</a
              ></menuitem
            >
          </menu>
        </menuitem>
      </menu>
    </nav>
  </div>
</template>

<style scoped>
.navmenu-responsive {
  display: none;
}

.active-menu {
  color: #0fa3b1 !important;
}
.navmenu {
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.menu-item {
  text-decoration: none;
  font-weight: bold;
}

.menu-item:hover {
  color: #0fa3b1 !important;
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
}
nav > menu {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

nav > menu > menuitem {
  pointer-events: all;
  opacity: 1;
}
menu menuitem .menu-item {
  white-space: nowrap;
  display: block;
}

nav > menu > menuitem > .menu-item {
  text-align: center;
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
  /* background:#0FA3B1; */
  color: inherit;
  transition:
    background 0.5s,
    color 0.5s,
    transform 0.5s;

  padding: 5px;
  font-size: 13px;
  box-sizing: border-box;
  border-radius: 3px;
  /* box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5); */
  position: relative;
}

nav menuitem menu menuitem {
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  z-index: 99999;
}

nav .menu-item:hover:before {
  content: '';
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
}

nav menuitem > menu {
  padding: 0;
  margin-top: 0;
}

nav > menu > menuitem > menu > menuitem {
  transition:
    transform 0.6s,
    opacity 0.6s;
  transform: translateY(150%);
  opacity: 0;
}
nav > menu > menuitem:hover > menu > menuitem,
nav > menu > menuitem.hover > menu > menuitem {
  transform: translateY(0%);
  opacity: 1;
}

menuitem > menu > menuitem > menu > menuitem {
  transition:
    transform 0.6s,
    opacity 0.6s;
  transform: translateX(195px) translateY(0%);
  opacity: 0;
}
menuitem > menu > menuitem:hover > menu > menuitem,
menuitem > menu > menuitem.hover > menu > menuitem {
  transform: translateX(0) translateY(0%);
  opacity: 1;
}

@media only screen and (max-width: 1024px) {
  .navmenu {
    display: none;
  }

  .navmenu-responsive {
    display: block;
  }
}
</style>
