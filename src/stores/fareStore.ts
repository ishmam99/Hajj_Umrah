import { ref } from 'vue';

export const useFareStore = () => {
  const fares = ref([]);

  const addFare = (fare) => {
    fares.value.push(fare);
  };

  const getFares = () => fares.value;

  return {
    addFare,
    getFares
  };
};
