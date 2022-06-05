<template>
  <div id="error" class="flex flex-col justify-center items-center">
    <div class="container-lg flex justify-center items-center p-16">
      <h1 class="text-4xl font-semibold text-info-500">
        WHAT YOU ARE LOOKING FOR IS STILL UNDER CONSTRUCTION
      </h1>
    </div>
    <div class="container-lg flex justify-center items-center p-16">
      <img src="~/assets/images/gearsmall.gif" />
    </div>
    <div class="container-lg flex justify-center items-center p-16">
      <button type="button">
        <nuxt-link to="/">Go BACK</nuxt-link>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error',
}
</script>

<style lang="scss" scoped></style>
