<template>
  <div
    class="image-container flex flex-col justify-center items-center p-4 border-2 rounded-xl border-black hover:shadow-2xl"
  >
    <img
      :src="require(`~/assets/images/${imgSrc}`)"
      :alt="imgAlt"
      class="h-64"
    />
    <p class="font-semibold text-white tracking-wide">
      {{ textUppercase(name) }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'ImageCard',
  props: {
    imgSrc: {
      type: String,
      default: 'questionmark.png',
    },
    imgAlt: {
      type: String,
      default: 'pixel image made by can',
    },
    name: {
      type: String,
      default: 'pixel image',
    },
  },
  methods: {
    textUppercase(text) {
      const newText = text.toUpperCase()
      return newText
    },
  },
}
</script>

<style lang="scss" scoped></style>
