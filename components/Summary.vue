<template>
  <div
    class="container-md mx-auto flex lg:flex-row flex-col lg:space-x-40 lg:py-8"
  >
    <div class="image-side all-center rounded-full">
      <img
        class="rounded-full max-h-80"
        :src="require(`~/assets/images/${imgSrc}`)"
        :alt="imgAlt"
      />
    </div>
    <div
      class="info-side flex flex-col lg:justify-start lg:items-start py-12 lg:w-2/3 w-full"
    >
      <h1 class="font-bold text-4xl pb-8">{{ title }}</h1>
      <p class="text-lg text-info-100">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Summary',
  props: {
    imgSrc: {
      type: String,
      default: 'mesm.png',
    },
    imgAlt: {
      type: String,
      default: 'Can Deve',
    },
    title: {
      type: String,
      default: 'Hi!',
    },
    description: {
      type: String,
      default: 'Hi!',
    },
  },
}
</script>

<style lang="scss" scoped></style>
