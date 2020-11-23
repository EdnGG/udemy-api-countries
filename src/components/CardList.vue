<template>
  <div class="row">
    <div v-for="pais in paises" :key="pais.name" class="col-12">
      <Card :pais="pais" />
    </div>
  </div>
</template>

<script>
import Card from "./Card";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
export default {
  components: {
    Card,
  },
  setup() {
    const store = useStore();

    const paises = computed(() => {
      // return store.state.paises;
      return store.getters.topPaisesPoblacion;
    });
    // useState() puede acceder a stata, mutation, accions
    onMounted(async () => {
      // store.state.paises;
      // console.log(store.state.paises);
      // Dispatch ejecuta una accion
      await store.dispatch("getPaises");
      await store.dispatch("filtrarRegion", "Americas");
    });

    return { paises };
  },
};
</script>

<style>
</style>