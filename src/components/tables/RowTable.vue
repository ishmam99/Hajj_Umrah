<script setup>
import { defineProps } from 'vue'

defineProps({
    columns: Array,
    data: Array
})
</script>

<template>
    <table>
        <tr>
          <th v-for="column in columns" :key="column">{{ column }}</th>
        </tr>
        <tr v-for="data in data" :key="data">
          <td>{{ data }}</td>
        </tr>
    </table>
</template>

<style scoped>
table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
}
  
td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
}
  
tr:nth-child(even) {
    background-color: #dddddd;
}
</style>