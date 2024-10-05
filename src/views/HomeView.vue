<script setup lang="ts">
import { onMounted } from 'vue';
import { usePatientStore } from '../stores/patient';
import PatientList from '../components/PatientList.vue';
import DiagnosisHistoryChart from '../components/DiagnosisHistoryChart.vue';
import PatientDetails from '../components/PatientDetails.vue';
import VitalSigns from '../components/VitalSigns.vue';

const store = usePatientStore();


onMounted(() => {
  store.fetchPatientData();
});
</script>
<template>
<div class="app-container p-6 bg-gray-100 min-h-screen">
    <div class="flex justify-between">
      <PatientList />
      <DiagnosisHistoryChart />
      <PatientDetails />
    </div>
    <VitalSigns />
  </div>
</template>