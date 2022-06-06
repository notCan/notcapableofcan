<template>
  <div class="image-col flex p-8">
    <nuxt-link :to="link">
      <div
        class="flex items-center justify-center rounded-md flex-col hover:bg-info-50 cursor-pointer"
      >
        <img
          class="p-4"
          :src="require(`~/assets/images/${imgSrc}`)"
          :alt="imgAlt"
        />
        <p class="font-semibold p-2">{{ name }}</p>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'InterestCards',
  props: {
    link: {
      type: String,
      default: '/',
    },
    imgSrc: {
      type: String,
      default: 'questionmarksm.png',
    },
    imgAlt: {
      type: String,
      default: 'Interests',
    },
    name: {
      type: String,
      default: 'Interest',
    },
  },
}
</script>

<style lang="scss" scoped></style>
