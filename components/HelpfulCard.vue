<template>
  <div
    class="flex justify-between items-center flex-row bg-primary-50 p-4 border-2 rounded-xl shadow-lg h-auto"
  >
    <h6 class="pr-6">{{ name }}</h6>
    <p class="pr-6 hidden lg:block">
      {{ description }}
    </p>
    <a :href="link"><i class="ri-arrow-right-circle-line"></i></a>
  </div>
</template>

<script>
export default {
  name: 'Helpful',
  props: {
    name: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped></style>
