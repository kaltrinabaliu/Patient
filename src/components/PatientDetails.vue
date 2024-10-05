<script setup lang="ts">
import { usePatientStore } from '../stores/patient';
 import Profile from '../assets/Profile.png';
const store = usePatientStore();
const patientData = store.patientData;
</script>
<template>
    <div class="patient-details">
      <img :src="Profile" alt="Profile" class="w-24 h-24 rounded-full" />
      <h2 class="text-xl font-semibold">{{ patientData?.name }}</h2>
      <p class="text-gray-600">Date of Birth: {{ patientData?.date_of_birth }}</p>
      <p>Gender: {{ patientData?.gender }}</p>
      <p>Phone: {{ patientData?.phone_number }}</p>
      <p>Emergency Contact: {{ patientData?.emergency_contact }}</p>
      <p>Insurance: {{ patientData?.insurance_type }}</p>
    </div>
  </template>
  

  

  