<template>
  <div class="container-xs">
    <h2 class="font-bold text-2xl pb-4">{{ title }}</h2>
    <div class="grid lg:grid-cols-8 grid-cols-3 gap-y-2">
      <div v-for="item in list" :key="item.id" class="all-center">
        <h3 class="py-1 text-lg italic">{{ item }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyStack',
  props: {
    title: {
      type: String,
      default: 'My Stack',
    },
    list: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped></style>
