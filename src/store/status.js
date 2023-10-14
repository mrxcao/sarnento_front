import { ref } from 'vue';
import { defineStore } from 'pinia';
import http from '../services/http';

// eslint-disable-next-line import/prefer-default-export
export const useStatus = defineStore('status', () => {
  const statusApi = ref();
  const apiInfo = ref();

  function setStatusApi(statusApiValue) {
    statusApi.value = statusApiValue.ok;
    apiInfo.value = JSON.stringify(statusApiValue);
  }

  async function checkStatus() {
    try {
      const { data } = await http.get('/', {
        headers: { },
      });
      // return data;
      setStatusApi(data);
    } catch (error) {
      setStatusApi(false);
      console.log(error.response.data);
    }
  }

  return {
    statusApi,
    checkStatus,
    apiInfo,
  };
});
