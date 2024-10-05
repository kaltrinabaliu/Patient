<script setup lang="ts">
import { onMounted, onBeforeUnmount, computed, watch } from 'vue';
import { Chart, registerables } from 'chart.js';
import { usePatientStore } from '../stores/patient';

Chart.register(...registerables);

const store = usePatientStore();
let chartInstance = null; 

onMounted(() => {
  store.fetchPatientData();
});

const patientData = computed(() => store.patientData);

const destroyChart = () => {
  if (chartInstance) {
    chartInstance.destroy(); 
    chartInstance = null; 
  }
};

const latestBloodPressure = computed(() => {
  return patientData.value?.diagnosis_history.find((history) => history.month === 'March' && history.year === 2024) || {};
});

const systolicValue = computed(() => latestBloodPressure.value?.blood_pressure?.systolic?.value || 'N/A');
const diastolicValue = computed(() => latestBloodPressure.value?.blood_pressure?.diastolic?.value || 'N/A');

watch([systolicValue, diastolicValue], (newData) => {
  const [newSystolicValue, newDiastolicValue] = newData;
  if (newSystolicValue && newDiastolicValue) {
    const ctx = document.getElementById('bloodPressureChart') as HTMLCanvasElement;

    if (ctx) {
      destroyChart();
      
      chartInstance = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'], // Example labels for months
          datasets: [
            {
              label: 'Systolic',
              data: [120, 150, 140, 130, 160, newSystolicValue], // Example data + current systolic
              borderColor: 'rgb(255, 99, 132)',
              fill: false,
              tension: 0.4,
              pointBackgroundColor: 'rgb(255, 99, 132)',
              pointBorderWidth: 3,
            },
            {
              label: 'Diastolic',
              data: [80, 78, 75, 80, 77, newDiastolicValue], // Example data + current diastolic
              borderColor: 'rgb(54, 162, 235)',
              fill: false,
              tension: 0.4,
              pointBackgroundColor: 'rgb(54, 162, 235)',
              pointBorderWidth: 3,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: false,
              min: 60, 
              max: 180, 
              title: {
                display: true,
                text: 'Blood Pressure (mm Hg)',
              },
            },
            x: {
              title: {
                display: true,
                text: 'Month',
              },
            },
          },
          plugins: {
            legend: {
              display: true,
              position: 'right',
            },
          },
        },
      });
    }
  }
});

onBeforeUnmount(() => {
  destroyChart();
});
</script>

<template>
  <div class="text-[24px] font-bold p-2">Diagnosis History</div>
  <div class="w-[580px] rounded-lg flex flex-row rounded-full">
    <canvas id="bloodPressureChart" class="bg-[#F4F0FE]"></canvas>
    <div class="text-sm bg-[#F4F0FE] p-2">
      <div class="flex flex-col"><strong>Systolic:</strong><p class="whitespace-nowrap">{{ systolicValue }} (Higher than Average)</p></div>
      <div class="flex flex-col"><strong>Diastolic:</strong><p class="whitespace-nowrap">{{ diastolicValue }} (Lower than Average)</p></div>
    </div>
  </div>
</template>
