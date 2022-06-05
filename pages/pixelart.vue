<template>
  <div>
    <section id="hero">
      <div
        class="explanation container-lg flex flex-row justify-center items-center"
      >
        <div class="explanation-image p-4">
          <img
            src="~/assets/images/heart.gif"
            alt="notcapableofcan heartgif"
            loading="lazy"
          />
        </div>
        <div class="explanation-text p-4">
          <p>
            I love pixel art because i can't draw but i can paint pixel by
            pixel.
          </p>
        </div>
      </div>
    </section>
    <section id="image_cards">
      <div
        class="container-lg flex flex-row flex-wrap justify-center items-center space-x-4"
      >
        <div
          v-for="item in imageCard"
          :key="item.ID"
          class="image-container flex flex-col justify-center items-center p-4 border-2 rounded-xl border-black hover:shadow-2xl"
        >
          <img
            :src="require(`~/assets/images/${item.src}`)"
            :alt="item.alt"
            class="h-64"
          />
          <p class="font-semibold text-white tracking-wide">
            {{ textUppercase(item.name) }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PixelArtPage',
  data() {
    return {
      imageCard: [
        {
          name: 'myself',
          src: 'me.png',
          alt: 'me',
          date: Date.now(),
          tags: ['pixel', 'me', 'portre'],
        },
        {
          name: 'Imagesecond',
          src: 'frontend.png',
          alt: 'me',
          date: Date.now(),
          tags: ['pixel', 'me', 'portre'],
        },
      ],
    }
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
