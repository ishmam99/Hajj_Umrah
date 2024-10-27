<template>
  <div class="p-6 mt-6 rounded-lg shadow-md">
    <h2 class="text-xl font-semibold mb-4 flex gap-2 items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        class="h-8 w-8"
        fill="rgba(100,120,205,1)"
      >
        <path
          d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18 12C18 15.3137 15.3137 18 12 18V6C15.3137 6 18 8.68629 18 12Z"
        ></path>
      </svg>
      Progress Bar
    </h2>
    <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const chartData = ref({
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "Dataset 1",
      backgroundColor: "rgba(75, 192, 192, 0.5)", // Teal
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(75, 192, 192, 0.7)",
      hoverBorderColor: "rgba(75, 192, 192, 1)",
      data: [40, 20, 12, 10, 20, 15, 18, 33, 9, 10, 11, 12],
    },
    {
      label: "Dataset 2",
      backgroundColor: "rgba(255, 99, 132, 0.5)", // Red
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255, 99, 132, 0.7)",
      hoverBorderColor: "rgba(255, 99, 132, 1)",
      data: [30, 25, 19, 12, 22, 10, 25, 35, 15, 13, 14, 16],
    },
    {
      label: "Dataset 3",
      backgroundColor: "rgba(54, 162, 235, 0.5)", // Blue
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(54, 162, 235, 0.7)",
      hoverBorderColor: "rgba(54, 162, 235, 1)",
      data: [25, 30, 22, 15, 18, 20, 28, 40, 20, 18, 19, 21],
    },
  ],
});

const chartOptions = ref({
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      labels: {
        color: "#333", // Text color
        font: {
          size: 14, // Font size
          weight: "bold", // Font weight
        },
      },
    },
    tooltip: {
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      titleColor: "#fff",
      bodyColor: "#fff",
      borderColor: "#333",
      borderWidth: 1,
    },
  },
  scales: {
    x: {
      grid: {
        color: "rgba(200, 200, 200, 0.2)",
      },
      ticks: {
        color: "#666", // Text color for x-axis labels
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        color: "rgba(200, 200, 200, 0.2)",
      },
      ticks: {
        color: "#666", // Text color for y-axis labels
      },
    },
  },
});
</script>

<style scoped>
/* Add any additional styling if needed */
</style>
