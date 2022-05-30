<template>
  <div class="home pt-4">
    <div class="home-hero container-sm flex justify-center items-center">
      <h1
        class="font-extrabold text-4xl bg-clip-text bg-gradient-to-r from-gLeft via-gMiddle to-gRight m-2 p-2"
      >
        i do a bit of everything
      </h1>
    </div>
    <div class="container-lg flex flex-row items-center justify-center pb-12">
      <div v-for="item in works" :key="item.id" class="image-col flex p-8">
        <nuxt-link :to="item.link">
          <div
            class="flex items-center justify-center rounded-md flex-col hover:bg-info-50 cursor-pointer"
          >
            <img class="p-4" :src="item.src" :alt="item.alt" />
            <p class="font-semibold p-2">{{ item.text }}</p>
          </div>
        </nuxt-link>
      </div>
    </div>
    <div class="container-sm flex justify-center items-center">
      <button
        class="working-on rotate-12 rounded-lg border-2 border-dotted hover:border-solid hover:rotate-0 p-1"
      >
        <nuxt-link to="/working">Some research</nuxt-link>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      works: [
        {
          id: 1,
          src: '/images/mesm.png',
          alt: 'me',
          text: 'Pixel Art',
          link: '/pixelart',
        },
        {
          id: 2,
          src: '/images/frontend.png',
          alt: 'frontend',
          text: 'Frontend Development',
          link: '/frontend',
        },
        {
          id: 3,
          src: require('@/static/images/backend.png'),
          alt: 'backend',
          text: 'Backend Development',
          link: '/backend',
        },
        {
          id: 4,
          src: require('@/static/images/mobile.png'),
          alt: 'mobile',
          text: 'Mobile App Dev',
          link: '/mobile',
        },
        // {
        //   id: 5,
        //   src: require('@/static/images/questionmarksm.png'),
        //   alt: '',
        //   text: '',
        //   link: '/mew',
        // },
      ],
    }
  },
}
</script>
<style scoped>
.home-hero h1 {
  color: transparent;
}
</style>
