<template>
  <div>
    <Modal
      ref="modal"
      :name="transferData.dName"
      :date="transferData.dDate"
      :img-src="transferData.dSrc"
      :img-alt="transferData.dAlt"
      :tags="transferData.dTags"
    />
    <section id="hero">
      <div
        class="explanation container-lg flex flex-row justify-center items-center"
      >
        <div class="explanation-image p-4">
          <img src="/images/heart.gif" alt="" />
        </div>
        <div class="explanation-text p-4">
          <p>
            I love pixel art because i can't draw but i can paint pixel by
            pixel.
          </p>
        </div>
      </div>
    </section>
    <section id="images">
      <div
        class="container-lg flex flex-row flex-wrap justify-center items-center space-x-4"
      >
        <div
          v-for="item in imageCard"
          :key="item.ID"
          class="image-container flex flex-col justify-center items-center p-4 border-2 rounded-xl border-black hover:shadow-2xl"
        >
          <div class="w-full flex justify-end items-start">
            <button
              v-dialog-open="'modal'"
              class="btn"
              @click="transferData(item)"
            >
              <i class="ri-more-line"></i>
            </button>
          </div>
          <img :src="item.src" :alt="item.alt" />
          <p>{{ item.name }}</p>
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
      dName: String,
      dSrc: String,
      dAlt: String,
      dDate: Date,
      dTags: Array,
      imageCard: [
        {
          name: 'denemename',
          src: '/images/me.png',
          alt: 'me',
          date: 1653569144037,
          tags: ['pixel', 'me', 'portre'],
        },
        {
          name: 'Imagesecond',
          src: '/images/frontend.png',
          alt: 'me',
          date: 1653569144037,
          tags: ['pixel', 'me', 'portre'],
        },
      ],
    }
  },
  methods: {
    openDetails() {
      alert('details')
    },
    transferData(obj) {
      const dName = obj.name
      const dSrc = obj.src
      const dAlt = obj.alt
      const dDate = obj.date
      const dTags = obj.tags
      return { dName, dSrc, dAlt, dDate, dTags }
    },
  },
}
</script>

<style lang="scss" scoped></style>
