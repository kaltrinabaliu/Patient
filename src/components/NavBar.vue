<script setup lang="ts">
import IconLogo from './icons/IconLogo.vue';
import IconHome from './icons/IconHome.vue';
import IconPatient from './icons/IconPatient.vue';
import IconBirth from './icons/IconBirth.vue';
import IconMessage from './icons/IconMessage.vue';
import IconTransaction from './icons/IconTransaction.vue';
import doctor from '../assets/doctor.png';
import IconSettings from './icons/IconSettings.vue';
import IconThreeDots from './icons/IconThreeDots.vue';
</script>

<template>
  <div class="flex w-full items-center px-4 bg-white rounded-full">
    <div class="flex w-full justify-between items-center">
      <div class="flex items-center">
        <IconLogo />
      </div>

      <div class="flex space-x-4 items-center">
        <div class="flex gap-2 items-center">
          <IconHome />
          <p class="text-[13px]">Overview</p>
        </div>
        <div class="flex gap-2 items-center">
          <IconPatient />
          <p class="text-[13px]">Patients</p>
        </div>
        <div class="flex gap-2 items-center">
          <IconBirth />
          <p class="text-[13px]">Schedule</p>
        </div>
        <div class="flex gap-2 items-center">
          <IconMessage />
          <p class="text-[13px]">Message</p>
        </div>
        <div class="flex gap-2 items-center">
          <IconTransaction />
          <p class="text-[13px]">Transactions</p>
        </div>
      </div>
      <div class="flex gap-2 items-center">
        <img :src="doctor" alt="doctor" class="w-8 h-8 rounded-full">
        <div class="flex flex-col text-[12px]">
          <p>Dr. Jose Simmons</p>
          <p>General Practitioner</p>
        </div>
        <IconSettings />
        <IconThreeDots />
      </div>
    </div>
  </div>
</template>
