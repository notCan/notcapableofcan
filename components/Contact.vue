<template>
  <div class="all-center md:flex-row flex-col h-auto lg:space-x-4 py-8">
    <h2 class="all-center font-bold text-2xl pb-4 md:pb-0">{{ title }}</h2>
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
    title: {
      type: String,
      default: 'Contact',
    },
    cards: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      show: true,
    }
  },
}
</script>

<style lang="scss" scoped></style>
