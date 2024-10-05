<script setup lang="ts">
import { onMounted } from 'vue';
import { Chart, registerables } from 'chart.js';
import { usePatientStore } from '../stores/patient';

Chart.register(...registerables);

// Access the store to get patient data
const store = usePatientStore();
const patientData = store.patientData;

onMounted(() => {
  if (patientData) {
    const ctx = document.getElementById('bloodPressureChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
        datasets: [
          {
            label: 'Systolic',
            data: patientData?.diagnosis_history.map(history => history.blood_pressure.systolic.value),
            borderColor: 'rgb(255, 99, 132)',
            fill: false,
          },
          {
            label: 'Diastolic',
            data: patientData?.diagnosis_history.map(history => history.blood_pressure.diastolic.value),
            borderColor: 'rgb(54, 162, 235)',
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
});
</script>

<template>
    <canvas id="bloodPressureChart"></canvas>
  </template>
  
 

  