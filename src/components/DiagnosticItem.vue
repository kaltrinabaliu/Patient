<script setup lang="ts">
const props = defineProps<{
    problem: string;
    description: string;
    status: string;
}>()

</script>
<template>
    <div class="grid grid-cols-3 text-[14px] p-3 bg-white">
        <p>{{ props.problem }}</p>
        <p>{{ props.description }}</p>
        <p>{{ props.status }}</p>
    </div>
</template>