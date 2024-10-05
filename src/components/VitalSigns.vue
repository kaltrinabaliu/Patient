<script setup lang="ts">
import { computed } from 'vue';
import { usePatientStore } from '../stores/patient';

const store = usePatientStore();

const respiratoryRate = computed(() => store.patientData?.diagnosis_history[0].respiratory_rate.value);
const temperature = computed(() => store.patientData?.diagnosis_history[0].temperature.value);
const heartRate = computed(() => store.patientData?.diagnosis_history[0].heart_rate.value);
</script>
<template>
    <div class="vital-signs flex space-x-4">
      <div class="respiratory-rate p-4 bg-blue-100 rounded-lg">
        <p class="text-xl font-semibold">{{ respiratoryRate }} bpm</p>
        <p class="text-gray-600">Respiratory Rate</p>
      </div>
      <div class="temperature p-4 bg-pink-100 rounded-lg">
        <p class="text-xl font-semibold">{{ temperature }} °F</p>
        <p class="text-gray-600">Temperature</p>
      </div>
      <div class="heart-rate p-4 bg-red-100 rounded-lg">
        <p class="text-xl font-semibold">{{ heartRate }} bpm</p>
        <p class="text-gray-600">Heart Rate</p>
      </div>
    </div>
  </template>
  

   
  