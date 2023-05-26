<template>
  <v-card class="card">
    <div class="px-4 pt-2 pb-0 d-flex">
      <v-avatar class="card-avatar mt-n6" size="60" variant="flat">
        <v-icon color="white" icon="mdi-chart-timeline-variant-shimmer">
        </v-icon>
      </v-avatar>
      <div class="ms-4">
        <h4 class="font-weight-bold">Line Chart</h4>
      </div>
    </div>
    <div class="card-padding pt-0 px-4">
      <div class="chart">
        <ClientOnly fallback="Loading...">
          <LineChart
            :data="lineChartData"
            :options="lineChartOptions"
            :height="400"
          />
        </ClientOnly>
      </div>
    </div>
  </v-card>
</template>

<script setup lang="ts">
const lineChartData = {
  labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Organic Search",
      tension: 0.4,
      pointRadius: 2,
      pointBackgroundColor: "#e91e63",
      borderColor: "#e91e63",
      borderWidth: 3,
      backgroundColor: "transparent",
      data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
      maxBarThickness: 6,
    },
    {
      label: "Referral",
      tension: 0.4,
      pointRadius: 2,
      pointBackgroundColor: "#3A416F",
      borderColor: "#3A416F",
      borderWidth: 3,
      backgroundColor: "transparent",
      data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
      maxBarThickness: 6,
    },
    {
      label: "Direct",
      tension: 0.4,
      pointRadius: 2,
      pointBackgroundColor: "#03A9F4",
      borderColor: "#03A9F4",
      borderWidth: 3,
      backgroundColor: "transparent",
      data: [40, 80, 70, 90, 30, 90, 140, 130, 200],
      maxBarThickness: 6,
    },
  ],
};

const lineChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    intersect: false,
    mode: "index",
  },
  scales: {
    y: {
      grid: {
        drawBorder: false,
        display: true,
        drawOnChartArea: true,
        drawTicks: false,
        borderDash: [5, 5],
        color: "#c1c4ce5c",
      },
      ticks: {
        display: true,
        padding: 10,
        color: "#b2b9bf",
        font: {
          size: 14,
          weight: 300,
          family: "Roboto",
          style: "normal",
          lineHeight: 2,
        },
      },
    },
    x: {
      grid: {
        drawBorder: false,
        display: true,
        drawOnChartArea: true,
        drawTicks: true,
        borderDash: [5, 5],
        color: "#c1c4ce5c",
      },
      ticks: {
        display: true,
        color: "#b2b9bf",
        padding: 10,
        font: {
          size: 14,
          weight: 300,
          family: "Roboto",
          style: "normal",
          lineHeight: 2,
        },
      },
    },
  },
};
</script>
