<script setup>
function action() {
   alert("hi")
}
</script>

<template>
    <button class="btn btn-danger" @click="action">
        <i class="fa fa-trash"></i> <!-- trash icon -->
    </button>
</template>