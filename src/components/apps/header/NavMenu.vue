<template>
    <nav class="navmenu">
        <router-link :to="'/app/'+$route.params.id+'/'">Home</router-link>
        <router-link :to="'/app/'+$route.params.id+'/app-features'">App Features</router-link>
        <router-link :to="'/app/'+$route.params.id+'/how-to-purchase'">How to Purchase</router-link>
        <router-link :to="'/app/'+$route.params.id+'/contact-us'">Contact Us</router-link>
    </nav>
</template>

<style scoped>
/* NAVIGATION */

nav {
   width: 100%;
   display: flex;
   justify-content: end;
   align-items: center;
   gap: 20px;
}

nav > * {
    text-decoration: none;
    color: #d6d6d6;
    padding: 8px 0;
    font-weight: bold;

    background: 
    linear-gradient(to right, #1c754c, #1c754c),
    linear-gradient(to right, #1acc8d, #1acc8d);
    background-size: 100% 0.2em, 0 0.2em;
    background-position: 100% 100%, 0 100%;
    background-repeat: no-repeat;
    transition: background-size 400ms;
}

nav > *:hover,
nav > *:focus  {
    background-size: 0 0.2em, 30px 0.2em;
    color: white;
}
</style>
