<template>
  <div class="text-center">
    <h3 class="text-center">Filter by Continets</h3>
    <div class="btn-group text-center mb-3">
      <button @click="filtro('Americas')" class="btn btn-dark">AM</button>
      <button @click="filtro('Europe')" class="btn btn-dark">EU</button>
      <button @click="filtro('Asia')" class="btn btn-dark">AS</button>
      <button @click="filtro('Oceania')" class="btn btn-dark">OC</button>
      <button @click="filtro('Africa')" class="btn btn-dark">AF</button>
      <button @click="filtro('')" class="btn btn-dark">ALL</button>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    const filtro = (region) => {
      store.dispatch("filtrarRegion", region);
    };

    return { filtro };

    // botonFiltrar(){
    //   return
    // }
  },
};
</script>

<style>
</style>