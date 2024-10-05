<script setup lang="ts">
import { computed } from 'vue';
import { usePatientStore } from '../stores/patient';
import IconHeart from './icons/IconHeart.vue';
import IconRespiratoryRate from './icons/IconRespiratoryRate.vue';
import IconTemperature from './icons/IconTemperature.vue';


const store = usePatientStore();

const respiratoryRate = computed(() => store.patientData?.diagnosis_history[0].respiratory_rate.value);
const temperature = computed(() => store.patientData?.diagnosis_history[0].temperature.value);
const heartRate = computed(() => store.patientData?.diagnosis_history[0].heart_rate.value);
</script>
<template>
    <div class="flex space-x-8">
        
      <div class="respiratory-rate p-16 bg-blue-100 rounded-lg space-y-8">
        <IconRespiratoryRate />
        <p class="text-xl font-semibold">{{ respiratoryRate }} bpm</p>
        <p class="text-gray-600">Respiratory Rate</p>
      </div>
      <div class="temperature p-16 bg-pink-100 rounded-lg space-y-4">
        <IconTemperature />
        <p class="text-xl font-semibold">{{ temperature }} °F</p>
        <p class="text-gray-600">Temperature</p>
      </div>
      <div class="heart-rate p-16 bg-red-100 rounded-lg space-y-4">
        <IconHeart />
        <p class="text-xl font-semibold">{{ heartRate }} bpm</p>
        <p class="text-gray-600">Heart Rate</p>
      </div>
    </div>
  </template>
  

   
  