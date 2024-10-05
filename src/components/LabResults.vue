<script setup lang="ts">
import { onMounted, computed } from 'vue';
import IconDownload from './icons/IconDownload.vue';
import { usePatientStore } from '../stores/patient';

const store = usePatientStore();

onMounted(() => {
  store.fetchPatientData();
});

const lab_results = computed(()=>store.patientData?.lab_results)

</script>
<template>
    <div class="bg-white p-4 space-y-4 rounded-md">
        <div class="text-[24px] font-bold">
            Lab Results
        </div>
        <div v-for="(item, index) in lab_results" :key="index" class="text-[14px] flex justify-between my-">
            <div>{{ item }}</div>
            <IconDownload/>
        </div>
    </div>
</template>