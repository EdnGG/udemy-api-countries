<template>
  <div class="card mb-2">
    <div class="card-body">
      <h5 class="text-center">{{ pais.name }}</h5>
      <p class="text-center">
        <img
          :src="pais.flag"
          alt="`Flag: ${pais.name}`"
          class="img-fluid w-10"
        />
      </p>
      <p class="card-text">
        <span class="badge badge-dark d-block mb-1"
          >NativeName: {{ pais.nativeName }}</span
        >
        <span class="badge badge-info p-3 d-block mb-1"
          >Population: {{ numeroFormato(pais.population) }}</span
        >
        <span class="badge badge-dark d-block mb-1"
          >Capital: {{ pais.capital }}</span
        >
        <span class="badge badge-dark d-block mb-1"
          >Region: {{ pais.region }}</span
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["pais"],
  setup() {
    const numeroFormato = (num) => {
      return new Intl.NumberFormat("de-DE").format(num);
    };

    return { numeroFormato };
  },
};
</script>

<style>
</style>