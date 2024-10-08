import { defineStore } from 'pinia';
import api from '../api';

export const usePatientStore = defineStore('usePatient', {
  state: () => ({
    patientData: null as any,
  }),
  actions: {
    async fetchPatientData() {
      try {
        const response = await api.get('/'); 
        const data = response.data.find((patient: any) => patient.name === 'Jessica Taylor');
        this.patientData = data;
      } catch (error) {
        console.error('Error fetching patient data:', error);
      }
    },
  },
});
