<template>
  <div>
    <section id="hero">
      <div
        class="explanation container-lg flex flex-row justify-center items-center"
      >
        <div class="explanation-image p-4">
          <img
            :src="require(`~/assets/images/${hero.src}`)"
            :alt="hero.alt"
            loading="lazy"
          />
        </div>
        <div class="explanation-text p-4">
          <p>{{ hero.title }}</p>
        </div>
      </div>
    </section>
    <section id="image_cards">
      <div
        class="container-lg flex lg:flex-row flex-col flex-wrap justify-center items-center lg:space-x-4 space-y-4 lg:space-y-0"
      >
        <div v-for="item in imageCard" :key="item.id">
          <image-card
            :img-src="item.src"
            :img-alt="item.alt"
            :name="item.name"
          ></image-card>
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
      hero: {
        src: 'heart.gif',
        alt: 'notcapableofcan heartgif',
        title:
          "I love pixel art because i can't draw but i can paint pixel by pixel.",
      },
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
}
</script>

<style lang="scss" scoped></style>
