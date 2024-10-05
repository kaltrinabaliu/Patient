<script setup lang="ts">
import { onMounted } from 'vue';
import { usePatientStore } from '../stores/patient';
import PatientList from '../components/PatientList.vue';
import DiagnosisHistoryChart from '../components/DiagnosisHistoryChart.vue';
import PatientDetails from '../components/PatientDetails.vue';
import VitalSigns from '../components/VitalSigns.vue';
import NavBar from '../components/NavBar.vue';
import DiagnosticList from '../components/DiagnosticList.vue';
import LabResults from '../components/LabResults.vue';
const store = usePatientStore();


onMounted(() => {
  store.fetchPatientData();
});
</script>
<template>
<div class="bg-[#F6F7F8] px-4 py-2 min-h-screen">
    <div class="p-2"><NavBar/></div>
    <div class="flex justify-between gap-4">
      <PatientList />
      <div class="flex flex-col gap-4">
        <div class="bg-white p-4 flex flex-col gap-2">
        <DiagnosisHistoryChart />
        <VitalSigns />
      </div>
        <DiagnosticList/>

      </div>
      <div class="flex flex-col gap-4">
        <PatientDetails />
        <LabResults/>
      </div>
      
    </div>
  </div>
</template>