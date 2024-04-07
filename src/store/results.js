import { ref } from "vue";
import { defineStore } from "pinia";

// 组合式写法 
export const useResultsStore = defineStore(
  "results",
  () => {
    let results = ref({});
    const saveResults =(r)=> {
        results = r;
    }
    return {
      results,
      saveResults
    };
  },
);