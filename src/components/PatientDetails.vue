<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { usePatientStore } from '../stores/patient';
 import Profile from '../assets/Profile.png';
 import IconBirth from './icons/IconBirth.vue';
 import IconFemale from './icons/IconFemale.vue'
 import IconInsurance from './icons/IconInsurance.vue'
 import IconPhone from './icons/IconPhone.vue'

const store = usePatientStore();

onMounted(() => {
  store.fetchPatientData();
});

const patientData = computed(() => store.patientData);

</script>
<template>
    <div class="flex flex-col bg-white p-10 rounded-md justify-center space-y-10">
        <div class="flex flex-col justify-center items-center space-y-5">
            <img :src="Profile" alt="Profile" class="w-24 h-24 rounded-full" />
            <h2 class="text-xl font-semibold">{{ patientData?.name }}</h2>
        </div>
      <div class="flex items-center justify-start gap-2">
        <IconBirth/>
        <p class="text-gray-600">Date of Birth:</p>
            <p> {{ patientData?.date_of_birth }}</p>
      </div>
      <div class="flex items-center justify-start gap-2">
        <IconFemale/>
        <p class="text-gray-600">Gender: </p>
        <p>{{ patientData?.gender }}</p>
      </div>
      <div class="flex items-center justify-start gap-2">
        <IconPhone/>
        <p>Phone: </p>
        <p>{{ patientData?.phone_number }}</p>
      </div>
      <div class="flex items-center justify-start gap-2">
        <IconPhone/>
              <p>Emergency Contact: </p>
              <p>{{ patientData?.emergency_contact }}</p>

      </div>
      <div class="flex items-center justify-start gap-2">
        <IconInsurance/>
        <p>Insurance: </p>
        <p>{{ patientData?.insurance_type }}</p>
      </div>
      <div class="text-center m-8 rounded-full px-8 py-2 bg-[#01F0D0] text-[12px]">
        Show All Information
      </div>
    </div>
  </template>
  

  

  