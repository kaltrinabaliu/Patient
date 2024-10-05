<script setup lang="ts">
import Image1 from '../assets/Image1.png';
import Image2 from '../assets/Image2.png';
import Image3 from '../assets/Image3.png';
import Image4 from '../assets/Image4.png';
import Image5 from '../assets/Image5.png';
import Image6 from '../assets/Image6.png';
import Image7 from '../assets/Image7.png';
import Image8 from '../assets/Image8.png';
import Image9 from '../assets/Image9.png';
import Image10 from '../assets/Image10.png';
import Image11 from '../assets/Image11.png';
import Image12 from '../assets/Image12.png';
import ItemDetail from './ItemDetail.vue';

const patiens = [
    {icon: Image1,  name: 'Emily Williams', data:'Female, 18' },
    {icon: Image2,  name: 'Ryan Johnson', data:'Male, 45' },
    {icon: Image3,  name: 'Brandon Mitchell', data:'Male, 36' },
    {icon: Image4,  name: 'Jessica Taylor', data:'Female, 28' },
    {icon: Image5,  name: 'Samants Johnson', data:'Female, 32' },
    {icon: Image6,  name: 'Olivia Brown', data:'Female, 54' },
    {icon: Image7, name: 'Tyler Davis', data:'Male, 19' },
    {icon: Image8,  name: 'Kevin Anderson', data:'Male, 30' },
    {icon: Image9,  name: 'Dylan Thompson', data:'Male, 36' },
    {icon: Image10,  name: 'Nathan Evans', data:'Male, 58' },
    {icon: Image11,  name: 'Mike Nolan', data:'Male, 31' },
    {icon: Image12,  name: 'Emily Williams', data:'Female, 18' },

]
</script>

<template>
    <div class="w-[300px] bg-white rounded">
        <div class="p-4 text-[24px] font-bold">Patients</div>
     <ItemDetail v-for="(item, index) in patiens" :key="index" :icon="item.icon" :title="item.name" :data="item.data"/>
    </div>
  </template>
  

