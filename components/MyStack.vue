<template>
  <div class="lg:container-xs container-lg pb-20">
    <h2 class="font-bold text-2xl pb-4">{{ title }}</h2>
    <div class="grid lg:grid-cols-5 grid-cols-3 gap-x-20 gap-y-2">
      <div v-for="item in list" :key="item.id" class="all-center flex-row">
        <h3 class="py-1 font-oregano text-lg">{{ item.name }}</h3>
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
