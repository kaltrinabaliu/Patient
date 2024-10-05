// stores/patient.ts
import { defineStore } from 'pinia';
import api from '../api';

export const usePatientStore = defineStore('patient', {
  state: () => ({
    patientData: null as any,
  }),
  actions: {
    async fetchPatientData() {
      try {
        const response = await api.get('/'); // Adjust the endpoint as necessary
        const data = response.data.find((patient: any) => patient.name === 'Jessica Taylor');
        this.patientData = data;
      } catch (error) {
        console.error('Error fetching patient data:', error);
      }
    },
  },
});
