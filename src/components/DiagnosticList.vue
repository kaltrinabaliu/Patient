<script setup lang="ts">
import {onMounted, computed} from 'vue'; 
import { usePatientStore } from '../stores/patient';
import DiagnosticItem from './DiagnosticItem.vue'

const store = usePatientStore();

onMounted(() => {
  store.fetchPatientData();
});

const patientData = computed(() => store.patientData);
const diagnostic_list = computed(() => store.patientData?.diagnostic_list);


</script>
<template> 
<div class="p-4 bg-white rounded-md">
    <div class="text-[24px] font-bold p-2">
        Diagnostic List
    </div>
    <div class="grid grid-cols-3 rounded-full w-full bg-[#F6F7F8] p-3">
    <p>Problem/Diagnosis</p>
    <p>Description</p>
    <p>Status</p>
   </div> 
   <DiagnosticItem
      v-for="(item, index) in diagnostic_list"
      :key="index"
      :problem="item.name"
      :description="item.description"
      :status="item.status"
    />
</div>
 
</template>