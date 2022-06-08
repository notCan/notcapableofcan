<template>
  <div class="all-center md:flex-row flex-col h-auto lg:space-x-4 py-8">
    <div class="all-center flex-row">
      <a v-for="item in cards" :key="item.id" :href="item.link">
        <img
          :src="require(`~/assets/icons/${item.src}`)"
          :alt="item.alt"
          class="h-12"
        />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactComponent',
  props: {
    cards: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped></style>
