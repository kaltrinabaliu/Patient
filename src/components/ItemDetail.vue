<script setup lang="ts">
import IconThreeDots from './icons/IconThreeDots.vue';
const props = defineProps<{
    icon: string;
    title: string;
    data: string;
}>()
</script>
<template>
<div class="flex justify-start gap-2 p-4 overflow-y">
    <div><img :src="props.icon" alt=""></div>
    <div class="flex items-center justify-between w-[200px]">
        <div class="text-[14px] flex flex-col">
            <p>{{ props.title }}</p>
            <p class="text-[#707070]">{{ props.data }}</p>
        </div>
        <div>
            <IconThreeDots class="rotate-90"/>
        </div>
    </div>
</div>
</template>